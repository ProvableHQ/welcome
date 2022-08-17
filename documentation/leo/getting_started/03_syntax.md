---
id: syntax
title: File Syntax
---

First, open your **hello-world** project in [Aleo Studio](https://aleo.studio/) (for pretty syntax highlighting) or your text editor of choice. 

**Leo.toml** is the Leo manifest file that configures our package. 
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

The program id `program` is the official name of the other developers will be able to look up after you have published your program.
```json
    "program": "hello.aleo",
```

All files in the current package will be compiled with the specified Leo `version`. 

```json
    "version": "0.0.0",
```

## Syntax to circuits
Open up **src/main.leo**.
The **main.leo** file is the entry point of a Leo project. It should contain a function named `main`. 
Let's break down the structure of a Leo file.
```leo title="src/main.leo"
// The 'hello' main function.
@program
function main(public a: u32, b: u32) -> u32 {
    let c: u32 = a + b;
    return c;
}
```

The annotation `@program` indicates that a function can be executed as an Aleo program function by the AVM.
The keyword `function` indicates a function definition in Leo. 
Our **hello** `main` function takes an input `a` with type `u32` and `public` visibility and an input `b` with type `u32` and `private` visibility by default.
The program returns one result with type `u32`.
The function body is enclosed in curly braces `{ }`. It is a common convention in Leo to place the opening curly 
bracket on the same line as the function definition, adding one space in between.
```leo
@program
function main(public a: u32, b: u32) -> u32 {
```

Inside the `main` function is a single return statement that returns the function input `a`.
```leo
    return c;
```

## Wiring program inputs 
Leo's compiler will build a **circuit** out of the **main.leo** program. Open up **inputs/hello.in**.
Files ending in **.in** and **.state** provide inputs to the program. 
```leo title="inputs/hello.in"
// The program input for hello/src/main.leo
[main]
public a: u32 = 1u32;
b: u32 = 2u32;
```

An input file begins with a section enclosed in brackets `[ ]`.
`main` indicates that we are defining the inputs to the program function `main`.
You can only define inputs to program functions that have the `@program` annotation.

```leo
[main]
```

An input assignment shares syntax with an explicit variable assignment in normal `.leo` files.
Here we assign the `public` input named `a` with type `u32` to the value `1`. Leo's compiler will fetch these values and provide them as inputs to the circuit at proving time.

```leo
public a: u32 = 1u32;
b: u32 = 2u32;
```

Now lets look into the Leo CLI and see what commands we can run on our program.