---
id: overview
title: Testnet III.
sidebar_label: Overview
---

:::note
Aleo Testnet III is **not** ready for production use and will undergo thorough audit and testing before reaching production.
Aleo Testnet III is a trusted testnet - subsequent testnets will undergo a trusted setup process.
:::

**Aleo Testnet III** is an experimental network for developers to begin building and testing applications on Aleo.
Testnet III is used by the core team for designing and evaluating new programs, planning and staging network upgrades,
and running experimental features for inclusion on mainnet.

## The Network

The Aleo Testnet3 API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer).

To connect to the network, make a request to an Aleo Testnet III bootnode.


| Status |  Region  | URL              |
|:------:|:--------:|------------------|
|  Live  | Americas | vm.aleo.org/api/ |

## snarkOS

`snarkOS` is a decentralized operating system for anonymous web applications. It forms the backbone of Aleo and 
enables developers to checkpoint and finalize application state in a publicly-verifiable manner.

### Source Code

`snarkOS` is open-source and publicly-hosted on [GitHub](https://github.com/AleoHQ/snarkOS).

## API
- [Latest Height](../public_endpoints/00_latest_height.md)
- [Latest Hash](../public_endpoints/01_latest_hash.md)
- [Latest Block](../public_endpoints/02_latest_block.md)
- [Latest State Root](../public_endpoints/03_latest_state_root.md)
- [Get Block](../public_endpoints/04_get_block.md)
- [Get Blocks](../public_endpoints/05_get_blocks.md)
- [Get Height](../public_endpoints/06_get_height.md)
- [Get Block Transactions](../public_endpoints/07_get_block_transactions.md)
- [Get Transaction](../public_endpoints/08_get_transaction.md)
- [Get Memory Pool Transactions](../public_endpoints/09_get_memory_pool_transactions.md)
- [Get Program](../public_endpoints/10_get_program.md)
- [Get Mapping Names](../public_endpoints/11_get_mapping_names.md)
- [Get Mapping Value](../public_endpoints/12_get_mapping_value.md)
- [Get State Path for Commitment](../public_endpoints/13_get_state_path_for_commitment.md)
- [Get Beacons](../public_endpoints/14_get_beacons.md)
- [Get Peers Count](../public_endpoints/15_get_peers_count.md)
- [Get Peers All](../public_endpoints/16_get_peers_all.md)
- [Get Peers All Metrics](../public_endpoints/17_get_peers_all_metrics.md)
- [Get Node Address](../public_endpoints/18_get_node_address.md)
- [Find Block Hash](../public_endpoints/19_find_block_hash.md)
- [Find Transaction ID from Program ID](../public_endpoints/20_find_transaction_id_from_program_id.md)
- [Find Transaction ID from Transition ID](../public_endpoints/21_find_transaction_id_from_transition_id.md)
- [Find Transition ID](../public_endpoints/22_find_transition_id.md)
- [Get Environment Information](../public_endpoints/23_get_env_info.md)
- [Transaction Broadcast](../public_endpoints/24_transaction_broadcast.md)


