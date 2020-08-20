---
id: init
title: Initialize a Package
sidebar_label: leo init
---

## `leo init`

To initialize a Leo package in an existing directory, run:
```bash
leo init
```
This will initialize the current directory with the same package directory setup.

### Optional Flags
`leo init` supports the same flags as [**`leo new`**](aleo/documentation/developer/cli/01_new.md#optional-flags)
```bash
leo init --bin
```
This will create a new Leo package with a **main.leo** file in the source directory. The new package will have a directory structure as above.

```bash
leo init --lib
```

This will create a new Leo package with a **lib.leo** file in the source directory. The new package will have a directory structure as follows:

:::info
For more information on **main.leo** and **lib.leo** differences, check out the [**Layout of a Leo Program**](../language/01_layout.md#binaries-vs-libraries)
:::