---
id: transaction_api
title: Transaction API
sidebar_label: Transaction API
---

The Transaction API provides endpoints to retrieve the state of transactions on the Aleo testnet.

## Components of a Transaction Object

```json
{
  "hash": "38f4c040b6bf4f507dfeffdaceb895450a12a56e3290547fd6803ee2144a3412",
  "memo": "a192433de8dd30bdad8aa23ea95a2dce147f4b1a5821d810e20aa3981eb3d40a",
  "newCommitments": [
    "abc1b342489143d0de04980ed154fe2063ad89b46d1632c894d7edb432d7cc05",
    "1350d1e7e57d3f5763bfe534d36d624d2fccd73315523d303c6dee1d4fcb7f0b"
  ],
  "oldSerialNumbers": [
    "c96c5028c0e6ea668628c4b631d9b9c2dc7de6ea66151571b518e903fb712205",
    "4474b7b139eeb1554a017d92ef52c19bf6d629c071aaebaa542f30dc20101801"
  ],
  "size": 975,
  "valueBalance": -100,
  "digest": "54db5e71a8365c8edbda28b4f66e9f657c613efac056fc870eedd57833e2e408",
  "transactionProof": "78b07eb75ea173613fd2a6a31306efa2c7f197fbd40c5b584f4adf20a2ee0713ebe06166c136df07f4e8f1c4e62082b446a6b1aed8a956aa6f689c8ad50023ab224d3c9a15a6df99edf441ca292dbe6ff3e8950735fb8c76d5f1823395b30c01b426c2bda6d89bc1d5ccbb18d4553bbb4b3375a0c2479f80c73f2f82988be86007e7c9e59dd3e32cd9bc326a52b920169bac12ea968e97e440bd5be7f89ed9db06e1345520f8092b8882bd7859f6a76160c516be08d69692a68a77efa4bab70000522a186592ea6deb08010af62485152ba0f1a59f7ec0d7fe5d464b934814db811d866cd55122d7caeee9348fa3340a60e32390762a1c1c1b4468bf36886341d1c31c28856c095cc3915fac59d6f533164c06e9706725735483f1a5db5026ec003a0d7fce4ec98f87b92e0049de8b64d40e59cb56e1ec39e0a9bb9aabb5ae1379c311e7f4286e5f716a1eb95a61827e20c30dd8ad270ba241ba2f22443bd64651c0c5eefeadf8857338d991a0563e88d823b7d086437ff8e4a4ea3f347e135400004b7a70aaa71954693c68facfbdd3de131809df5cd5abcf86c62d3f522d42ef02bd9ac0283904237dbdc63f4d0868fb5a4d39da3a6c7d07f0ca6494ceed96a6982808d54dda077fea253348cf022126590c3230e90e8c5cfb349439c16226b100912844666b329fad72f2ebbdabf547680ce9b0dfe7998f08f1226c258a4b3a65da3e0ec7b740a235d39f65661f82fc57deb3dd9356f3e7a0230ddc602b7a9516018c0c266f4021541cc942966cb6dc7c9f31f3dc46b935d05551fcec0aec480000",
  "localDataCommitment": "25895c996977f334e73617f7652e6e1f1f460febc137e45ab2edf49a176d8d01",
  "predicateCommitment": "d4ff4c434a91eddc7a85575e2d6e773b76ec1d3f26d069b8a6aed7b58b8fa68b",
  "signatures": [
    "91fa6c5216de064f5b255dd2c708366db07c0a9e3bc41e217394cfdccede14040000000000000000000000000000000000000000000000000000000000000000",
    "b530081532a0a9b78f18845a256957dc6cce196ec883f2be262bb8ab32ced8010000000000000000000000000000000000000000000000000000000000000000"
  ],
  "parentBlock": {
    "hash": "46eee8828773c13b1927a9b91a91dfbc6ad877323316e11176941a7b22711093",
    "height": 0,
    "time": 1593478069,
    "canonical": true
  }
}
```

### Attributes

#### `hash` (string)

Hash of all of the transaction attributes.

#### `parentBlock` (block object or string)

The parent block of this current transaction, can either be a block object or a string referencing a block hash.

#### `memo` (string)

An optional 32 byte memo field.

#### `newCommitments` (string)

List of commitments corresponding to newly produced records in this transaction.

#### `oldSerialNumbers` (string)

List of serial numbers corresponding to records consumed in this transaction.

#### `size` (number)

The size of the current transaction in bytes.

#### `digest` (string)

The Merkle root hash of the block this transaction is transacted from

#### `transactionProof` (string)

A succinct proof that the predicate proofs (applications) ran correctly, the inner proof was valid, and that the outputs were verified to be correct.

#### `localDataCommitment` (number)

Commitment to local data (used to verify the outer proof).

#### `predicateDataCommitment` (number)

Commitment to the predicate state (used to verify the outer proof).

#### `valueBalance` (number)

The transaction fee for the miner (positive number). The mining reward for the miner (negative number).

#### `signatures` (array of two hashes (strings))

List of signatures authorizing each of the old records to be spent (Miner checks that each signature corresponds to the serial number of an old record)

#### `parentBlock` (excerpt of block object)

Core values of the block this transaction is a part of (time of block, block hash, which height the block is at and whether it is canonical or not).
