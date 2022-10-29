---
id: installation
title: Installation
sidebar_label: Installation
---
## 1. Install the Prerequisites

### 1.1 Install Git:

**[bit.ly/start-git](https://bit.ly/start-git)**

### 1.2 Install Rust:

**[bit.ly/start-rust](https://bit.ly/start-rust)**

### 1.3 Check the Prerequisites

```bash
git --version
cargo --version
```

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

Dive into some code with [**Hello Aleo**](02_hello.md).

:::


