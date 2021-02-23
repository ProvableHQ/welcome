---
id: syntax
title: File Syntax
---

First, open your **hello-world** project in [Aleo Studio](https://aleo.studio/) (for pretty syntax highlighting) or your text editor of choice. 

**Leo.toml** is the Leo manifest file that configures our package. 
```leo title="Leo.toml" 
[package]
name = "hello-world"
version = "0.1.0"
```

The section heading `[package]` indicates the next lines will provide basic information on how to compile the package.
In a future release, Leo will support other sections to give information on `[dependencies]`, `[accounts]`, and `[modules]`.
```leo
[package]
```  

The package `name` is the official name of the package that other developers will be able to look up after you have published your package.
Package names are kebab-case only allowing lowercase letters and numbers separated by hyphens.
```leo
name = "hello-world"
```

All files in the current package will be compiled with the specified Leo `version`. 

```leo
version = "0.1.0"
```

## Syntax to circuits
Open up **src/main.leo**.
The **main.leo** file is the entry point of a Leo project. It should contain a function named `main`. 
Let's break down the structure of a Leo file.
```leo title="src/main.leo"
// The 'hello-world' main function.
function main(a: u32) -> u32 {
    return a
}
```


The keyword `function` indicates a function definition in Leo. 
Our **hello-world** `main` function takes one input `a` with type `u32` and returns one result with type `u32`.
The function body is enclosed in curly braces `{ }`. It is a common convention in Leo to place the opening curly 
bracket on the same line as the function definition, adding one space in between.
```leo
function main(a: u32) -> u32 {
```

Inside the `main` function is a single return statement that returns the function input `a`.
Return statements in Leo are unique since they do not end in a semicolon.
```leo
    return a
```

## Wiring program inputs 
Leo's compiler will build a **circuit** out of the **main.leo** program. Open up **inputs/hello-world.in**.
Files ending in **.in** and **.state** provide inputs to the program. 
```leo title="inputs/hello-world.in"
// The program input for hello-world/src/main.leo
[main]
a: u32 = 1;
b: u32 = 2;

[registers]
r0: u32 = 0;
```

Similar to our manifest `Leo.toml`, an input file begins with a section enclosed in brackets `[ ]`.
`main` indicates that we are defining the private inputs to the program.

```leo
[main]
```

An input assignment shares syntax with an explicit variable [assignment](../language/02_variables.md) in normal `.leo` files.
Here we assign the input named `a` with type `u32` to the value `1`. Leo's compiler will fetch these values and provide them as inputs to the circuit at proving time.

```leo
a: u32 = 1;
b: u32 = 2;
```


The `[registers]` section defines registers that a program can read and write to. In an Aleo transaction, these registers 
will be used to pass data in between records. We do not need to worry too much about the input register `r0` for now. 
```leo
[registers]
r0: u32 = 0
```


Now lets look into the Leo CLI and see what commands we can run on our program.