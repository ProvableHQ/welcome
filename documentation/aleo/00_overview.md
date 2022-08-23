---
id: overview
title: Aleo SDK
sidebar_label: Aleo SDK
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

# List of Commands
:::tip
You can print the list of commands by running `aleo --help`
:::

## 1. `aleo account`

To create a new account, run:
```bash
aleo account new
```

To create a new account from seeded randomness, run:
```bash
aleo account new -s {$SEED}
```

The Aleo private key, view key and address will be printed to console.
See [`concepts/accounts`](../concepts/00_accounts.md) for more information.

## 2. `aleo new`

To create a new package, run:
```bash
aleo new {$NAME}
```

Valid package names are snake-case: lowercase letters and numbers separated by underscore.
This command will create a new directory with the given package name.
The new package will have a directory structure as follows:

```bash
package-name/
├── program.json # Your program manifest
├── README.md # Your program description
└── main.leo # Your program file
```

## 3. `aleo build`

To compile your program and verify that it builds properly, run:
```bash
aleo build
```

To compile your program in offline mode run:
```bash
aleo build --offline
```

To compile your program to a specified endpoint run:
```bash
aleo build --endpoint {$ENDPOINT}
```

## 4. `aleo run`

To execute your Aleo program function run:
```bash
aleo run {$FUNCTION} {$INPUTS}

// Example
aleo run hello 2u32 3u32
```

To execute your Aleo program function in offline mode run:
```bash
aleo run {$FUNCTION} {$INPUTS} --offline
```

To execute your Aleo program function to a specified endpoint run:
```bash
aleo run {$FUNCTION} {$INPUTS} --endpoint {$ENDPOINT}
```

## 5. `aleo node`

To start a local development node run:
```bash
aleo node start
```

To start a local development node without deploying the local program at genesis run:
```bash
aleo node start --nodeploy
```

## 6. `aleo clean`

To clean the Aleo package build directory run:
```bash
aleo clean
```

## 7. `aleo update`

To update the Aleo SDK to the latest version run:
```
aleo update
```

To list the available versions of Aleo run:
```
aleo update --list
```

To update the Aleo SDK and suppress outputs to terminal run:
```
aleo update --quiet
```