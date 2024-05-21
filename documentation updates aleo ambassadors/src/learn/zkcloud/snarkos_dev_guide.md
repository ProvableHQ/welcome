# SnarkOS Developer Guide

### <a name='TableofContents'></a>Table of Contents

* [1. Quick Start](#1-quick-start)
  * [1.1 Operations](#11-operations)
* [2. Developer Commands](#2-developer-commands)
  * [2.1 Decrypt Record](#21-decrypt-record)
  * [2.2 Deploy Program](#22-deploy-program)
  * [2.3 Execute Transaction](#23-execute-transaction)
  * [2.4 Scan Records](#24-scan-records)
* [3. Local Devnet](#3-local-devnet)
  * [3.1 Install `tmux`](#31-install-tmux)
  * [3.2 Start a Local Devnet](#32-start-a-local-devnet)
  * [3.3 View a Local Devnet](#33-view-a-local-devnet)
  * [3.4 Stop a Local Devnet](#34-stop-a-local-devnet)


### 1. Quick Start

#### Why do we need 4 validators at a minimum ?
> 4 validators are required to satisfy the requirements to run AleoBFT consensus correctly.
The required condition is that AleoBFT requires `2f+1` honest nodes to produce blocks where `f=Byzantine node`, this is to ensure `> 66%` are honest nodes.

In the first terminal, start the first validator by running:
```bash
cargo run --release -- start --nodisplay --dev 0 --validator
```
In the second terminal, start the second validator by running:
```bash
cargo run --release -- start --nodisplay --dev 1 --validator
```
In the third terminal, start the third validator by running:
```bash
cargo run --release -- start --nodisplay --dev 2 --validator
```
In the fourth terminal, start the fourth validator by running:
```bash
cargo run --release -- start --nodisplay --dev 3 --validator
```

From here, this procedure can be used to further start-up provers and clients.

### 1.1 Operations

It is important to initialize the nodes starting from `0` and incrementing by `1` for each new node.

The following is a list of options to initialize a node (replace `<NODE_ID>` with a number starting from `0`):
```bash
cargo run --release -- start --nodisplay --dev <NODE_ID> --validator
cargo run --release -- start --nodisplay --dev <NODE_ID> --prover
cargo run --release -- start --nodisplay --dev <NODE_ID> --client
cargo run --release -- start --nodisplay --dev <NODE_ID>
```

When no node type is specified, the node will default to `--client`.

### 2. Developer Commands

The following are the commands for the `snarkos developer` command:
```bash
USAGE:
    snarkos developer [COMMANAD]

COMMANDS:
    decrypt           #Decrypt a ciphertext
    deploy            #Deploy a program
    execute           #Execute a program function
    scan              #Scan the node for records
    transfer-private  #Execute the `credits.aleo/transfer_private` function
    help              #Print this message or the help of the given subcommand(s)
```


#### 2.1 Decrypt Record

```bash
snarkos decrypt --ciphertext <CIPHERTEXT> --view-key <VIEW_KEY>
```
#### 2.2 Deploy Program
```bash
snarkos developer deploy [OPTIONS] --private-key <PRIVATE_KEY> --query <QUERY> --priority-fee <PRIORITY_FEE> <PROGRAM_ID>
```
**[Deploy Options]**
```bash
 --path <PATH>                  #A path to a directory containing a manifest file. Defaults to the current working directory
  -p, --private-key <PRIVATE_KEY>    #The private key used to generate the deployment
  -q, --query <QUERY>                #The endpoint to query node state from
      --priority-fee <PRIORITY_FEE>  #The priority fee in microcredits
  -r, --record <RECORD>              #The record to spend the fee from
  -b, --broadcast <BROADCAST>        #The endpoint used to broadcast the generated transaction
  -d, --dry-run                      #Performs a dry-run of transaction generation
      --store <STORE>                #Store generated deployment transaction to a local file
      --storage_path <STORAGE_PATH>  #Specify the path to a directory containing the ledger
  -h, --help                         #Print help

```

#### 2.3 Execute Transaction
```bash
snarkos developer execute [OPTIONS] --private-key <PRIVATE_KEY> --query <QUERY> <PROGRAM_ID> <FUNCTION> [INPUTS]...
```
**[Execute Options]**
```bash
 -p, --private-key <PRIVATE_KEY>     #The private key used to generate the execution
  -q, --query <QUERY>                #The endpoint to query node state from
      --priority-fee <PRIORITY_FEE>  #The priority fee in microcredits
  -r, --record <RECORD>              #The record to spend the fee from
  -b, --broadcast <BROADCAST>        #The endpoint used to broadcast the generated transaction
  -d, --dry-run                      #Performs a dry-run of transaction generation
      --store <STORE>                #Store generated deployment transaction to a local file
      --storage_path <STORAGE_PATH>  #Specify the path to a directory containing the ledger
  -h, --help                         #Print help
```

#### 2.4 Scan Records
```bash
snarkos developer scan [OPTIONS] --endpoint <ENDPOINT>
```
**[Execute Options]**
```bash
-p, --private-key <PRIVATE_KEY>    #An optional private key scan for unspent records
  -v, --view-key <VIEW_KEY>        #The view key used to scan for records
      --start <START>              #The block height to start scanning from
      --end <END>                  #The block height to stop scanning
      --last <LAST>                #Scan the latest `n` blocks
      --endpoint <ENDPOINT>        #The endpoint to scan blocks from
  -h, --help                       #Print help
```


### 3. Local Devnet

#### 3.1 Install `tmux`

To run a local devnet with the script, start by installing `tmux`.

<details><summary>macOS</summary>

To install `tmux` on macOS, you can use the `Homebrew` package manager.
If you haven't installed `Homebrew` yet, you can find instructions at [their website](https://brew.sh/).
```bash
# Once Homebrew is installed, run:
brew install tmux
```

</details>

<details><summary>Ubuntu</summary>

On Ubuntu and other Debian-based systems, you can use the `apt` package manager:
```bash
sudo apt update
sudo apt install tmux
```

</details>

<details><summary>Windows</summary>

There are a couple of ways to use `tmux` on Windows:

### Using Windows Subsystem for Linux (WSL)

1. First, install [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install).
2. Once WSL is set up and you have a Linux distribution installed (e.g., Ubuntu), open your WSL terminal and install `tmux` as you would on a native Linux system:
```bash
sudo apt update
sudo apt install tmux
```

</details>

#### 3.2 Start a Local Devnet

To start a local devnet, run:
```bash
./devnet.sh
```
Follow the instructions in the terminal to start the devnet.

#### 3.3 View a Local Devnet

#### Switch Nodes (forward)

To toggle to the next node in a local devnet, run:
```bash
Ctrl+b n
```

#### Switch Nodes (backwards)

To toggle to the previous node in a local devnet, run:
```bash
Ctrl+b p
```

#### Scroll Node

To scroll easily run:
```bash
Ctrl+b [
```

#### Select a Node (choose-tree)

To select a node in a local devnet, run:
```bash
Ctrl+b w
```

To quit scroll press `q`

#### Select a Node (manually)

To select a node manually in a local devnet, run:
```bash
Ctrl+b :select-window -t {NODE_ID}
```

#### 3.4 Stop a Local Devnet

To stop a local devnet, run:
```bash
Ctrl+b :kill-session
```
Then, press `Enter`.
