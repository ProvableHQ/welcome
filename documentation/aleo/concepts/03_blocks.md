---
id: blocks
title: Blocks
sidebar_label: Blocks
---

A **block** is a fundamental data structure for organizing Aleo [transactions](02_transactions.md) by time.
Blocks are generated through a process called [mining](04_consensus.md#mining-on-aleo) and blocks accepted by the network
denote the official state in the network.

## Components of a Block

An Aleo block is serialized in the following format:

|     Parameter    |                       Type                       | Size (bytes) |
|:----------------:|:------------------------------------------------:|:------------:|
|     `header`     |                    BlockHeader                   |      503     |
| num transactions | [variable_length_integer](06_glossary.md#variable-length-integer)|      1+      |
|  `transactions`  |                array[Transaction]                |       ?      |

#### Block Header

The [block header](#block-header) is the information describing the block.

#### Transactions

The transactions included in the block.


## Components of a Block Header

An Aleo block header is serialized in the following format:

|          Parameter          |   Type   | Size (bytes) |
|:---------------------------:|:--------:|:------------:|
|    `previous_block_hash`    |   bytes  |      32      |
|      `merkle_root_hash`     |   bytes  |      32      |
| `pedersen_merkle_root_hash` |   bytes  |      32      |
|           `proof`           | variable |      387     |
|            `time`           |    i64   |       8      |
|     `difficulty_target`     |    u64   |       8      |
|           `nonce`           |    u32   |       4      |

 
#### Previous Block Hash
 
The block hash of the parent block.
 
#### Merkle Root Hash

The Merkle root representing the transactions in the block.
 
#### Pedersen Merkle Root Hash

The Merkle root of the transactions in the block using a Pedersen hash.
 
#### Proof of Succinct Work
 
The Proof of Succient Work used to mine the block.
 
#### Timestamp

The block timestamp is a Unix epoch time (UTC) when the miner started hashing the header (according to the miner).

#### Difficulty Target

The PoSW difficulty target for this block.
 
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
4. Verify each transaction included i the block
 