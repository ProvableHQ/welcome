---
id: hello
title: Hello Leo
sidebar_label: Hello Leo
---

Use the Leo Command Line Interface (CLI) to create a new project.
In your terminal, run:
```bash
leo new hello
cd hello
```

This creates a directory with the following structure:

```bash
hello/
├── .env # Your program environment
├── program.json # Your program manifest
├── README.md # Your program description
├── build/
└── src/
  └── main.leo # Your program file
```

Let's run the project.

## Zero Knowledge in one line

The `leo run` command will compile and run the program.
In your terminal, run:
```bash
leo run main 1u32 2u32
```

```bash title="console output:"
Leo Compiled 'main.leo' into Aleo instructions

⛓  Constraints
 •  'hello.aleo/main' - 35 constraints (called 1 time)

➡️  Output
 • 3u32
  
Leo ✅ Finished 'hello.aleo/main' (in "/hello/build")
```

Congratulations! You've just run your first Leo program.

Let's go through the file syntax of the program we just executed.


**program.json** is the Leo manifest file that configures our package. More complex projects containing multiple programs will have a more detailed manifest file that outline the dependency structure. 
```json title="program.json"
{
    "program": "hello.aleo",
    "version": "0.0.0",
    "description": "",
    "license": "MIT"
}
```

The program ID in `program` is the official name that other developers will be able to look up after you have published your program.
```json
    "program": "hello.aleo",
```

All files in the current package will be compiled with the specified Leo `version`.

```json
    "version": "0.0.0",
```

## Syntax to circuits
Open up **src/main.leo**.
The **main.leo** file is the entry point of a Leo project. It often contains a function named `main`.
Let's break down the structure of a Leo file.
```leo title="src/main.leo" showLineNumbers
// The 'hello' program.
program hello.aleo {
    transition main(public a: u32, b: u32) -> u32 {
        let c: u32 = a + b;
        return c;
    }
}
```

`program hello.aleo {` defines the name of the [program](03_language.md#program-scope) inside the Leo file.
The program ID must match the `program.json` manifest file.
The keyword `transition` indicates a [transition](03_language.md#transition-function) function definition in Leo.
Our **hello** `main` function takes an input `a` with type `u32` and `public` visibility, and an input `b` with type `u32` and `private` visibility (by default).
The program returns one result with type `u32`.
The transition function body is enclosed in curly braces `{ }`. It is a common convention in Leo to place the opening curly
brace on the same line as the function definition, adding one space in between.
```leo
transition main(public a: u32, b: u32) -> u32 {
```

Inside the `main` function we declare a variable `c` with type `u32` and set it equal to the addition of variables `a` and `b`.
Leo's compiler will check that the types of `a` and `b` are equal and that the result of the addition is type `u32`.
```leo
let c: u32 = a + b;
```

:::info
We designed Leo with the belief that developers are human and can make mistakes.
Try changing the type of any variable and seeing what Leo recommends with helpful error messages.
:::

Last, we return the variable `c`.
Leo will check that `c`'s type matches the function return type `u32`.
```leo
return c;
```

## Running the program 
Leo's compiler will build a **circuit** out of the **main.leo** program. 

An input assignment shares syntax with an explicit variable assignment in normal `.leo` files.
In this Leo CLI command we assign the value `1` of type `u32` to the `public` input of function `main` named `a`.
We also assign the value `2` of type `u32` to the (private, by default) input of `main` named `b`.
Leo's compiler will fetch these values and provide them as inputs to the circuit at proving time.

This command builds and runs the program natively.
```bash
leo run main 1u32 1u32 
```

## Step by step

### 1. Clean
First, remove all build files with:
```bash
leo clean
```

```bash title="console output:"
  Leo cleaned the build directory (in "/build/")
```

### 2. Update
The `leo update` command updates the Leo compiler to the latest version.
```bash
leo update
```

```bash title="console output:"
  Leo ✅ Updated to version 1.9.0
```

### 2. Execute

The `leo execute` command executes the Leo program and outputs a transaction object
```bash
leo execute main 1u32 2u32
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

The `leo execute` command will attempt to verify a proof only if all previous steps completed successfully.
Under the hood, the Leo [CLI](05_commands.md) will check for existing `.prover`, `.verifier`, and `.avm` files
in the **build** directory before running each command. This ensures that we don't run unnecessary commands.

## Next Steps

To learn more about the Leo language and its syntax, start [here](03_language.md).

To learn more about how to use the Leo CLI, start [here](05_commands.md).
