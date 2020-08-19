---
id: overview
title: The Leo Programming Language
sidebar_label: Overview
---

Welcome to the Leo programming language. Leo is a functional, statically-typed programming language built
for writing private applications.

The syntax of Leo is influenced by JavaScript, Python, Scala, and Rust with a strong emphasis on readability and ease-of-use.

Leo exists to provide a simple high-level language that compiles to rank one constraint system (R1CS) circuits.
With Leo, you can write circuits to support zero-knowledge tokens, private stable coins, and decentralized marketplaces.

:::info
The Leo language is currently in active development. Please monitor the repository on [**GitHub**](https://github.com/AleoHQ/leo) for breaking changes
:::

## Installing Leo

Proceed to [**Installation**](./01_installation.md) for information on how to install Leo.

## Getting Started

Checkout the [**Hello World**](./02_hello_world.md) tutorial for a brief walk-through of Leo and the Leo CLI.

## Language Documentation

To learn the core concepts and syntax of Leo, start with the [**Layout of a Leo Program**](aleo/documentation/developer/language/01_layout.md).
Leo comes with an advanced testing framework for writing unit and integration tests. Read [**Writing Tests**](aleo/documentation/developer/language/12_tests.md) to learn more.

## Programming Model

Leo programs are designed to work with Aleo [record](../../aleo/concepts/02_records.md) and [transaction](../../aleo/concepts/03_transactions.md) data. 
Understanding how to access and compute on this data is essential to writing private applications. 
Read the [**Model**](../programming_model/00_model.md) to learn more.

## Command Line Interface Documentation

The Leo CLI provides a suite of commands to make programming in Leo easy.

Develop your program with [**new**](../cli/00_new.md), [**build**](../cli/02_build.md), [**watch**](../cli/03_watch.md), 
[**test**](../cli/04_test.md), and [**clean**](../cli/13_clean.md).

Download packages from the Aleo Package Manager with [**add**](../cli/09_add.md), [**remove**](../cli/10_remove.md), [**login**](../cli/08_login.md), and [**publish**](../cli/11_publish.md).

Once your Leo program is compiled, generate proofs with [**setup**](../cli/05_setup.md), [**prove**](../cli/06_prove.md), and [**run**](../cli/07_run.md).

## Additional Material

