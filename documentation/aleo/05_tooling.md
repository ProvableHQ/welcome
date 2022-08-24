---
id: tooling
title: Tooling for Aleo Instructions
sidebar_label: Tooling
---

Aleo maintains several syntax highlighting implementations across different platforms.  
If you do not see your favorite editor on this list, please reach out on [github](https://github.com/AleoHQ/welcome/issues/new).

1. [Sublime Text](#sublime).
2. [Visual Studio Code](#vscode).

## Sublime Text
![](./images/sublime.png)  
Download the editor here: https://www.sublimetext.com/download.

### Build from source

Follow these steps to install [Package Control](https://packagecontrol.io/installation) and [PackageDev](https://github.com/SublimeText/PackageDev).

1. Download the source code https://github.com/AleoHQ/aleo/tree/testnet3/sublime.
2. Install [Package Control](https://packagecontrol.io/installation).
3. Install [PackageDev](https://github.com/SublimeText/PackageDev).
4. Click the `Preferences` > `Browse Packages...` menu.
5. Copy the `Aleo/` folder into `Packages/`.

(On some OSes, you may need to restart `Sublime Text` for changes to take effect.)

### Usage

Follow these steps to toggle the `Leo` syntax highlighter.

1. Open `Sublime Text`.
2. Select `Sublime Text` > `Preferences` > `Select Color Scheme...` > `aleo`.
3. Select `View` > `Syntax` > `aleo`.

## VSCode
![](./images/vscode.png)
Download the editor here: https://code.visualstudio.com/download.

### Install from Marketplace

Install the [aleo language plugin](https://marketplace.visualstudio.com/items?itemName=aleohq.aleo-instructions-syntax) from VSCode marketplace.   
The correct extension ID is `aleohq.aleo-instructions-syntax`.