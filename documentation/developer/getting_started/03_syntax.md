---
id: syntax
title: File Syntax
---

First, Open up `Leo.toml` in [Aleo Studio](https://aleo.studio/) for pretty syntax highlighting or your text editor of choice.

```leo title="Leo.toml" 
[package]
name = "hello_world"
version = "0.1.0"
```

This is the Leo manifest file that configures our package. 
Let's go through each line.

```leo
[package]
```

The first line is a section heading that indicates the next lines will provide basic information on how to compile the program. provide information to configure the package.
In the future, Leo plans to support other sections to give information on `[dependencies]`, `[accounts]`, and `[modules]`.

```leo
name = "hello_world"
```

The package `name` is the official, unique name of the package that other developers will be able to look up after you have published your package.

Package names are only allowed to contain lowercase letters, numbers and hyphens. Hyphens `-` are the only separator allowed in package names. 

```leo
version = "0.1.0"
```

All files in the current package will be compiled with the specified Leo version. 

Next, open up `src/main.leo`.

## Syntax to circuits

```leo title="src/main.leo"
// The 'hello_world' main function.
function main(a: u32) -> u32 {
    return a
}
```

The `main.leo` file is the entry point of a Leo project. It should contain a function named `main`. 
Let's break down the structure of a Leo file.

```leo
function main(a: u32) -> u32 {
```

The keyword `function` indicates a function definition in Leo. 
Our **hello_world** `main` function takes one input `a` with type `u32` and returns one result with type `u32`.
The function body is enclosed in curly braces `{ }`. It is a common convention in Leo to place the opening curly 
bracket on the same line as the function definition, adding one space in between.

```leo
    return a
```

Inside the `main` function is a single return statement that returns the function input `a`.
Return statements in Leo are unique since they do not end in a semicolon.

Leo's compiler will build a **circuit** out of the above program.

Next, open up `inputs/hello_world.in`.

## Wiring program inputs 
```leo title="inputs/hello_world.in"
// The program inputs for hello_world/src/main.leo
[main]
a: u32 = 1;
```

The `hello_world.in` file defines all **hello_world** program inputs. 

```leo title="inputs/hello_world.in"
[main]
```

Similar to our manifest `Leo.toml`, an input file begins with a section enclosed in brackets `[ ]`.

`main` indicates the file that we are configuring inputs for.

```leo title="inputs/hello_world.in"
a: u32 = 1;
```

An input assignment shares syntax with an explicit variable [assignment](../language/01_variables.md) in normal `.leo` files.
Here we assign the input named `a` with type `u32` to the value `1`. 

Leo's compiler will fetch these values and provide them as inputs to the circuit at proving time.

Now lets look into the Leo CLI and see what commands we can run on our program.