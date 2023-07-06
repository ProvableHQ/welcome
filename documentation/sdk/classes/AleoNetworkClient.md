---
id: "AleoNetworkClient"
title: "Class: AleoNetworkClient"
sidebar_label: "AleoNetworkClient"
sidebar_position: 0
custom_edit_url: null
---

Connection management class that encapsulates REST calls to publicly exposed endpoints of Aleo nodes.
The methods provided in this class provide information on the Aleo Blockchain

**`Param`**

**`Example`**

```ts
// Connection to a local node
let local_connection = new AleoNetworkClient("http://localhost:3030");

// Connection to a public beacon node
let public_connection = new AleoNetworkClient("https://vm.aleo.org/api");
```

## Constructors

### constructor

• **new AleoNetworkClient**(`host`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |

#### Defined in

[src/aleo_network_client.ts:21](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L21)

## Properties

### account

• **account**: `undefined` \| [`Account`](Account.md)

#### Defined in

[src/aleo_network_client.ts:19](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L19)

___

### host

• **host**: `string`

#### Defined in

[src/aleo_network_client.ts:18](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L18)

## Methods

### fetchData

▸ **fetchData**<`Type`\>(`url?`): `Promise`<`Type`\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `"/"` |

#### Returns

`Promise`<`Type`\>

#### Defined in

[src/aleo_network_client.ts:47](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L47)

___

### findUnspentRecords

▸ **findUnspentRecords**(`startHeight`, `endHeight`, `privateKey`, `amounts`, `maxMicrocredits`): `Promise`<`Error` \| `RecordPlaintext`[]\>

Attempts to find unspent records in the Aleo blockchain for a specified private key

**`Example`**

```ts
// Find all unspent records
const privateKey = "[PRIVATE_KEY]";
let records = connection.findUnspentRecords(0, undefined, privateKey);

// Find specific amounts
const startHeight = 500000;
const amounts = [600000, 1000000];
let records = connection.findUnspentRecords(startHeight, undefined, privateKey, amounts);

// Find specific amounts with a maximum number of cumulative microcredits
const maxMicrocredits = 100000;
let records = connection.findUnspentRecords(startHeight, undefined, privateKey, undefined, maxMicrocredits);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `startHeight` | `number` |
| `endHeight` | `undefined` \| `number` |
| `privateKey` | `undefined` \| `string` |
| `amounts` | `undefined` \| `number`[] |
| `maxMicrocredits` | `undefined` \| `number` |

#### Returns

`Promise`<`Error` \| `RecordPlaintext`[]\>

#### Defined in

[src/aleo_network_client.ts:270](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L270)

___

### getAccount

▸ **getAccount**(): `undefined` \| [`Account`](Account.md)

Return the Aleo account used in the node connection

**`Example`**

```ts
let account = connection.getAccount();
```

#### Returns

`undefined` \| [`Account`](Account.md)

#### Defined in

[src/aleo_network_client.ts:43](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L43)

___

### getBlock

▸ **getBlock**(`height`): `Promise`<`Error` \| [`Block`](../modules.md#block)\>

Returns the block contents of the block at the specified block height

**`Example`**

```ts
let block = connection.getBlock(1234);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`Promise`<`Error` \| [`Block`](../modules.md#block)\>

#### Defined in

[src/aleo_network_client.ts:65](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L65)

___

### getBlockRange

▸ **getBlockRange**(`start`, `end`): `Promise`<`Error` \| [`Block`](../modules.md#block)[]\>

Returns a range of blocks between the specified block heights

**`Example`**

```ts
let blockRange = connection.getBlockRange(2050, 2100);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`Promise`<`Error` \| [`Block`](../modules.md#block)[]\>

#### Defined in

[src/aleo_network_client.ts:82](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L82)

___

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`Error` \| [`Block`](../modules.md#block)\>

Returns the block contents of the latest block

**`Example`**

```ts
let latestHeight = connection.getLatestBlock();
```

#### Returns

`Promise`<`Error` \| [`Block`](../modules.md#block)\>

#### Defined in

[src/aleo_network_client.ts:145](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L145)

___

### getLatestHash

▸ **getLatestHash**(): `Promise`<`string` \| `Error`\>

Returns the hash of the last published block

**`Example`**

```ts
let latestHash = connection.getLatestHash();
```

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[src/aleo_network_client.ts:159](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L159)

___

### getLatestHeight

▸ **getLatestHeight**(): `Promise`<`number` \| `Error`\>

Returns the latest block height

**`Example`**

```ts
let latestHeight = connection.getLatestHeight();
```

#### Returns

`Promise`<`number` \| `Error`\>

#### Defined in

[src/aleo_network_client.ts:173](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L173)

___

### getMappingValue

▸ **getMappingValue**(`programId`, `mappingName`, `key`): `Promise`<`string` \| `Error`\>

Returns the value of a program's mapping for a specific key

**`Example`**

```ts
## Get public balance of an account
let mappingValue = connection.getMappingValue("credits.aleo", "account", "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | `string` |
| `mappingName` | `string` |
| `key` | `string` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[src/aleo_network_client.ts:131](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L131)

___

### getProgram

▸ **getProgram**(`programId`): `Promise`<`string` \| `Error`\>

Returns the source code of a program

**`Example`**

```ts
let program = connection.getProgram("foo.aleo");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | `string` |

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[src/aleo_network_client.ts:98](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L98)

___

### getProgramMappingNames

▸ **getProgramMappingNames**(`programId`): `Promise`<`Error` \| `string`[]\>

Returns the names of the mappings of a program

**`Example`**

```ts
let mappings = connection.getProgramMappingNames("credits.aleo");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | `string` |

#### Returns

`Promise`<`Error` \| `string`[]\>

#### Defined in

[src/aleo_network_client.ts:113](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L113)

___

### getStateRoot

▸ **getStateRoot**(): `Promise`<`string` \| `Error`\>

Returns the latest state/merkle root of the Aleo blockchain

**`Example`**

```ts
let stateRoot = connection.getStateRoot();
```

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

[src/aleo_network_client.ts:187](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L187)

___

### getTransaction

▸ **getTransaction**(`id`): `Promise`<`Error` \| [`Transaction`](../modules.md#transaction)\>

Returns a transaction by its unique identifier

**`Example`**

```ts
let transaction = connection.getTransaction("at1handz9xjrqeynjrr0xay4pcsgtnczdksz3e584vfsgaz0dh0lyxq43a4wj");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`Error` \| [`Transaction`](../modules.md#transaction)\>

#### Defined in

[src/aleo_network_client.ts:202](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L202)

___

### getTransactions

▸ **getTransactions**(`height`): `Promise`<`Error` \| [`Transaction`](../modules.md#transaction)[]\>

Returns the transactions present at the specified block height

**`Example`**

```ts
let transactions = connection.getTransactions(654);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`Promise`<`Error` \| [`Transaction`](../modules.md#transaction)[]\>

#### Defined in

[src/aleo_network_client.ts:217](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L217)

___

### getTransactionsInMempool

▸ **getTransactionsInMempool**(): `Promise`<`Error` \| [`Transaction`](../modules.md#transaction)[]\>

Returns the transactions in the memory pool.

**`Example`**

```ts
let transactions = connection.getTransactionsInMempool();
```

#### Returns

`Promise`<`Error` \| [`Transaction`](../modules.md#transaction)[]\>

#### Defined in

[src/aleo_network_client.ts:231](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L231)

___

### getTransitionId

▸ **getTransitionId**(`transition_id`): `Promise`<`Error` \| [`Transition`](../modules.md#transition)\>

Returns the transition id by its unique identifier

**`Example`**

```ts
let transition = connection.getTransitionId("2429232855236830926144356377868449890830704336664550203176918782554219952323field");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `transition_id` | `string` |

#### Returns

`Promise`<`Error` \| [`Transition`](../modules.md#transition)\>

#### Defined in

[src/aleo_network_client.ts:245](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L245)

___

### setAccount

▸ **setAccount**(`account`): `void`

Set an account

**`Example`**

```ts
let account = new Account();
connection.setAccount(account);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](Account.md) |

#### Returns

`void`

#### Defined in

[src/aleo_network_client.ts:33](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/aleo_network_client.ts#L33)
