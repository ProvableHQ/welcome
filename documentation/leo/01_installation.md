---
id: installation
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Downloads

Download the latest Leo release using a pre-built installer for your platform, and start developing today.

<Tabs
    defaultValue="mac"
    values={[
        {label: 'MacOS', value: 'mac'},
        {label: 'Windows', value: 'windows'},
        {label: 'Ubuntu', value: 'ubuntu'},
    ]}>
    <TabItem value="mac">
        <a href="https://github.com/AleoHQ/leo/releases/download/v1.8.1/leo-v1.8.1-aarch64-apple-darwin.zip">
            <b>Install Leo for MacOS M1</b>
        </a>
    </TabItem>
    <TabItem value="mac">
        <a href="https://github.com/AleoHQ/leo/releases/download/v1.8.1/leo-v1.8.1-x86_64-apple-darwin.zip">
            <b>Install Leo for MacOS Intel</b>
        </a>
    </TabItem>
    <TabItem value="windows">
        <a href="https://github.com/AleoHQ/leo/releases/download/v1.8.1/leo-v1.8.1-x86_64-pc-windows-msvc.zip">
            <b>Install Leo for Windows</b>
        </a>
    </TabItem>
    <TabItem value="ubuntu">
        <a href="https://github.com/AleoHQ/leo/releases/download/v1.8.1/leo-v1.8.1-x86_64-unknown-linux-gnu.zip">
            <b>Install Leo for Ubuntu</b>
        </a>
    </TabItem>
</Tabs>

#### Browse all Leo releases [**here**](https://github.com/AleoHQ/leo/releases).

-----

# Install From Source

To use the latest Leo features, install the Leo source code from GitHub.

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

## 2. Build Leo from Source Code

You can build and install Leo from the source code as follows:

```bash
# Download the source code
git clone https://github.com/AleoHQ/leo
cd leo

# Build and install
cargo install --path .
```
That will generate the executable `~/.cargo/bin/leo`.

Now to use Leo, in your terminal, run:
```bash
leo
```

-----

## 3. IDE Syntax Highlighting

Aleo maintains syntax highlighting implementations across different platforms.   
If you do not see your favorite editor on this list, please reach out on [GitHub](https://github.com/AleoHQ/welcome/issues/new).

1. [Visual Studio Code](06_tooling.md#vs-code)
2. [Sublime Text](06_tooling.md#sublime-text)
3. [Intellij](06_tooling.md#intellij)