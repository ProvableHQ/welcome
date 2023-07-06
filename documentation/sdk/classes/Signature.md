---
id: "Signature"
title: "Class: Signature"
sidebar_label: "Signature"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Signature**()

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:310

___

### to\_string

▸ **to_string**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:331

___

### verify

▸ **verify**(`address`, `message`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`Address`](Address.md) |
| `message` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:322

___

### from\_string

▸ `Static` **from_string**(`signature`): [`Signature`](Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:327

___

### sign

▸ `Static` **sign**(`private_key`, `message`): [`Signature`](Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `private_key` | [`PrivateKey`](PrivateKey.md) |
| `message` | `Uint8Array` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:316
