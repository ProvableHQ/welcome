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
├── program.json # Your program manifest
├── README.md # Your program description
├── inputs/ 
│ ├── hello.in # Your program inputs
└── src/    
  └── main.leo # Your program file
```

Let's run the project.

## Zero Knowledge in one line

The `leo run` command will compile and execute the program.
In your terminal, run:
```bash
leo run main
```

```bash title="console output:"
 Leo Compiled 'main.leo' into Aleo instructions
⏳ Compiling 'hello.aleo'...

 • Loaded universal setup (in 100 ms)
 • Built 'main' (in 1000 ms)

     Build ✅ Built 'hello.aleo' (in "/hello/build")
 • Loaded universal setup (in 100 ms)
🚀 Executing 'hello.aleo/main'...

 • Executing 'hello.aleo/main'...
 • Executed 'main' (in 1000 ms)

➡️  Output

 • 3u32

 Executing ✅ Executed 'hello.aleo/main' (in "/hello/build")
```

Congratulations! You've just run your first Leo program.

Let's go through the file syntax of the program we just executed.


**program.json** is the Leo manifest file that configures our package.
```json title="program.json" 
{
    "program": "hello.aleo",
    "version": "0.0.0",
    "description": "",
    "development": {
        "private_key": "APrivateKey1zkp2VZTNU45XjpcRDbe5yg3b5L7XVvB4zrFPtw1NAYvmhJx",
        "address": "aleo15egrwaxaherd70ca0aln3th7ry7dmtfeggf8jm3saxeddpa6dsqsye9u3m"
    },
    "license": "MIT"
}
```

The program id `program` is the official name that other developers will be able to look up after you have published your program.
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
// The 'hello' main function.
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
Our **hello** `main` function takes an input `a` with type `u32` and `public` visibility and an input `b` with type `u32` and `private` visibility by default.
The program returns one result with type `u32`.
The transition function body is enclosed in curly braces `{ }`. It is a common convention in Leo to place the opening curly
bracket on the same line as the function definition, adding one space in between.
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

## Wiring program inputs
Leo's compiler will build a **circuit** out of the **main.leo** program. Open up **inputs/hello.in**.
Files ending in **.in** provide inputs to the program. You can also specify program arguments via the [command line](04_commands.md#leo-run).
```leo title="inputs/hello.in"
// The program input for hello/src/main.leo
[main]
public a: u32 = 1u32;
b: u32 = 2u32;
```

An input file begins with a section enclosed in brackets `[ ]`.
`main` indicates that we are defining the inputs to the program function `main`.
You can only define inputs to [transition functions](03_language.md#transition-function).

```leo
[main]
```

An input assignment shares syntax with an explicit variable assignment in normal `.leo` files.
Here we assign the `public` input named `a` with type `u32` to the value `1`. Leo's compiler will fetch these values and provide them as inputs to the circuit at proving time.

```leo
public a: u32 = 1u32;
b: u32 = 2u32;
```

Now lets use the Leo CLI and see what commands we can run on our program.


Previously we executed the program with `leo run`.
This command runs several other Leo CLI commands before verifying a proof.
```bash
leo run
```

## Step by step

Let's walk through each command called by `leo run` and get a better understanding of what's happening under the hood.
First, remove all build files with:
```bash
leo clean
```

```bash title="console output:"
  Leo cleaned the build directory (in "/build/")
```

### 1. Build

The `leo build` command compiles the program file `main.leo`. Leo will check program syntax and produce the `main.aleo` file.
```bash
leo build
```
The **build** directory will store all files generated by the Leo CLI.

```bash title="console output:"
     Leo ✅ Compiled 'main.leo' into Aleo instructions (in "/hello/build/main.aleo")
     Leo ✅ Built 'hello.aleo' (in "/hello/build")
```


### 2. Run

The `leo run` command executes the `/build/main.aleo` Aleo program using the Aleo SDK.
For more information read the Aleo SDK [documentation](../00_aleo_overview.md).
```bash
leo run
```

```bash title="console output:"
 Leo ✅ Compiled 'main.leo' into Aleo instructions (in "/hello/build/main.aleo")
⏳ Compiling 'hello.aleo'...

 • Loaded universal setup (in 100 ms)
 • Built 'main' (in 1000 ms)

 Leo ✅ Built 'hello.aleo' (in "/hello/build")
 • Loaded universal setup (in 100 ms)
🚀 Executing 'hello.aleo/main'...

 • Executing 'hello.aleo/main'...
 • Executed 'main' (in 1000 ms)

➡️  Output

 • 3u32

 Leo ✅ Executed 'hello.aleo/main' (in "/hello/build")
```

The `leo run` command will attempt to verify a proof only if all previous steps completed successfully.
Under the hood, the Leo [CLI](04_commands.md) will check for existing `.sum`, `.lpk`, `.lvk`, or `.proof` files
in the **outputs** directory before running each command. This ensures that we don't run unnecessary commands.

[//]: # ()
[//]: # (## The Leo Language)

[//]: # (To learn more about how to use the Leo Language, start [here]&#40;../language/01_layout.md&#41;.)

## Next Steps

To learn more about the Leo language and its syntax, start [here](03_language.md).

To learn more about how to use the Leo CLI, start [here](04_commands.md).