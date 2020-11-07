---
id: build
title: Build a Package
sidebar_label: leo build
---

### `leo build`

To compile your program and verify that it builds properly, run:
```bash
leo build
```
The results of compiling `main.leo` or `lib.leo` and it's imported dependencies will be printed:
```bash title="console output:"
 Compiling Starting...
 Compiling Compiling main program... ("${NAME}/src/main.leo")
 Compiling Complete
      Done Finished in 10 milliseconds
```
This will create a new directory `outputs/`, as serialized program file `.json`, and a checksum file `.sum` in the directory. 
