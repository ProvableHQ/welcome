---
id: "Account"
title: "Class: Account"
sidebar_label: "Account"
sidebar_position: 0
custom_edit_url: null
---

Key Management class. Enables the creation of a new Aleo Account, importation of an existing account from
an existing private key or seed, and message signing and verification functionality.

An Aleo Account is generated from a randomly generated seed (number) from which an account private key, view key,
and a public account address are derived. The private key lies at the root of an Aleo account. It is a highly
sensitive secret and should be protected as it allows for creation of Aleo Program executions and arbitrary value
transfers. The View Key allows for decryption of a user's activity on the blockchain. The Address is the public
address to which other users of Aleo can send Aleo credits and other records to. This class should only be used
environments where the safety of the underlying key material can be assured.

**`Example`**

```ts
// Create a new account
let myRandomAccount = new Account();

// Create an account from a randomly generated seed
let seed = new Uint8Array([94, 91, 52, 251, 240, 230, 226, 35, 117, 253, 224, 210, 175, 13, 205, 120, 155, 214, 7, 169, 66, 62, 206, 50, 188, 40, 29, 122, 40, 250, 54, 18]);
let mySeededAccount = new Account({seed: seed});

// Create an account from an existing private key
let myExistingAccount = new Account({privateKey: 'myExistingPrivateKey'})

// Sign a message
let hello_world = Uint8Array.from([104, 101, 108, 108, 111 119, 111, 114, 108, 100])
let signature = myRandomAccount.sign(hello_world)

// Verify a signature
myRandomAccount.verify(hello_world, signature)
```

## Constructors

### constructor

• **new Account**(`params?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `AccountParam` |

#### Defined in

[account.ts:49](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L49)

## Properties

### \_address

• **\_address**: `Address`

#### Defined in

[account.ts:47](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L47)

___

### \_privateKey

• **\_privateKey**: `PrivateKey`

#### Defined in

[account.ts:45](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L45)

___

### \_viewKey

• **\_viewKey**: `ViewKey`

#### Defined in

[account.ts:46](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L46)

## Methods

### address

▸ **address**(): `Address`

#### Returns

`Address`

#### Defined in

[account.ts:98](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L98)

___

### decryptRecord

▸ **decryptRecord**(`ciphertext`): `string`

Decrypts a Record in ciphertext form into plaintext

**`Example`**

```ts
let account = new Account();
let record = account.decryptRecord("record1ciphertext");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ciphertext` | `string` |

#### Returns

`string`

#### Defined in

[account.ts:128](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L128)

___

### decryptRecords

▸ **decryptRecords**(`ciphertexts`): `string`[]

Decrypts an array of Records in ciphertext form into plaintext

**`Example`**

```ts
let account = new Account();
let record = account.decryptRecords(["record1ciphertext", "record2ciphertext"]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ciphertexts` | `string`[] |

#### Returns

`string`[]

#### Defined in

[account.ts:141](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L141)

___

### encryptAccount

▸ **encryptAccount**(`password`): `PrivateKeyCiphertext`

Encrypt the account's private key with a password

**`Example`**

```ts
let account = new Account();
let ciphertext = account.encryptAccount("password");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`PrivateKeyCiphertext`

#### Defined in

[account.ts:115](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L115)

___

### ownsRecordCiphertext

▸ **ownsRecordCiphertext**(`ciphertext`): `boolean`

Determines whether the account owns a ciphertext record

**`Example`**

```ts
// Create a connection to the Aleo network and an account
let connection = new NodeConnection("vm.aleo.org/api");
let account = Account.fromCiphertext("ciphertext", "password");

// Get a record from the network
let record = connection.getBlock(1234);
let recordCipherText = record.transactions[0].execution.transitions[0].id;

// Check if the account owns the record
if account.ownsRecord(recordCipherText) {
    // Then one can do something like:
    // Decrypt the record and check if it's spent
    // Store the record in a local database
    // Etc.
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ciphertext` | `string` \| `RecordCiphertext` |

#### Returns

`boolean`

#### Defined in

[account.ts:167](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L167)

___

### privateKey

▸ **privateKey**(): `PrivateKey`

#### Returns

`PrivateKey`

#### Defined in

[account.ts:90](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L90)

___

### privateKeyFromParams

▸ `Private` **privateKeyFromParams**(`params`): `PrivateKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `AccountParam` |

#### Returns

`PrivateKey`

#### Defined in

[account.ts:80](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L80)

___

### sign

▸ **sign**(`message`): `Signature`

Signs a message with the account's private key.
Returns a Signature.

**`Example`**

```ts
let account = new Account();
let message = Uint8Array.from([104, 101, 108, 108, 111 119, 111, 114, 108, 100])
account.sign(message);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Signature`

#### Defined in

[account.ts:194](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L194)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[account.ts:102](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L102)

___

### verify

▸ **verify**(`message`, `signature`): `boolean`

Verifies the Signature on a message.

**`Example`**

```ts
let account = new Account();
let message = Uint8Array.from([104, 101, 108, 108, 111 119, 111, 114, 108, 100])
let signature = account.sign(message);
account.verify(message, signature);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |
| `signature` | `Signature` |

#### Returns

`boolean`

#### Defined in

[account.ts:211](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L211)

___

### viewKey

▸ **viewKey**(): `ViewKey`

#### Returns

`ViewKey`

#### Defined in

[account.ts:94](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L94)

___

### fromCiphertext

▸ `Static` **fromCiphertext**(`ciphertext`, `password`): [`Account`](Account.md)

Attempts to create an account from a private key ciphertext

**`Example`**

```ts
let ciphertext = PrivateKey.newEncrypted("password");
let account = Account.fromCiphertext(ciphertext, "password");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ciphertext` | `string` \| `PrivateKeyCiphertext` |
| `password` | `string` |

#### Returns

[`Account`](Account.md)

#### Defined in

[account.ts:70](https://github.com/AleoHQ/sdk/blob/719e5e2/sdk/src/account.ts#L70)
