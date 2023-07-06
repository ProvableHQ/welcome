---
id: "DevelopmentClient"
title: "Class: DevelopmentClient"
sidebar_label: "DevelopmentClient"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new DevelopmentClient**(`baseURL`)

Creates a new DevelopmentClient to interact with an Aleo Development Server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseURL` | `string` | The URL of the Aleo Development Server |

#### Defined in

[src/development_client.ts:61](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/development_client.ts#L61)

## Properties

### baseURL

• **baseURL**: `string`

Aleo Development Client for usage with an Aleo Development Server. This client is meant
to provide a typescript & javascript api for deploying and executing programs on the
Aleo Network using an Aleo Development Server. An Aleo Development Server is a rust-based
server which runs all the proving & verification operations needed to deploy and execute
programs and then posts program deployments and executions to the Aleo Network. This client
will send RESTful requests to that server and return the resulting transaction_id.

It requires an Aleo Development Server to be running locally. If one is not running, this
client will not work.

Information on how to run an Aleo Development Server can be found here:
https://github.com/AleoHQ/sdk/rust/develop/README.md

#### Defined in

[src/development_client.ts:54](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/development_client.ts#L54)

## Methods

### deployProgram

▸ **deployProgram**(`program`, `fee`, `privateKey?`, `password?`, `feeRecord?`): `Promise`<`string`\>

Deploys a program on the Aleo Network via an Aleo development server.
It requires an Aleo Development Server to be running remotely or locally.
If one is not running, this function will throw an error.

Information on how to run an Aleo Development Server can be found here:
https://github.com/AleoHQ/sdk/rust/develop/README.md

**`Example`**

```ts
const Program = 'program yourprogram.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n';
const client = new DevelopmentClient("http://0.0.0.0:4040");
const transaction_id = await client.deployProgram(Program, 6000000, privateKeyString);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `string` | Text representation of the program to be deployed |
| `fee` | `number` | Fee to be paid for the program deployment (REQUIRED) |
| `privateKey?` | `string` | Optional private key of the user who is deploying the program |
| `password?` | `string` | If the development server is started with an encrypted private key, the password is required |
| `feeRecord?` | `string` | Optional record in text format to be used for the fee. If not provided, the server will search the network for a suitable record to pay the fee. |

#### Returns

`Promise`<`string`\>

The transaction_id of the deployment transaction if successful

#### Defined in

[src/development_client.ts:94](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/development_client.ts#L94)

___

### executeProgram

▸ **executeProgram**(`programId`, `programFunction`, `fee`, `inputs`, `privateKey?`, `password?`, `feeRecord?`): `Promise`<`string`\>

Executes a program on the Aleo Network via an Aleo development server.
It requires an Aleo Development Server to be running remotely or locally.
If one is not running, this function will throw an error.

Information on how to run an Aleo Development Server can be found here:
https://github.com/AleoHQ/sdk/rust/develop/README.md

**`Example`**

```ts
const privateKey = "your private key";
const client = new DevelopmentClient("http://0.0.0.0:4040");
const transaction_id = await client.executeProgram("hello.aleo", "hello", 0, ["5u32", "5u32"], privateKeyString);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `programId` | `string` | The program_id of the program to be executed (e.g. hello.aleo) |
| `programFunction` | `string` | The function to execute within the program (e.g. hello) |
| `fee` | `number` | Optional Fee to be paid for the execution transaction, specify 0 for no fee |
| `inputs` | `string`[] | Array of inputs to be passed to the program |
| `privateKey?` | `string` | Optional private key of the user who is executing the program |
| `password?` | `string` | If the development server is started with an encrypted private key, the password is required |
| `feeRecord?` | `string` | Optional record in text format to be used for the fee. If not provided, the server will search the network for a suitable record to pay the fee. |

#### Returns

`Promise`<`string`\>

The transaction_id of the execution transaction if successful

#### Defined in

[src/development_client.ts:132](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/development_client.ts#L132)

___

### sendRequest

▸ **sendRequest**<`T`\>(`path`, `request`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `request` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/development_client.ts:66](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/development_client.ts#L66)

___

### transfer

▸ **transfer**(`amount`, `fee`, `recipient`, `transfer_type`, `privateKey?`, `password?`, `feeRecord?`, `amountRecord?`): `Promise`<`string`\>

Sends an amount in credits to a specified recipient on the Aleo Network
via an Aleo development server. It requires an Aleo Development Server
to be running remotely or locally. If one is not running, this function
will throw an error.

Information on how to run an Aleo Development Server can be found here:
https://github.com/AleoHQ/sdk/rust/develop/README.md

**`Example`**

```ts
const privateKey = "your private key";
const recipient = "recipient's address";
const client = new DevelopmentClient("http://0.0.0.0:4040");
const transaction_id = await client.transfer(1.5, 0, recipient, privateKey);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount of credits to be sent (e.g. 1.5) |
| `fee` | `number` | Optional Fee to be paid for the transfer, specify 0 for no fee |
| `recipient` | `string` | The recipient of the transfer |
| `transfer_type` | `string` | The type of the transfer (possible values are "private", "public", "private_to_public", "public_to_private") |
| `privateKey?` | `string` | Optional private key of the user who is sending the transfer |
| `password?` | `string` | If the development server is started with an encrypted private key, the password is required |
| `feeRecord?` | `string` | Optional record in text format to be used for the fee. If not provided, the server will search the network for a suitable record to pay the fee. |
| `amountRecord?` | `string` | Optional record in text format to be used to fund the transfer. If not provided, the server will search the network for a suitable record to fund the amount. |

#### Returns

`Promise`<`string`\>

The transaction_id of the execution transaction if successful

#### Defined in

[src/development_client.ts:177](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/development_client.ts#L177)
