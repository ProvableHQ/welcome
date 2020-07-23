---
id: mining
title: Mining on Aleo
sidebar_label: Mining
---

## Mining

Mining is the process of generating a [blocks](03_blocks.md) to be added to the Aleo blockchain. Miners compete to process pending [transactions](02_transactions.md) to form blocks and are compensated for each valid block generated. 
Generating blocks is a computationally intensive operation and is regulated by the block difficulty established by the Aleo network. 

The consensus mechanism that Aleo uses for mining is [Proof of Succinct Work](04_consensus.md#proof-of-succinct-work). 

### Who can mine on Aleo?

Anyone can mine on the Aleo network by running a full node! 

### Block Rewards

A block reward is the total amount of Aleo Credits rewarded to the address that mined a block. This value is the base block reward in addition to the fees paid by all transactions included in the block.

### Block Difficulty and Block Times

The block time is the amount of time it takes for the network to produce a valid block. This block time is variable and based on the network's hashrate, but regulated by the block difficulty. 
The block difficulty is adjusted according to the most recent block times in order to regulate and stabilize the average block time of the network.
