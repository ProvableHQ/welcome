---
id: installation
title: Installation
---

[//]: # (## 1. Install the Latest Release)

[//]: # (import Tabs from '@theme/Tabs';)

[//]: # (import TabItem from '@theme/TabItem';)

[//]: # ()
[//]: # (<Tabs)

[//]: # (    defaultValue="mac")

[//]: # (    values={[)

[//]: # (        {label: 'macOS', value: 'mac'},)

[//]: # (        {label: 'Ubuntu', value: 'ubuntu'},)

[//]: # (    ])

[//]: # (}>)

[//]: # ()
[//]: # (<TabItem value="mac">)

[//]: # ()
[//]: # ([**Install for Mac**]&#40;https://github.com/AleoHQ/leo/releases/download/v1.0.3/leo-v1.0.3-x86_64-apple-darwin.zip&#41;)

[//]: # ()
[//]: # (</TabItem>)

[//]: # ()
[//]: # (<TabItem value="ubuntu">)

[//]: # ()
[//]: # ([**Install for Ubuntu**]&#40;https://github.com/AleoHQ/leo/releases/download/v1.0.3/leo-v1.0.3-x86_64-unknown-linux-gnu.zip&#41;)

[//]: # ()
[//]: # (</TabItem>)

[//]: # ()
[//]: # (</Tabs>)

[//]: # ()
[//]: # (Browse all Leo releases [**here**]&#40;https://github.com/AleoHQ/leo/releases&#41;.)

## 0. Preliminaries (Linux only)

For a Debian-based distro such as Ubuntu or Mint, you will probably need the following:
  ```bash
  sudo apt install git
  sudo apt install build-essential
  sudo apt install libssl-dev
  ```

## 1. Install Rust

We recommend installing Rust using [rustup](https://www.rustup.rs/). You can install `rustup` as follows:

- macOS or Linux:
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```
  When this finishes, it will suggest that you restart the shell or 
  evaluate a form to add the `.cargo/bin` directory to your search path.
  You will need to do one or the other prior to step 2.

- Windows (64-bit):  
  
  Download the [Windows 64-bit executable](https://win.rustup.rs/x86_64) and follow the on-screen instructions.

- Windows (32-bit):  
  
  Download the [Windows 32-bit executable](https://win.rustup.rs/i686) and follow the on-screen instructions.

[//]: # (## 2.2a Build from Crates.io)

[//]: # ()
[//]: # (We recommend installing Leo this way. In your terminal, run:)

[//]: # ()
[//]: # (```bash)

[//]: # (cargo install leo-lang)

[//]: # (```)
 
## 2. Build Leo from Source Code

You can build and install Leo from the source code as follows:

```bash
# Download the source code
git clone https://github.com/AleoHQ/leo
cd leo

# Build and install
cargo install --path .
```
That will generate the executable `.cargo/bin/leo`.

Now to use Leo, in your terminal, run:
```bash
leo
```
