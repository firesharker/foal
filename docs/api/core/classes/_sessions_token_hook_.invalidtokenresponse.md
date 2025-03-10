[@foal/core](../README.md) > ["sessions/token.hook"](../modules/_sessions_token_hook_.md) > [InvalidTokenResponse](../classes/_sessions_token_hook_.invalidtokenresponse.md)

# Class: InvalidTokenResponse

## Hierarchy

↳  [HttpResponseUnauthorized](_core_http_http_responses_.httpresponseunauthorized.md)

**↳ InvalidTokenResponse**

## Index

### Constructors

* [constructor](_sessions_token_hook_.invalidtokenresponse.md#constructor)

### Properties

* [body](_sessions_token_hook_.invalidtokenresponse.md#body)
* [isHttpResponse](_sessions_token_hook_.invalidtokenresponse.md#ishttpresponse)
* [isHttpResponseClientError](_sessions_token_hook_.invalidtokenresponse.md#ishttpresponseclienterror)
* [isHttpResponseUnauthorized](_sessions_token_hook_.invalidtokenresponse.md#ishttpresponseunauthorized)
* [statusCode](_sessions_token_hook_.invalidtokenresponse.md#statuscode)
* [statusMessage](_sessions_token_hook_.invalidtokenresponse.md#statusmessage)
* [stream](_sessions_token_hook_.invalidtokenresponse.md#stream)

### Methods

* [getCookie](_sessions_token_hook_.invalidtokenresponse.md#getcookie)
* [getCookies](_sessions_token_hook_.invalidtokenresponse.md#getcookies)
* [getHeader](_sessions_token_hook_.invalidtokenresponse.md#getheader)
* [getHeaders](_sessions_token_hook_.invalidtokenresponse.md#getheaders)
* [setCookie](_sessions_token_hook_.invalidtokenresponse.md#setcookie)
* [setHeader](_sessions_token_hook_.invalidtokenresponse.md#setheader)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new InvalidTokenResponse**(description: *`string`*): [InvalidTokenResponse](_sessions_token_hook_.invalidtokenresponse.md)

*Overrides [HttpResponseUnauthorized](_core_http_http_responses_.httpresponseunauthorized.md).[constructor](_core_http_http_responses_.httpresponseunauthorized.md#constructor)*

*Defined in [sessions/token.hook.ts:22](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/sessions/token.hook.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| description | `string` |

**Returns:** [InvalidTokenResponse](_sessions_token_hook_.invalidtokenresponse.md)

___

## Properties

<a id="body"></a>

### `<Optional>` body

**● body**: *`any`*

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[body](_core_http_http_responses_.httpresponse.md#body)*

*Defined in [core/http/http-responses.ts:77](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L77)*

___
<a id="ishttpresponse"></a>

###  isHttpResponse

**● isHttpResponse**: *`true`* = true

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[isHttpResponse](_core_http_http_responses_.httpresponse.md#ishttpresponse)*

*Defined in [core/http/http-responses.ts:42](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L42)*

Property used internally by isHttpResponse.

*__memberof__*: HttpResponse

___
<a id="ishttpresponseclienterror"></a>

###  isHttpResponseClientError

**● isHttpResponseClientError**: *`true`* = true

*Inherited from [HttpResponseClientError](_core_http_http_responses_.httpresponseclienterror.md).[isHttpResponseClientError](_core_http_http_responses_.httpresponseclienterror.md#ishttpresponseclienterror)*

*Defined in [core/http/http-responses.ts:563](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L563)*

Property used internally by isHttpResponseClientError.

*__memberof__*: HttpResponseClientError

___
<a id="ishttpresponseunauthorized"></a>

###  isHttpResponseUnauthorized

**● isHttpResponseUnauthorized**: *`true`* = true

*Inherited from [HttpResponseUnauthorized](_core_http_http_responses_.httpresponseunauthorized.md).[isHttpResponseUnauthorized](_core_http_http_responses_.httpresponseunauthorized.md#ishttpresponseunauthorized)*

*Defined in [core/http/http-responses.ts:653](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L653)*

Property used internally by isHttpResponseUnauthorized.

*__memberof__*: HttpResponseUnauthorized

___
<a id="statuscode"></a>

###  statusCode

**● statusCode**: *`number`* = 401

*Inherited from [HttpResponseUnauthorized](_core_http_http_responses_.httpresponseunauthorized.md).[statusCode](_core_http_http_responses_.httpresponseunauthorized.md#statuscode)*

*Overrides [HttpResponse](_core_http_http_responses_.httpresponse.md).[statusCode](_core_http_http_responses_.httpresponse.md#statuscode)*

*Defined in [core/http/http-responses.ts:654](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L654)*

___
<a id="statusmessage"></a>

###  statusMessage

**● statusMessage**: *`string`* = "UNAUTHORIZED"

*Inherited from [HttpResponseUnauthorized](_core_http_http_responses_.httpresponseunauthorized.md).[statusMessage](_core_http_http_responses_.httpresponseunauthorized.md#statusmessage)*

*Overrides [HttpResponse](_core_http_http_responses_.httpresponse.md).[statusMessage](_core_http_http_responses_.httpresponse.md#statusmessage)*

*Defined in [core/http/http-responses.ts:655](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L655)*

___
<a id="stream"></a>

###  stream

**● stream**: *`boolean`* = false

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[stream](_core_http_http_responses_.httpresponse.md#stream)*

*Defined in [core/http/http-responses.ts:67](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L67)*

Specify if the body property is a stream.

*__type__*: {boolean}

*__memberof__*: HttpResponse

___

## Methods

<a id="getcookie"></a>

###  getCookie

▸ **getCookie**(name: *`string`*): `object`

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[getCookie](_core_http_http_responses_.httpresponse.md#getcookie)*

*Defined in [core/http/http-responses.ts:138](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L138)*

Read the value and directives of a cookie added with setCookie.

*__memberof__*: HttpResponse

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The cookie name. |

**Returns:** `object`
)} The cookie value and directives or undefined and an empty object if the cookie does not exist.

___
<a id="getcookies"></a>

###  getCookies

▸ **getCookies**(): `object`

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[getCookies](_core_http_http_responses_.httpresponse.md#getcookies)*

*Defined in [core/http/http-responses.ts:153](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L153)*

Read all the cookies added with setCookie.

*__memberof__*: HttpResponse

**Returns:** `object`
})} The name, value and directives of the cookies.

___
<a id="getheader"></a>

###  getHeader

▸ **getHeader**(name: *`string`*): `string` \| `undefined`

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[getHeader](_core_http_http_responses_.httpresponse.md#getheader)*

*Defined in [core/http/http-responses.ts:102](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L102)*

Read the value of a header added with setHeader.

*__memberof__*: HttpResponse

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The header name. |

**Returns:** `string` \| `undefined`
The header value or undefined if it does not exist.

___
<a id="getheaders"></a>

###  getHeaders

▸ **getHeaders**(): `object`

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[getHeaders](_core_http_http_responses_.httpresponse.md#getheaders)*

*Defined in [core/http/http-responses.ts:112](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L112)*

Read all the headers added with setHeader.

*__memberof__*: HttpResponse

**Returns:** `object`
*   The headers.

___
<a id="setcookie"></a>

###  setCookie

▸ **setCookie**(name: *`string`*, value: *`string`*, options?: *[CookieOptions](../interfaces/_core_http_http_responses_.cookieoptions.md)*): `this`

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[setCookie](_core_http_http_responses_.httpresponse.md#setcookie)*

*Defined in [core/http/http-responses.ts:125](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L125)*

Add or replace a cookie in the response.

*__memberof__*: HttpResponse

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| name | `string` | - |  The cookie name. |
| value | `string` | - |  The cookie value. |
| `Default value` options | [CookieOptions](../interfaces/_core_http_http_responses_.cookieoptions.md) |  {} |

**Returns:** `this`

___
<a id="setheader"></a>

###  setHeader

▸ **setHeader**(name: *`string`*, value: *`string`*): `this`

*Inherited from [HttpResponse](_core_http_http_responses_.httpresponse.md).[setHeader](_core_http_http_responses_.httpresponse.md#setheader)*

*Defined in [core/http/http-responses.ts:89](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L89)*

Add or replace a header in the response.

*__memberof__*: HttpResponse

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The header name. |
| value | `string` |  The value name. |

**Returns:** `this`

___

