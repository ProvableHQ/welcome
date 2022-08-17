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
You can print the list of commands by running `leo --help`
:::

* [`new`](01_new.md) - Create a new Leo package in a new directory

* [`init`](02_init.md) - Create a new Leo package in an existing directory
* [`build`](03_build.md) - Compile the current package as a program
* [`watch`](04_watch.md) - Watch the changes of Leo's source files
* [`test`](05_test.md) - Compile and run all tests in the current package
* [`setup`](06_setup.md) - Run a program setup
* [`prove`](07_prove.md) - Run the program and produce a proof
* [`run`](08_run.md) - Run a program with input variables
* [`login`](09_login.md) - Login to Aleo Package Manager
* [`logout`](10_logout.md) - Logout of Aleo Package Manager
* [`add`](11_add.md) - Install a package from the package manager
* [`remove`](12_remove.md) - Uninstall a package from the current package
* [`publish`](13_publish.md) - Publish the current package to the Aleo Package Manager
* [`deploy`](14_deploy.md) - Deploy the current package as a program to the network (under construction)
* [`clean`](15_clean.md) - Clean the output directory
* [`lint`](16_lint.md) - Lints the Leo files in the package (under construction)
* [`update`](17_update.md) - Update Leo to the latest version (under construction)