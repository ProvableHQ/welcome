---
id: installation
title: Installation
---

## 1. Install the Latest Release
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="mac"
    values={[
        {label: 'macOS', value: 'mac'},
        {label: 'Ubuntu', value: 'ubuntu'},
    ]
}>

<TabItem value="mac">

[**Install for Mac**](https://github.com/AleoHQ/leo/releases/download/v1.0.3/leo-v1.0.3-x86_64-apple-darwin.zip)

</TabItem>

<TabItem value="ubuntu">

[**Install for Ubuntu**](https://github.com/AleoHQ/leo/releases/download/v1.0.3/leo-v1.0.3-x86_64-unknown-linux-gnu.zip)

</TabItem>

</Tabs>

Browse all Leo releases [**here**](https://github.com/AleoHQ/leo/releases).

## 2.1 Install with Rust

We recommend installing Rust using [rustup](https://www.rustup.rs/). You can install `rustup` as follows:

- macOS or Linux:
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

- Windows (64-bit):  
  
  Download the [Windows 64-bit executable](https://win.rustup.rs/x86_64) and follow the on-screen instructions.

- Windows (32-bit):  
  
  Download the [Windows 32-bit executable](https://win.rustup.rs/i686) and follow the on-screen instructions.

## 2.2a Build from Crates.io

We recommend installing Leo this way. In your terminal, run:

```bash
cargo install leo-lang
```

Now to use Leo, in your terminal, run:
```bash
leo
```
 
## 3. Build from Source Code

Alternatively, you can install Leo by building from the source code as follows:

```bash
# Download the source code
git clone https://github.com/AleoHQ/leo
cd leo

# Build in release mode
$ cargo build --release
```

This will generate an executable under the `./target/release` directory. To run Leo, run the following command:
```bash
./target/release/leo
```

