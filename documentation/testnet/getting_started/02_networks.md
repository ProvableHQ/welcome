---
id: networks
title: Aleo networks
sidebar_label: Networks
---

Aleo networks are delineated by a network identifier. Each network has a unique network ID that enforces  
transactions are only valid in the context of their respective networks. 

Each testnet is an alternative ledger meant only for testing and designing protocols to be included 
in the Aleo mainnet. The Aleo credits on each testnet is not meant to hold any value, which allows 
developers to safely test circuits and experimental features.


### Network IDs

Currently, Aleo has reserved the use of network id 0 for **Aleo Mainnet** and 1 for the **Aleo Testnet I**:

| Network ID |      Name      |
|:----------:|:--------------:|
|      0     |  Aleo Mainnet  |
|      1     | Aleo Testnet I |


### Ports

By default a snarkOS node is exposed at port `4130` + their network ID. For example, mainnet nodes are exposed at 
port `4130`, testnet 1 nodes are exposed at port `4131`, and so forth. The uniqueness of ports is an additional safeguard 
for node operators to connect to nodes on their particular network and run multiple networks on the same IP.