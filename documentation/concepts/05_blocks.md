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


|    Parameter    |  Type  |          Description           |
|:---------------:|:------:|:------------------------------:|
|  `block_hash`   | string |     The hash of the block      |
| `previous_hash` | string | The hash of the previous block |
|    `header`     | object |    The header of the block     |
| `transactions`  | array  | The transactions in the block  |
|   `signature`   | array  |  The signature for the block   |

#### Block Header

The **block header** contains components that summarize the state of the specified block,
as well as the state of the ledger at this point in history. See the [components of a block header](#components-of-a-block-header)
for more details.

#### Transactions

The [**transactions**](./03_transactions.md) are a list of all transactions that are included in the specified block.

## Components of a Block Header

An Aleo block header is serialized in the following format:

|       Parameter       |  Type  |                                   Description                                   |
|:---------------------:|:------:|:-------------------------------------------------------------------------------:|
| `previous_state_root` | string | The Merkle root representing the blocks in the ledger up to the previous block. |
|  `transactions_root`  | string |           The Merkle root representing the transactions in the block.           |
|      `metadata`       | object |                           The metadata of the block.                            |

#### Metadata

|     Parameter     | Type |               Description               |
|:-----------------:|:----:|:---------------------------------------:|
|     `network`     | u16  |       The network ID of the block       |
|      `round`      | u64  |    The round that produced the block    |
|     `height`      | u32  |         The height of the block         |
| `coinbase_target` | u64  |    The coinbase target of the block     |
|  `proof_target`   | u64  |     The proof target for this block     |
|    `timestamp`    | i64  | The Unix timestamp (UTC) for this block |


[//]: # (## Advanced Topics)

[//]: # ()
[//]: # (### Verifying Blocks)

[//]: # ()
[//]: # (The steps to verify a block are as follows:)

[//]: # ()
[//]: # (1. Validate the block header )

[//]: # (    - Check that the `merkle_root_hash` is derived correctly)

[//]: # (    - Check that the `pedersen_merkle_root_hash` is derived correctly)

[//]: # (    - Check that the block timestamp is not more than 2 hours into the future)

[//]: # (    - Check that the block's difficulty target matches the expected difficulty target)

[//]: # (    - Check that the difficulty hash is less than or equal to the difficulty target)

[//]: # (    - Verify the PoSW proof)

[//]: # (2. Verify that there is only 1 coinbase transaction included in the block)

[//]: # (3. Verify that the sum of all transaction value balances are equal to the expected block reward)

[//]: # (4. Verify each transaction included in the block)

[//]: # ( )