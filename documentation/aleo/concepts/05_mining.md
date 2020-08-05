---
id: mining
title: Mining
sidebar_label: Mining
---

Mining is a permissionless process of producing new [blocks](03_blocks.md) for inclusion on Aleo.
Miners produce blocks by processing pending [transactions](02_transactions.md) and computing a valid
nonce for solving a [Proof of Succinct Work](04_consensus.md#proof-of-succinct-work) puzzle.

On success in finding a valid block, miners are compensated with a [block reward](#block-rewards) for their contribution. To
ensure Aleo continues to advance, a difficulty rate is dynamically adjusted to reflect the number
proofs per second that miners on Aleo contribute.

### Block Rewards

A block reward is the total amount of Aleo credits rewarded to the address that mined a block.
This value is the base block reward in addition to the fees paid by all transactions included in the block.

### Block Difficulty and Block Times

The block time is the amount of time it takes for the network to produce a valid block.
This block time is variable and based on the network's hashrate, but regulated by the block difficulty. 
The block difficulty is adjusted according to the most recent block times in order to regulate and
stabilize the average block time of the network.
