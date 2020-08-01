---
id: block_api
title: Block API
sidebar_label: Block API
---

The block API provides REST API endpoints for retrieving block data from the Aleo testnet.

## Components of a Block

```json
{
  "transactions": ["7a38bc5d1fd2c1f3355406eec505bcd722197d2dc679c1cf3465a3c41f51b615"],
  "hash": "e6dfa55eb904c386a70c8858f13f1bc2155fd3b506d17e63e456b9c30f04fd80",
  "height": 0,
  "merkleRoot": "fc88e8b29c042ae4daa7000e8f4f38ce17b66afb771df5b78a0f6407862da12a",
  "pedersenMerkleRoot": "38db6fa1fcd0c65976eb6366de3a0389730d94670dbf8850afba13700e7d5b05",
  "time": 1592698396,
  "nonce": 0,
  "previousBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
  "size": 1479,
  "proof":"5082a337d4b5879edaff32bce111463cdf3ee4d1cb0b4c700ce5035daedc0e114ef37ef3c1e891ae82ba1198f42e6301e0b70f8786f2fb09b38cd2107c0321ce03f3a3a3e7205f022b64a9ecee51daacbd8044c2cf59d640fa9030d14210ed000082e1ba324654c6388715d7ed7627dd11dc6b5032707bdf385d0b6282c6a79e229c4275aae7843950ceb5678e600d2801b75258c608adc1beb051ef678e121b272f55ddb69bc1b1ccccb759c611857b002622810741de54b7fdd167227c894e01d62a6baf2bb0eb739720ff797f758ca2e0c6bd3eb6eb2273ab0b4f402d44deebb77b692c96f28f126656e060dc900d00d12d9283aaf22a59399d8d9532e09254c44eeb850dcb4e5df3ae37bfec2472d1fbecc570307aa88569dbe037fbcc0901001aacd8db440a52ab82cba6f3f53a97617301bc04cedb156fef44142fef1bab7a81e0c6aa052ffd3255331296eab5bd003dc9266a83dd5829702609bb9692f37280c4788c16e8fb2650613533ec3b5312fc29f4c5162647f47cd0f7cb28e3740100"
  "difficultyTarget": 576460752303423500,
  "canonical": true,
}
```

The components of a block as provided are specific to the data structure provided by Aleo Explorer.

All components in a standard Aleo block are provided, in addition to possible helper parameters that accompany the primary data.

### Attributes

#### `hash` (string)

Hash of all of the block header data within this attribute.

#### `height` (number)

The height this current block is located at.

#### `canonical` (boolean)

A boolean value whether this block is currently in the longest chain.

#### `previousBlockHash` (string)

The hash of the previous block header.

#### `merkleRoot` (string)

Merkle root representing the transactions in the block.

#### `pedersonMerkleRoot` (string)

Merkle root representing the state of the block.

#### `time` (number)

Block timestamp is a Unix epoch time (UTC) when the miner started hashing the header (according to the miner and checked by every other miner).

#### `size` (number)

The size in bytes of the current block (sum of the size of all transactions + the values listed within this object).

#### `nonce` (number)

Nonce for solving the PoSW puzzle.

#### `proof` (string)

A succinct proof that attests to the transactions included in this block.

#### `transactions` (Array of hashes (strings))

A list of all the transactions included in this block.

#### `difficultyTarget` (number)

Proof of Succinct Work algorithm difficulty target for this block.

