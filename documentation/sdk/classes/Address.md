---
id: "Address"
title: "Class: Address"
sidebar_label: "Address"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Address**()

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:6

___

### to\_string

▸ **to_string**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:25

___

### verify

▸ **verify**(`message`, `signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |
| `signature` | [`Signature`](Signature.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:31

___

### from\_private\_key

▸ `Static` **from_private_key**(`private_key`): [`Address`](Address.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `private_key` | [`PrivateKey`](PrivateKey.md) |

#### Returns

[`Address`](Address.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:11

___

### from\_string

▸ `Static` **from_string**(`address`): [`Address`](Address.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Address`](Address.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:21

___

### from\_view\_key

▸ `Static` **from_view_key**(`view_key`): [`Address`](Address.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view_key` | [`ViewKey`](ViewKey.md) |

#### Returns

[`Address`](Address.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:16
