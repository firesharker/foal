[@foal/core](../README.md) > ["core/http/http-responses"](../modules/_core_http_http_responses_.md) > [HttpResponseNoContent](../classes/_core_http_http_responses_.httpresponsenocontent.md)

# Class: HttpResponseNoContent

Represent an HTTP response with the status 204 - NO CONTENT.

*__export__*: 

*__class__*: HttpResponseNoContent

*__extends__*: {HttpResponseSuccess}

## Hierarchy

↳  [HttpResponseSuccess](_core_http_http_responses_.httpresponsesuccess.md)

**↳ HttpResponseNoContent**

## Index

### Constructors

* [constructor](_core_http_http_responses_.httpresponsenocontent.md#constructor)

### Properties

* [body](_core_http_http_responses_.httpresponsenocontent.md#body)
* [isHttpResponse](_core_http_http_responses_.httpresponsenocontent.md#ishttpresponse)
* [isHttpResponseNoContent](_core_http_http_responses_.httpresponsenocontent.md#ishttpresponsenocontent)
* [isHttpResponseSuccess](_core_http_http_responses_.httpresponsenocontent.md#ishttpresponsesuccess)
* [statusCode](_core_http_http_responses_.httpresponsenocontent.md#statuscode)
* [statusMessage](_core_http_http_responses_.httpresponsenocontent.md#statusmessage)
* [stream](_core_http_http_responses_.httpresponsenocontent.md#stream)

### Methods

* [getCookie](_core_http_http_responses_.httpresponsenocontent.md#getcookie)
* [getCookies](_core_http_http_responses_.httpresponsenocontent.md#getcookies)
* [getHeader](_core_http_http_responses_.httpresponsenocontent.md#getheader)
* [getHeaders](_core_http_http_responses_.httpresponsenocontent.md#getheaders)
* [setCookie](_core_http_http_responses_.httpresponsenocontent.md#setcookie)
* [setHeader](_core_http_http_responses_.httpresponsenocontent.md#setheader)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HttpResponseNoContent**(): [HttpResponseNoContent](_core_http_http_responses_.httpresponsenocontent.md)

*Overrides [HttpResponseSuccess](_core_http_http_responses_.httpresponsesuccess.md).[constructor](_core_http_http_responses_.httpresponsesuccess.md#constructor)*

*Defined in [core/http/http-responses.ts:379](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L379)*

Create an instance of HttpResponseNoContent.

*__memberof__*: HttpResponseNoContent

**Returns:** [HttpResponseNoContent](_core_http_http_responses_.httpresponsenocontent.md)

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
<a id="ishttpresponsenocontent"></a>

###  isHttpResponseNoContent

**● isHttpResponseNoContent**: *`true`* = true

*Defined in [core/http/http-responses.ts:377](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L377)*

Property used internally by is HttpResponseNoContent.

*__memberof__*: HttpResponseNoContent

___
<a id="ishttpresponsesuccess"></a>

###  isHttpResponseSuccess

**● isHttpResponseSuccess**: *`true`* = true

*Inherited from [HttpResponseSuccess](_core_http_http_responses_.httpresponsesuccess.md).[isHttpResponseSuccess](_core_http_http_responses_.httpresponsesuccess.md#ishttpresponsesuccess)*

*Defined in [core/http/http-responses.ts:198](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L198)*

Property used internally by isHttpResponseSuccess.

*__memberof__*: HttpResponseSuccess

___
<a id="statuscode"></a>

###  statusCode

**● statusCode**: *`number`* = 204

*Overrides [HttpResponse](_core_http_http_responses_.httpresponse.md).[statusCode](_core_http_http_responses_.httpresponse.md#statuscode)*

*Defined in [core/http/http-responses.ts:378](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L378)*

___
<a id="statusmessage"></a>

###  statusMessage

**● statusMessage**: *`string`* = "NO CONTENT"

*Overrides [HttpResponse](_core_http_http_responses_.httpresponse.md).[statusMessage](_core_http_http_responses_.httpresponse.md#statusmessage)*

*Defined in [core/http/http-responses.ts:379](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/core/http/http-responses.ts#L379)*

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

