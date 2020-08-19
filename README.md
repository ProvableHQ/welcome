<p align="center">
    <img width="1412" src="./.resources/banner.png">
    <img alt="Website" src="https://img.shields.io/website?down_message=offline&label=aleo.org&up_message=online&url=https%3A%2F%2Faleo.org">
    <a href="https://discord.gg/SMXsDEQ"><img src="https://img.shields.io/discord/700454073459015690?logo=discord"/></a>
    <a href="https://twitter.com/AleoHQ"><img src="https://img.shields.io/twitter/follow/AleoHQ?style=social"/></a>
</p>

## Welcome to Aleo.

This repository serves a guide for getting started with building on Aleo. Here is a quick summary of the key highlights for Developer Preview I:

- [Aleo Studio](https://aleo.studio) - The world's first IDE for zero-knowledge proofs
- [Aleo Package Manager](https://aleo.pm) - Official package manager of the Leo programming language
- [Aleo Explorer](https://aleo.network) - Validate and broadcast on Aleo Testnet I
- [Aleo Developer Portal](https://developer.aleo.org) - The documentation portal for Developer Preview I

As this is the first in our series of developer previews, we anticipate there to be bugs. For help with getting set up, please join the Discord channel to ask questions and help others get their question answered.

We will be updating this page with FAQs to make it easy for finding common issues and to fix them quickly.

## Aleo Testnet I

### The Network

To connect to the network, the following is a list of Aleo Testnet I bootnodes.

#### Americas

| Status  | Region        | URL                       | Network Port | RPC Port |
|:-------:|:-------------:|---------------------------|:------------:|:--------:|
| Live    | Americas      | us1.testnet1.aleo.network |     4131     |   3030   |
| Live    | Americas      | us2.testnet1.aleo.network |     4131     |   3030   |
| Live    | Americas      | us3.testnet1.aleo.network |     4131     |   3030   |
| Live    | Americas      | us4.testnet1.aleo.network |     4131     |   3030   |
| Live    | Americas      | us5.testnet1.aleo.network |     4131     |   3030   |

#### Europe

| Status  | Region | URL                       | Network Port | RPC Port |
|:-------:|:------:|---------------------------|:------------:|:--------:|
| Pending | Europe | eu1.testnet1.aleo.network |     4131     |   3030   |
| Pending | Europe | eu2.testnet1.aleo.network |     4131     |   3030   |
| Pending | Europe | eu3.testnet1.aleo.network |     4131     |   3030   |
| Pending | Europe | eu4.testnet1.aleo.network |     4131     |   3030   |
| Pending | Europe | eu5.testnet1.aleo.network |     4131     |   3030   |

#### Asia

| Status  | Region | URL                       | Network Port | RPC Port |
|:-------:|:------:|---------------------------|:------------:|:--------:|
| Pending | Asia   | as1.testnet1.aleo.network |     4131     |   3030   |
| Pending | Asia   | as2.testnet1.aleo.network |     4131     |   3030   |
| Pending | Asia   | as3.testnet1.aleo.network |     4131     |   3030   |
| Pending | Asia   | as4.testnet1.aleo.network |     4131     |   3030   |
| Pending | Asia   | as5.testnet1.aleo.network |     4131     |   3030   |


## Aleo Studio

### Known issues

- Some early testers on **macOS** and **Linux** have reported permission issues when installing Aleo Studio. To resolve this issue, run the following:
```
# macOS
chmod -R 777 /Applications/Aleo\ Studio.app

# Linux for deb
sudo chmod -R 777 /opt/Aleo\ Studio/
```
