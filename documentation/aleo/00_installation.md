---
id: installation
title: Installation
sidebar_label: Installation
---

Welcome to the Aleo SDK guide. 
The Aleo SDK is a toolkit that supports account generation, program compilation, and program deployment.
Use the Aleo SDK to generate yourself a new Aleo account [here](https://aleohq.github.io/aleo/).

Aleo programs are files with a `.aleo` extension. 
Aleo programs contain Aleo instructions - an assembly-like programming language. 
Aleo instructions are compiled into AVM opcodes that can be executed by the Aleo Virtual Machine.

:::info
The Aleo SDK is currently in active development. Please monitor the repository on [**GitHub**](https://github.com/AleoHQ/aleo) for breaking changes
:::
## Installation
### 1. Install Rust

We recommend installing Rust using [rustup](https://www.rustup.rs/). You can install `rustup` as follows:

- macOS or Linux:
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

- Windows (64-bit):

  Download the [Windows 64-bit executable](https://win.rustup.rs/x86_64) and follow the on-screen instructions.

- Windows (32-bit):

  Download the [Windows 32-bit executable](https://win.rustup.rs/i686) and follow the on-screen instructions.

### 2. Build Source Code

You can install the Aleo SDK by building from the source code as follows:

```bash
# Download the source code
git clone https://github.com/AleoHQ/aleo
cd aleo

# Build in release mode
$ cargo build --release
```

This will generate an executable under the `./target/release` directory. To run Leo, run the following command:
```bash
./target/release/aleo
```

Now to use Aleo, in your terminal, run:
```bash
aleo
```

:::info

Dive into some code with [**Hello Aleo**](01_hello_aleo.md).

:::

---

## Testnet3 Development Endpoints

:::caution

Aleo Testnet III is **not** ready for production use and will undergo thorough audit and testing before reaching production.

:::

The server will start at the following endpoint:
```bash
aleo node start

🌐 Server is running at http://0.0.0.0:4180
```

### Latest Block Height
Returns the number of blocks in the canonical chain.

```bash
http://localhost:4180/testnet3/latest/block/height
```

### Latest Block Hash
Returns the block hash from the head of the canonical chain.

```bash
http://localhost:4180/testnet3/latest/block/hash
```

### Latest Block
Returns the block from the head of the canonical chain.

```bash
http://localhost:4180/testnet3/latest/block
```

### Get Block
Returns the block given the block height.

```bash
http://localhost:4180/testnet3/block/{height}
```

## Getting records belonging to an account
You can retrieve records in three different ways, depending on what type of records you want to query. You will need your ViewKey at your disposal. There are two types of records, spent and unspent, we will talk about these later on. You can see the list of the endpoints associated below:

### Get All Owned Records
`GET /testnet3/records/all`

This endpoint retrieves all the records belonging to a given ViewKey.

```bash
curl --location --request GET 'localhost:4180/testnet3/records/all' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"'
```

### Get All Spent Records
`GET /testnet3/records/spent`

This endpoint retrieves only the spent records belonging to a given ViewKey.

```bash
curl --location --request GET 'localhost:4180/testnet3/records/spent' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"'
```

### Get All Unspent Records
`GET /testnet3/records/unspent`

This endpoint retrieves only the unspent records belonging to a given ViewKey.

```bash
curl --location --request GET 'localhost:4180/testnet3/records/unspent' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"'
```