---
id: "modules"
title: "@aleohq/sdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [Account](classes/Account.md)
- [AleoNetworkClient](classes/AleoNetworkClient.md)
- [DevelopmentClient](classes/DevelopmentClient.md)

## Type Aliases

### Block

Ƭ **Block**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `block_hash` | `string` |
| `header` | `Header` |
| `previous_hash` | `string` |
| `signature` | `string` |
| `transactions?` | `ConfirmedTransaction`[] |

#### Defined in

[models/block.ts:3](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/models/block.ts#L3)

___

### Execution

Ƭ **Execution**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `edition` | `number` |
| `transitions?` | [`Transition`](modules.md#transition)[] |

#### Defined in

[models/execution.ts:3](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/models/execution.ts#L3)

___

### Input

Ƭ **Input**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `origin?` | `Origin` |
| `tag?` | `string` |
| `type` | `string` |
| `value?` | `string` |

#### Defined in

[models/input.ts:1](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/models/input.ts#L1)

___

### Output

Ƭ **Output**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checksum` | `string` |
| `id` | `string` |
| `type` | `string` |
| `value` | `string` |

#### Defined in

[models/output.ts:1](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/models/output.ts#L1)

___

### Transaction

Ƭ **Transaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execution` | [`Execution`](modules.md#execution) |
| `id` | `string` |
| `type` | `string` |

#### Defined in

[models/transaction.ts:3](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/models/transaction.ts#L3)

___

### Transition

Ƭ **Transition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fee` | `number` |
| `function` | `string` |
| `id` | `string` |
| `inputs?` | [`Input`](modules.md#input)[] |
| `outputs?` | [`Output`](modules.md#output)[] |
| `program` | `string` |
| `proof` | `string` |
| `tcm` | `string` |
| `tpk` | `string` |

#### Defined in

[models/transition.ts:4](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/models/transition.ts#L4)
