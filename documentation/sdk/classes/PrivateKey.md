---
id: "PrivateKey"
title: "Class: PrivateKey"
sidebar_label: "PrivateKey"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new PrivateKey**()

Generate a new private key

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:75

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:71

___

### sign

▸ **sign**(`message`): [`Signature`](Signature.md)

Sign a message with the private key

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:112

___

### toCiphertext

▸ **toCiphertext**(`secret`): `PrivateKeyCiphertext`

Encrypt the private key with a secret.

The secret is sensitive and will be needed to decrypt the private key later, so it should be stored securely

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `string` |

#### Returns

`PrivateKeyCiphertext`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:128

___

### to\_address

▸ **to_address**(): [`Address`](Address.md)

Get the address corresponding to the private key

#### Returns

[`Address`](Address.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:106

___

### to\_string

▸ **to_string**(): `string`

Get a string representation of the private key

This function should be used very carefully as it exposes the private key plaintext

#### Returns

`string`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:96

___

### to\_view\_key

▸ **to_view_key**(): [`ViewKey`](ViewKey.md)

Get the view key corresponding to the private key

#### Returns

[`ViewKey`](ViewKey.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:101

___

### fromPrivateKeyCiphertext

▸ `Static` **fromPrivateKeyCiphertext**(`ciphertext`, `secret`): [`PrivateKey`](PrivateKey.md)

Get private key from a private key ciphertext using a secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ciphertext` | `PrivateKeyCiphertext` |
| `secret` | `string` |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:135

___

### from\_seed\_unchecked

▸ `Static` **from_seed_unchecked**(`seed`): [`PrivateKey`](PrivateKey.md)

Get a private key from a series of unchecked bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `Uint8Array` |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:81

___

### from\_string

▸ `Static` **from_string**(`private_key`): [`PrivateKey`](PrivateKey.md)

Create a private key from a string representation

This function will fail if the text is not a valid private key

#### Parameters

| Name | Type |
| :------ | :------ |
| `private_key` | `string` |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:89

___

### newEncrypted

▸ `Static` **newEncrypted**(`secret`): `PrivateKeyCiphertext`

Get a private key ciphertext using a secret.

The secret is sensitive and will be needed to decrypt the private key later, so it should be stored securely

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `string` |

#### Returns

`PrivateKeyCiphertext`

#### Defined in

node_modules/@aleohq/nodejs/aleo_wasm.d.ts:120
