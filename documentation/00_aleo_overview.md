---
id: aleo
title: Aleo Instructions and the Aleo SDK
sidebar_label: Overview
---
Welcome to the Aleo instructions guide. Aleo instructions is the intermediate representation of Aleo programs.
All Leo programs compile to Aleo instructions which compile to bytecode. 
We recommend learning and using Aleo instructions if your goal is fine-grained circuit design or 
if you are implementing a compiler that reads in a high-level language other than Leo and want your programs to run on Aleo.

Aleo programs are files with a `.aleo` extension.
Aleo programs contain Aleo instructions - an assembly-like programming language.
Aleo instructions are compiled into AVM opcodes that can be executed by the Aleo Virtual Machine.

The Aleo SDK is a toolkit that supports account generation, program compilation, and program deployment.
Use the Aleo SDK to generate yourself a new Aleo account [here](https://aleo.tools).

Install the Aleo SDK to compile and execute Aleo instructions.

:::info
The Aleo SDK is currently in active development. Please monitor the repository on [**GitHub**](https://github.com/AleoHQ/aleo) for possibly breaking changes.
:::

## Installing the Aleo SDK

Proceed to [**Installation**](./aleo/01_installation.md) for information on how to install the Aleo SDK.

## Hello Aleo Instructions

Develop your first [**Hello Aleo**](./aleo/02_hello.md) Aleo instructions program.

## Aleo Instructions Guide

Learn the core concepts and syntax of [Aleo instructions](./aleo/03_language.md).

Read the full list of supported [AVM opcodes](./aleo/04_opcodes.md).

## Formal Language Documentation

Check your program or compiler implementation against the [Aleo instructions grammar](./aleo/06_grammar.md).

Study the formal [ABNF grammar specification](./aleo/07_abnf.md) for the full formal syntax of Aleo instructions. 

## Aleo Command Line Interface Documentation

The Aleo CLI provides a suite of commands to make programming in Aleo instructions easy.

1. [aleo account](./aleo/05_commands.md#1-aleo-account)
2. [aleo new](./aleo/05_commands.md#2-aleo-new)
3. [aleo build](./aleo/05_commands.md#3-aleo-build)
4. [aleo run](./aleo/05_commands.md#4-aleo-run)
5. [aleo clean](./aleo/05_commands.md#5-aleo-clean)
6. [aleo update](./aleo/05_commands.md#6-aleo-update)

[//]: # (5. [aleo node]&#40;./aleo/05_commands.md#5-aleo-node&#41;)

[//]: # (6. [aleo deploy]&#40;./aleo/05_commands.md#6-aleo-deploy&#41;)

## Additional Material

Install Aleo instructions for your favorite code [**editor**](./aleo/08_tooling.md).

[//]: # ()
[//]: # (## Testnet3 Development Endpoints)

[//]: # ()
[//]: # (:::caution)

[//]: # ()
[//]: # (Aleo Testnet III is **not** ready for production use and will undergo thorough audit and testing before reaching production.)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (The server will start at the following endpoint:)

[//]: # (```bash)

[//]: # (aleo node start)

[//]: # ()
[//]: # (🌐 Server is running at http://0.0.0.0:4180)

[//]: # (```)

[//]: # ()
[//]: # (### Latest Block Height)

[//]: # (Returns the number of blocks in the canonical chain.)

[//]: # ()
[//]: # (```bash)

[//]: # (http://localhost:4180/testnet3/latest/block/height)

[//]: # (```)

[//]: # ()
[//]: # (### Latest Block Hash)

[//]: # (Returns the block hash from the head of the canonical chain.)

[//]: # ()
[//]: # (```bash)

[//]: # (http://localhost:4180/testnet3/latest/block/hash)

[//]: # (```)

[//]: # ()
[//]: # (### Latest Block)

[//]: # (Returns the block from the head of the canonical chain.)

[//]: # ()
[//]: # (```bash)

[//]: # (http://localhost:4180/testnet3/latest/block)

[//]: # (```)

[//]: # ()
[//]: # (### Get Block)

[//]: # (Returns the block given the block height.)

[//]: # ()
[//]: # (```bash)

[//]: # (http://localhost:4180/testnet3/block/{height})

[//]: # (```)

[//]: # ()
[//]: # (## Getting records belonging to an account)

[//]: # (You can retrieve records in three different ways, depending on what type of records you want to query. You will need your ViewKey at your disposal. There are two types of records, spent and unspent, we will talk about these later on. You can see the list of the endpoints associated below:)

[//]: # ()
[//]: # (### Get All Owned Records)

[//]: # (`GET /testnet3/records/all`)

[//]: # ()
[//]: # (This endpoint retrieves all the records belonging to a given ViewKey.)

[//]: # ()
[//]: # (```bash)

[//]: # (curl --location --request GET 'localhost:4180/testnet3/records/all' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"')

[//]: # (```)

[//]: # ()
[//]: # (### Get All Spent Records)

[//]: # (`GET /testnet3/records/spent`)

[//]: # ()
[//]: # (This endpoint retrieves only the spent records belonging to a given ViewKey.)

[//]: # ()
[//]: # (```bash)

[//]: # (curl --location --request GET 'localhost:4180/testnet3/records/spent' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"')

[//]: # (```)

[//]: # ()
[//]: # (### Get All Unspent Records)

[//]: # (`GET /testnet3/records/unspent`)

[//]: # ()
[//]: # (This endpoint retrieves only the unspent records belonging to a given ViewKey.)

[//]: # ()
[//]: # (```bash)

[//]: # (curl --location --request GET 'localhost:4180/testnet3/records/unspent' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"')

[//]: # (```)