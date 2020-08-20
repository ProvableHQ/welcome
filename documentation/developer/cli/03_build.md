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
```bash
leo  Compiled program file "{$NAME}/src/main.leo"
```

```bash
leo  Compiled library file "{$NAME}/src/lib.leo"
```

This will create a new directory `outputs/`, as serialized program file `.json`, and a checksum file `.sum` in the directory. 
