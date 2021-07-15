---
id: overview
title: Testnet I.
sidebar_label: Overview
---

:::note
Aleo Testnet I is **not** ready for production use and will undergo thorough audit and testing before reaching production.
Aleo Testnet I is a trusted testnet - subsequent testnets will undergo a trusted setup process.
:::

**Aleo Testnet I** is an experimental network for developers to begin building and testing applications on Aleo.
Testnet I is used by the core team for designing and evaluating new circuits, planning and staging network upgrades,
and running experimental features for inclusion on mainnet.

## The Network

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


## snarkOS

`snarkOS` is a decentralized operating system for anonymous web applications. It forms the backbone of Aleo and 
enables developers to checkpoint and finalize application state in a publicly-verifiable manner.

### Source Code

`snarkOS` is open-source and publicly-hosted on [GitHub](https://github.com/AleoHQ/snarkOS).

### Run a Full Node

To run a full node and support Aleo, start by following the instructions to [install snarkOS](01_installation.md).

### Run a Miner Node

At first, follow the instructions to [Run a Full Node](#run-a-full-node).
When you have `snarkOS` binary ready, open tmux or screen and run the following commands in the first tab:

```
USERNAME=$(shuf -n1  /usr/share/dict/words)
PASSWORD=$(shuf -n1  /usr/share/dict/words)
echo "Username: $USERNAME"
echo "Password: $PASSWORD"
```

remember values you got for username and password. They are required to protect your full node.

Start `snarkOS` in a full node mode.

```
snarkos --rpc-username "$USERNAME" --rpc-password "$PASSWORD"
```

Open the second tab (Ctrl+B C in `tmux`, Ctrl+A C in `screen`), then connect to your node to generate the private key and address:

```
USERNAME=<Paste USERNAME from the previous step>
PASSWORD=<Paste PASSWORD from the previous step>
curl --user "$USERNAME:$PASSWORD" --data-binary '{"jsonrpc": "2.0", "id":"documentation", "method": "createaccount",
"params": [] }' -H 'content-type: application/json' http://127.0.0.1:3030/
```

Save the returned JSON-value in a safe place. Return to the previous tab (Ctrl+B P in `tmux`, Ctrl+A P in `screen`) to shut down your full node (Ctrl + C).

Now, start the node with the different set of arguments (in the [future](https://github.com/AleoHQ/snarkOS/blob/master/snarkos/config.rs#L152) you will be able to store your settings it in a config file):

```
/usr/bin/snarkos --is-miner \
    --miner-address '<PASTE ADDRESS YOU GOT FROM RPC CALL>' \
    --connect 46.101.144.133:4131,167.71.79.152:4131,46.101.147.96:4131,167.99.53.204:4131,128.199.15.82:4131,159.89.152.247:4131,128.199.7.1:4131,167.99.69.230:4131,178.128.18.3:4131,206.189.80.245:4131 \
    --rpc-ip=127.0.0.1 --rpc-username=<SOME USERNAME> --rpc-password=<SOME PASSWORD>
```
