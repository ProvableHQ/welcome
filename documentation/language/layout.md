---
title: Layout of a Leo File
sidebar_label: Layout of a Leo File
---

Leo files have four core parts: [`imports`](./imports), [`circuits`](./circuits), [`functions`](./functions), and [`tests`](./testing)

```leo
imports

circuits

functions

tests
```

This order is strictly enforced. If you try and define a part out of order a syntax error will occur.
This design choice is to improve readability for other Leo developers viewing your code.

## Binaries vs. Libraries

The `main.leo` file in a Leo project is similar to a binary executable created in languages such as Rust.
Leo CLI commands use `main.leo` as a starting point to pass in witness input values and generate proofs to produce a result.

If the goal of your project is to create circuits that other Leo developers can import into their projects, 
then you should create a `lib.leo` file. When publishing your project as a package, it is not necessary to have a `main.leo`
in the source directory. The compiler will look at `lib.leo` and make sure all circuits and functions are valid including imports.
Therefore, it is required that all `.leo` files are imported by your `lib.leo` before publishing.

It is possible to have a `main.leo` and `lib.leo` file in the same project. The compiler will look at `.leo` files 
imported by either before publishing.

