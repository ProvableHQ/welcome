---
id: commands
title: Aleo Command Line Interface
sidebar_label: Commands
---

# List of Commands
:::tip
You can print the list of commands by running `aleo --help`
:::

1. [aleo account](#1-aleo-account)
2. [aleo new](#2-aleo-new)
3. [aleo build](#3-aleo-build)
4. [aleo run](#4-aleo-run)
5. [aleo node](#5-aleo-node)
6. [aleo deploy](#6-aleo-deploy)
7. [aleo clean](#7-aleo-clean)
8. [aleo update](#8-aleo-update)

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

To start a local development node and deploy the local program at genesis run:
```bash
aleo node start
```

To start a local development node without deploying the local program at genesis run:
```bash
aleo node start --nodeploy
```

## 6. `aleo deploy`

To deploy a program to Aleo Testnet3 run:
```bash
aleo deploy
```

## 7. `aleo clean`

To clean the Aleo package build directory run:
```bash
aleo clean
```

## 8. `aleo update`

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