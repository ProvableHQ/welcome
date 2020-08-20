---
id: overview
title: The Leo Command Line Interface
sidebar_label: Command Overview
---

The Leo CLI is a command line interface tool that comes equipped with both the Leo compiler and the [**Aleo Package Manager**](https://aleo.pm/)

## Installation

[**Install Leo**](../getting_started/01_installation.md)

## Global Flags

* `-d`, `--debug` - Enables debugging mode
* `-h`, `--help` - Prints help information

## List of Commands:

:::tip
You can have print the list of commands by running `leo --help`
:::

* `new` - Create a new Leo package in a new directory

* `init` - Create a new Leo package in an existing directory
* `watch` - Watch the changes of Leo's source files
* `test` - Compile and run all tests in the current package
* `setup` - Run a program setup
* `prove` - Run the program and produce a proof
* `run` - Run a program with input variables
* `login` - Login to the Aleo Package Manager
* `add` - Install a package from the package manager
* `remove` - Uninstall a package from the current package
* `publish` - Publish the current package to the Aleo Package Manager
* `deploy` - Deploy the current package as a program to the network (under construction)
* `clean` - Clean the output directory
* `lint` - Lints the Leo files in the package (under construction)
* `update` - Update Leo to the latest version (under construction)