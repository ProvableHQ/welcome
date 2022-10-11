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

## 3. IDE Syntax Highlighting
Aleo maintains syntax highlighting implementations across different platforms.   
If you do not see your favorite editor on this list, please reach out on [github](https://github.com/AleoHQ/welcome/issues/new).

1. [Sublime Text](../additional_material/00_tooling.md#sublime-text)
2. [Visual Studio Code](../additional_material/00_tooling.md#vs-code)
3. [Intellij](../additional_material/00_tooling.md#intellij)