---
id: blocks
title: Blocks
sidebar_label: Blocks
---

A **block** is a fundamental data structure for organizing Aleo [transactions](03_transactions.md) over time.
Blocks are produced through a process called [mining](05_consensus.md#mining-on-aleo) and included as
permanent history on Aleo.

## Components of a Block

An Aleo block is serialized in the following format:

|     Parameter    |                                Type                                | Size (bytes) |
|:----------------:|:------------------------------------------------------------------:|:------------:|
|     `header`     |   [Block Header](#components-of-a-block-header)                    |      503     |
|`num_transactions`| [variable_length_integer](06_glossary.md#variable-length-integer)  |  `variable`  |
|  `transactions`  | \[[Transaction](03_transactions.md#components-of-a-transaction)\]  |  `variable`  |

#### Block Header

The **block header** contains components that summarize the state of the specified block,
as well as the state of the ledger at this point in history. See the [components of a block header](#components-of-a-block-header)
for more details.

#### Transactions

The **transactions** are a list of all transactions that are included in the specified block.


## Components of a Block Header

An Aleo block header is serialized in the following format:

|          Parameter          |   Type   | Size (bytes) |
|:---------------------------:|:--------:|:------------:|
|    `previous_block_hash`    |   bytes  |      32      |
|      `merkle_root_hash`     |   bytes  |      32      |
| `pedersen_merkle_root_hash` |   bytes  |      32      |
|           `proof`           |   bytes  |      387     |
|         `timestamp`         |    i64   |       8      |
|     `difficulty_target`     |    u64   |       8      |
|           `nonce`           |    u32   |       4      |

 
#### Previous Block Hash
 
The **previous block hash** is the block hash of the parent block.
 
#### Merkle Root Hash

The **Merkle root hash** represents the root hash of a Merkle tree of the transactions in the specified block.
 
#### Pedersen Merkle Root Hash

The **Pedersen Merkle root hash** represents the root hash of a Merkle tree of the transactions in the specified block, using a Pedersen hash.
 
#### Proof of Succinct Work
 
The *proof* is a valid Proof of Succient Work for mining the specified block.
 
#### Timestamp

The **timestamp** is encoded as the Unix epoch time (UTC) when the miner started hashing the header.

#### Difficulty Target

The **difficulty target** reflects the number of proofs per second being produced by miners on Aleo, and is used
to dynamically set the difficulty of mining on Aleo.
 
#### Nonce

The nonce for solving the PoSW puzzle.
 

## Advanced Topics

### Verifying Blocks

The steps to verify a block are as follows:

1. Validate the block header 
    - Check that the `merkle_root_hash` is derived correctly
    - Check that the `pedersen_merkle_root_hash` is derived correctly
    - Check that the block timestamp is not more than 2 hours into the future
    - Check that the block's difficulty target matches the expected difficulty target
    - Check that the difficulty hash is less than or equal to the difficulty target
    - Verify the PoSW proof
2. Verify that there is only 1 coinbase transaction included in the block
3. Verify that the sum of all transaction value balances are equal to the expected block reward
4. Verify each transaction included in the block
 