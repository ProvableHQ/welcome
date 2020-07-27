---
id: installation
title: Install snarkOS
sidebar_label: Installation
---

## Build Guide

### Install Rust

We recommend installing Rust using [rustup](https://www.rustup.rs/). You can install `rustup` as follows:

- macOS or Linux:
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

- Windows (64-bit):  
  
  Download the [Windows 64-bit executable](https://win.rustup.rs/x86_64) and follow the on-screen instructions.

- Windows (32-bit):  
  
  Download the [Windows 32-bit executable](https://win.rustup.rs/i686) and follow the on-screen instructions.
  
### Build from Source Code

```
# Download the source code
git clone https://github.com/AleoHQ/snarkOS
cd snarkOS

# Build in release mode
cargo build --release
```

This will generate an executable under the `./target/release` directory

## Usage Guide

### Connecting to the Aleo network

To connect and start syncing to the main network, simply run the client:
```
./target/release/snarkOS
```

Additionally, the client can be run in quiet mode with the `--quiet` flag: 
 ```
 ./target/release/snarkOS --quiet
 ```

To run a client with custom settings, refer to the full list of options and flags available in the CLI.

### Command Line Interface

Full list of CLI flags and options can be viewed with `./target/release/snarkOS --help`:

```
snarkOS 0.8.0
Start an Aleo node (include -h for more options)

USAGE:
    snarkos [FLAGS] [OPTIONS]

FLAGS:
    -h, --help           Prints help information
        --is-bootnode    Run the node as a bootnode (IP is hard coded in the protocol)
        --is-miner       Start mining blocks from this node
        --testnet        Run the node on the testnet
        --no-jsonrpc     Run the node without running the json rpc
    -q, --quiet          Do not show any logging in the console

OPTIONS:
        --connect <ip>                           Specify a node ip address to connect to on startup
    -i, --ip <ip>                                Specify the ip of your node
        --max-peers <max-peers>                  Specify the maximum number of peers the node can connect to
        --mempool-interval <mempool-interval>    Specify the frequency in seconds x 10 the node should fetch the mempool from sync node
        --min-peers <min-peers>                  Specify the minimum number of peers the node should connect to
        --miner-address <miner-address>          Specify the address that will receive miner rewards
    -d, --path <path>                            Specify the node's storage path
    -p, --port <port>                            Run the node on a specified port
        --rpc-password <rpc-password>            Specify a password for rpc authentication
        --rpc-port <rpc-port>                    Run the rpc server on a specified port
        --rpc-username <rpc-username>            Specify a username for rpc authentication
```


### Examples

#### Run a miner
```
./target/release/snarkOS --is-miner
```

#### Protect sensitive RPC endpoints with an authentication layer
```
./target/release/snarkOS --rpc-username <Username> --rpc-password <Password>
```

#### Manually connect to a peer on the network
```
./target/release/snarkOS --connect "<IP ADDRESS>"
```

### Interfacing with a running node

By default, snarkOS runs a JSON-RPC server to allow external interfacing with the Aleo network. Additional information can be found [here](../../autogen/testnet/rpc/rpc_server/00_configurations.md)
