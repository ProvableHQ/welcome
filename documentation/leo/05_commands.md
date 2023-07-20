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
* [`execute`](#leo-execute) - Execute a program with input variables.
* [`clean`](#leo-clean) - Clean the output directory.
* [`update`](#leo-update) - Update to the latest version of Leo.

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
package/
├── .env # Your program environment
├── program.json # Your program manifest
├── README.md # Your program description
├── build/
├── inputs/
│ ├── hello.in # Your program inputs
└── src/
  └── main.leo # Your program file
```

## `leo build`
:::info
This command is deprecated as of Leo `v1.9.0`. It will be removed in a future release.
:::
To compile your program into Aleo Instructions and verify that it builds properly, run:
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
```

## `leo run`
:::tip
This command does not synthesize the program circuit or generate proving and verifying keys.  
Use this command to run your program before executing it.
:::
To run a Leo transition function using inputs from the program input `.in` file.
```bash
leo run {$TRANSITION}
```

To run a Leo transition function with inputs from the command line.
`{$INPUTS}` should be a list of inputs to the program separated by spaces.
```bash
leo run {$TRANSITION} {$INPUTS}
```


```bash title="console output:"
 Leo ✅ Compiled 'main.leo' into Aleo instructions

⛓  Constraints
 • 'hello.aleo/main' - 35 constraints (called 1 time)

➡️  Output
 • 3u32
 
 Leo ✅ Finished 'hello.aleo/main' (in "/hello/build")
```

## `leo execute`
:::tip
This command synthesizes the program circuit and generates proving and verifying keys.  
Use this command to execute your program and generate a transaction object.
:::

To execute a Leo transition function using inputs from the program input `.in` file.
```bash
leo execute {$TRANSITION}
```

To execute a Leo transition function with inputs from the command line.
`{$INPUTS}` should be a list of inputs to the program separated by spaces.
```bash
leo execute {$TRANSITION} {$INPUTS}
```


```bash title="console output:"
 Leo ✅ Compiled 'main.leo' into Aleo instructions

⛓  Constraints
 • 'hello.aleo/main' - 35 constraints (called 1 time)

➡️  Output
 • 3u32
 
 {"type":"execute","id":"at1 ... (transaction object truncated for brevity)
 
 Leo ✅ Executed 'hello.aleo/main' (in "/hello/build")
```
## `leo clean`

To clean the build directory, run:
```bash
leo clean
```
```bash title="console output:"
  Leo cleaned the build directory (in "/build/")
```

### `leo update`

To download and install the latest Leo version run:

```bash

leo update

```

```bash title="console output:"

Checking target-arch... x86_64-apple-darwin

Checking current version... v1.8.3

Checking latest released version... v1.8.3

  Updating Leo is already on the latest version 1.9.0

```
