import {
  Class, Config, Context, Hook, HookDecorator, HttpResponse,
  HttpResponseBadRequest,
  HttpResponseRedirect,
  HttpResponseUnauthorized,
  ServiceManager
} from '../core';
import { SESSION_DEFAULT_COOKIE_NAME } from './constants';
import { removeSessionCookie } from './remove-session-cookie';
import { Session } from './session';
import { SessionStore } from './session-store';
import { setSessionCookie } from './set-session-cookie';

class InvalidRequestResponse extends HttpResponseBadRequest {

  constructor(description: string) {
    super({ code: 'invalid_request', description });
  }

}

class InvalidTokenResponse extends HttpResponseUnauthorized {

  constructor(description: string) {
    super({ code: 'invalid_token', description });
    this.setHeader(
      'WWW-Authenticate',
      `error="invalid_token", error_description="${description}"`
    );
  }

}

export interface TokenOptions {
  user?: (id: string|number) => Promise<any|undefined>;
  store: Class<SessionStore>;
  cookie?: boolean;
  redirectTo?: string;
  openapi?: boolean;
  extendLifeTimeOrUpdate?: boolean;
}

export function Token(required: boolean, options: TokenOptions): HookDecorator {
  return Hook(async (ctx: Context, services: ServiceManager) => {
    const cookieName = Config.get<string>('settings.session.cookie.name', SESSION_DEFAULT_COOKIE_NAME);

    /* Validate the request */

    let token: string;
    if (options.cookie) {
      const content = ctx.request.cookies[cookieName] as string|undefined;

      if (!content) {
        if (!required) {
          return;
        }
        if (options.redirectTo) {
          return new HttpResponseRedirect(options.redirectTo);
        }
        return new InvalidRequestResponse('Session cookie not found.');
      }

      token = content;
    } else {
      const authorizationHeader = ctx.request.get('Authorization') as string|undefined || '';

      if (!authorizationHeader) {
        if (!required) {
          return;
        }
        if (options.redirectTo) {
          return new HttpResponseRedirect(options.redirectTo);
        }
        return new InvalidRequestResponse('Authorization header not found.');
      }

      const content = authorizationHeader.split('Bearer ')[1] as string|undefined;
      if (!content) {
        if (options.redirectTo) {
          return new HttpResponseRedirect(options.redirectTo);
        }
        return new InvalidRequestResponse('Expected a bearer token. Scheme is Authorization: Bearer <token>.');
      }

      token = content;
    }

    /* Verify the token */

    const sessionID = Session.verifyTokenAndGetId(token);
    if (!sessionID) {
      let response: HttpResponse = new InvalidTokenResponse('invalid token');
      if (options.redirectTo) {
        response = new HttpResponseRedirect(options.redirectTo);
      }
      if (options.cookie) {
        removeSessionCookie(response);
      }
      return response;
    }

    /* Verify the session ID */

    const store = services.get(options.store);
    const session = await store.read(sessionID);

    if (!session) {
      let response: HttpResponse = new InvalidTokenResponse('token invalid or expired');
      if (options.redirectTo) {
        response = new HttpResponseRedirect(options.redirectTo);
      }
      if (options.cookie) {
        removeSessionCookie(response);
      }
      return response;
    }

    ctx.session = session;

    /* Verify the session content */

    let userId: any = session.get('userId');

    if (!options.user) {
      ctx.user = userId;
    } else {
      if (typeof userId === 'object' && userId !== null) {
        userId = userId.toString();
      }
      if (typeof userId !== 'number' && typeof userId !== 'string') {
        throw new Error(
          `The "userId" value of the session ${sessionID} must be a string or a number. Got "${typeof userId}".`
        );
      }
      const user = await options.user(userId);
      if (!user) {
        if (options.redirectTo) {
          return new HttpResponseRedirect(options.redirectTo);
        }
        return new InvalidTokenResponse('The token does not match any user.');
      }
      ctx.user = user;
    }

    if (options.extendLifeTimeOrUpdate === false) {
      return;
    }

    return async (response: HttpResponse) => {
      if (session.isModified) {
        await store.update(session);
      } else {
        await store.extendLifeTime(session.sessionID);
      }
      if (options.cookie) {
        setSessionCookie(response, session.getToken());
      }
    };
  });
}
