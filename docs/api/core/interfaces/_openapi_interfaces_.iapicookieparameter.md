[@foal/core](../README.md) > ["openapi/interfaces"](../modules/_openapi_interfaces_.md) > [IApiCookieParameter](../interfaces/_openapi_interfaces_.iapicookieparameter.md)

# Interface: IApiCookieParameter

## Hierarchy

 [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md)

**↳ IApiCookieParameter**

## Index

### Properties

* [content](_openapi_interfaces_.iapicookieparameter.md#content)
* [deprecated](_openapi_interfaces_.iapicookieparameter.md#deprecated)
* [description](_openapi_interfaces_.iapicookieparameter.md#description)
* [example](_openapi_interfaces_.iapicookieparameter.md#example)
* [examples](_openapi_interfaces_.iapicookieparameter.md#examples)
* [explode](_openapi_interfaces_.iapicookieparameter.md#explode)
* [in](_openapi_interfaces_.iapicookieparameter.md#in)
* [name](_openapi_interfaces_.iapicookieparameter.md#name)
* [required](_openapi_interfaces_.iapicookieparameter.md#required)
* [schema](_openapi_interfaces_.iapicookieparameter.md#schema)
* [style](_openapi_interfaces_.iapicookieparameter.md#style)

---

## Properties

<a id="content"></a>

### `<Optional>` content

**● content**: *`undefined` \| `object`*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[content](_openapi_interfaces_.iapiabstractparameter.md#content)*

*Defined in [openapi/interfaces.ts:918](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L918)*

A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.

*__type__*: {{ \[key: string\]: IApiMediaType; }}

*__memberof__*: IApiAbstractParameter

___
<a id="deprecated"></a>

### `<Optional>` deprecated

**● deprecated**: *`undefined` \| `false` \| `true`*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[deprecated](_openapi_interfaces_.iapiabstractparameter.md#deprecated)*

*Defined in [openapi/interfaces.ts:847](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L847)*

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false.

Source: [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

*__type__*: {boolean}

*__memberof__*: IApiAbstractParameter

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`undefined` \| `string`*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[description](_openapi_interfaces_.iapiabstractparameter.md#description)*

*Defined in [openapi/interfaces.ts:826](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L826)*

A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

Source: [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

*__type__*: {string}

*__memberof__*: IApiAbstractParameter

___
<a id="example"></a>

### `<Optional>` example

**● example**: *`any`*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[example](_openapi_interfaces_.iapiabstractparameter.md#example)*

*Defined in [openapi/interfaces.ts:894](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L894)*

Example of the media type. The example SHOULD match the specified schema and encoding properties if present. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema. To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.

Source: [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

*__type__*: {\*}

*__memberof__*: IApiAbstractParameter

___
<a id="examples"></a>

### `<Optional>` examples

**● examples**: *`undefined` \| `object`*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[examples](_openapi_interfaces_.iapiabstractparameter.md#examples)*

*Defined in [openapi/interfaces.ts:906](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L906)*

Examples of the media type. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.

*__type__*: {({ \[key: string\]: IApiExample \| IApiReference; })}

*__memberof__*: IApiAbstractParameter

___
<a id="explode"></a>

### `<Optional>` explode

**● explode**: *`undefined` \| `false` \| `true`*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[explode](_openapi_interfaces_.iapiabstractparameter.md#explode)*

*Defined in [openapi/interfaces.ts:871](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L871)*

When this is true, parameter values of type array or object generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When style is form, the default value is true. For all other styles, the default value is false.

Source: [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

*__type__*: {boolean}

*__memberof__*: IApiAbstractParameter

___
<a id="in"></a>

###  in

**● in**: *"cookie"*

*Overrides [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[in](_openapi_interfaces_.iapiabstractparameter.md#in)*

*Defined in [openapi/interfaces.ts:964](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L964)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[name](_openapi_interfaces_.iapiabstractparameter.md#name)*

*Defined in [openapi/interfaces.ts:807](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L807)*

The name of the parameter. Parameter names are case sensitive.

*   If in is "path", the name field MUST correspond to the associated path segment from the path field in the Paths Object. See Path Templating for further information.
*   If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
*   For all other cases, the name corresponds to the parameter name used by the in property.

Source: [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

*__type__*: {string}

*__memberof__*: IApiAbstractParameter

___
<a id="required"></a>

### `<Optional>` required

**● required**: *`undefined` \| `false` \| `true`*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[required](_openapi_interfaces_.iapiabstractparameter.md#required)*

*Defined in [openapi/interfaces.ts:837](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L837)*

Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

Source: [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

*__type__*: {boolean}

*__memberof__*: IApiAbstractParameter

___
<a id="schema"></a>

### `<Optional>` schema

**● schema**: *[IApiSchema](_openapi_interfaces_.iapischema.md) \| [IApiReference](_openapi_interfaces_.iapireference.md)*

*Inherited from [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[schema](_openapi_interfaces_.iapiabstractparameter.md#schema)*

*Defined in [openapi/interfaces.ts:880](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L880)*

The schema defining the type used for the parameter.

Source: [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

*__type__*: {(IApiSchema \| IApiReference)}

*__memberof__*: IApiAbstractParameter

___
<a id="style"></a>

### `<Optional>` style

**● style**: *`undefined` \| "form"*

*Overrides [IApiAbstractParameter](_openapi_interfaces_.iapiabstractparameter.md).[style](_openapi_interfaces_.iapiabstractparameter.md#style)*

*Defined in [openapi/interfaces.ts:965](https://github.com/FoalTS/foal/blob/538afb23/packages/core/src/openapi/interfaces.ts#L965)*

___

