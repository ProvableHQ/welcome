---
id: commands
title: The Leo Command Line Interface
sidebar_label: Commands
---

The Leo CLI is a command line interface tool that comes equipped with the Leo compiler.

## Installation

[**Install Leo**](01_installation.md)

## Global Flags

* `-d`, `--debug` - Enables debugging mode
* `-h`, `--help` - Prints help information
* `-V`, `--version` - Prints version information

## List of Commands:

:::tip
You can print the list of commands by running `leo --help`
:::

* [`new`](#leo-new) - Create a new Leo package in a new directory.
* [`build`](#leo-build) - Compile the current package as a program.
* [`run`](#leo-run) - Run a program with input variables.
* [`clean`](#leo-clean) - Clean the output directory.
[//]: # (* [`deploy`]&#40;#leo-deploy&#41; - Deploy a program.)

[//]: # (* [`node`]&#40;#leo-node&#41; - Start a local development server.)


## `leo new`

To create a new package, run:
```bash
leo new {$NAME}
```

Valid package names are snake_case: lowercase letters and numbers separated by underscores.
This command will create a new directory with the given package name.
The new package will have a directory structure as follows:

```bash
package-name/
├── program.json # Your program manifest
├── README.md # Your program description
├── build/
├── inputs/
│ ├── hello.in # Your program inputs
└── src/
  └── main.leo # Your program file
```

## `leo build`

To compile your program and verify that it builds properly, run:
```bash
leo build
```

[//]: # (The results of compiling `main.leo` or `lib.leo` and it's imported dependencies will be printed:)

[//]: # (```bash title="console output:")

[//]: # ( Compiling Starting...)

[//]: # ( Compiling Compiling main program... &#40;"${NAME}/src/main.leo"&#41;)

[//]: # ( Compiling Complete)

[//]: # (      Done Finished in 10 milliseconds)

[//]: # (```)
This will populate the directory `build/` (creating it if it doesn't exist) with an Aleo instructions file `.aleo`.
```bash title="console output:"
     Leo ✅ Compiled 'main.leo' into Aleo instructions
     Leo ✅ Built 'hello.aleo' (in "/hello/build")
```

## `leo run`

To execute a Leo transition function using inputs from the program input `.in` file.
```bash
leo run {$TRANSITION}
```

To execute a Leo transition function with inputs from the command line.
`{$INPUTS}` should be a list of inputs to the program separated by spaces.
```bash
leo run {$TRANSITION} {$INPUTS}
```


```bash title="console output:"
 Leo ✅ Compiled 'main.leo' into Aleo instructions
⏳ Compiling 'hello.aleo'...

 • Loaded universal setup (in 100 ms)
 • Built 'main' (in 1000 ms)

     Leo ✅ Built 'hello.aleo' (in "/hello/build")
 • Loaded universal setup (in 100 ms)
 
🚀 Executing 'hello.aleo/main'...
⛓  Constraints
 • 'hello.aleo/main' - 35 constraints (called 1 time)

➡️  Output
 • 3u32
 
 Leo ✅ Executed 'hello.aleo/main' (in "/hello/build")
```

[//]: # ()
[//]: # (## `leo node`)

[//]: # ()
[//]: # (To start a local development node and deploy the compiled program run.)

[//]: # (```bash)

[//]: # (leo node start)

[//]: # (```)

[//]: # ()
[//]: # (To start a local development node without deploying the compiled program.)

[//]: # (```bash)

[//]: # (leo node start --nodeploy)

[//]: # (```)

## Testnet3 Development Endpoints

The server will start at the following endpoint:
```bash
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

[//]: # ()
[//]: # (## `leo deploy`)

[//]: # ()
[//]: # (To deploy a program to Aleo Testnet3 run.)

[//]: # (```bash)

[//]: # (leo deploy)

[//]: # (```)

## `leo clean`

To clean the build directory, run:
```bash
leo clean
```
```bash title="console output:"
  Leo cleaned the build directory (in "/build/")
```

[//]: # (### `leo update`)

[//]: # ()
[//]: # (To download and install the latest Leo version run:)

[//]: # (```bash)

[//]: # (leo update)

[//]: # (```)

[//]: # (```bash title="console output:")

[//]: # (Checking target-arch... x86_64-apple-darwin)

[//]: # (Checking current version... v1.5.3)

[//]: # (Checking latest released version... v1.5.3)

[//]: # (  Updating Leo is already on the latest version 1.5.3)

[//]: # (```)
