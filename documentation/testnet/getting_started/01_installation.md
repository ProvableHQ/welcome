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
  
### Build from Crates.io

We recommend installing snarkOS this way. In your terminal, run:

```bash
cargo install snarkos
```

Now to use snarkOS, in your terminal, run:
```bash
snarkos
```

### Build from Source Code

```bash
# Download the source code
git clone https://github.com/AleoHQ/snarkOS
cd snarkOS

# Build in release mode
$ cargo build --release
```

This will generate an executable under the `./target/release` directory. To run snarkOS, run the following command:
```bash
./target/release/snarkos
```

### Build with Docker

#### Docker build
```bash
docker build -t snarkos:latest .
``` 
or 
```bash
docker-compose build
```

#### Docker run
``` bash
docker run -d -p 4131:4131 --name snarkos snarkos 
```
or
```bash
docker-compose up
```

## Usage Guide

To start a client node, run:
```
snarkos
```

To start a mining node, run:
```
snarkos --is-miner
```

To run a node with custom settings, refer to the full list of options and flags available 
in the CLI or simply modify the snarkOS configuration file.

### Command Line Interface

Full list of CLI flags and options can be viewed with `snarkos --help`:

```
snarkOS 1.0.0
Run an Aleo node (include -h for more options)

USAGE:
    snarkos [FLAGS] [OPTIONS]

FLAGS:
    -h, --help           Prints help information
        --is-bootnode    Run the node as a bootnode (IP is hard coded in the protocol)
        --is-miner       Start mining blocks from this node
        --no-jsonrpc     Run the node without running the json rpc server
    -q, --quiet          Do not show any logging in the console

OPTIONS:
        --connect <ip>                           Specify a node ip address to connect to on startup
    -i, --ip <ip>                                Specify the ip of your node
        --max-peers <max-peers>                  Specify the maximum number of peers the node can connect to
        --mempool-interval <mempool-interval>    Specify the frequency in seconds the node should fetch a sync node's mempool
        --min-peers <min-peers>                  Specify the minimum number of peers the node should connect to
        --miner-address <miner-address>          Specify the address that will receive miner rewards
        --network <network-id>                   Specify the network id (default = 1) of the node
    -d, --path <path>                            Specify the node's storage path
    -p, --port <port>                            Specify the port the node is run on
        --rpc-password <rpc-password>            Specify a password for rpc authentication
        --rpc-port <rpc-port>                    Specify the port the json rpc server is run on
        --rpc-username <rpc-username>            Specify a username for rpc authentication
```

#### Examples

##### Guard RPC endpoints
```
snarkos --rpc-username <Username> --rpc-password <Password>
```

##### Manually connect to a peer on the network
```
snarkos --connect "<IP ADDRESS>"
```

### 3.3 Configuration File

A `snarkOS.toml` file is generated in the `~/.snarkOS/` directory when the node is initialized for the time. 
Updating this `snarkOS.toml` file allows node operators to specify default settings for the node without 
having to specify additional information in the CLI.

### Interfacing with a running node

By default, snarkOS runs a JSON-RPC server to allow external interfacing with the Aleo network. Documentation of the RPC endpoints can be found [here](../../autogen/testnet/rpc/concepts/00_rpc_server.md)
