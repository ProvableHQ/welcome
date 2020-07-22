---
hide_title: true
sidebar_label: leo build
---
# Build a Package

### `leo build`

To compile your program and verify that it builds properly, run:
```bash
leo build
```
The results of compiling `main.leo` or `lib.leo` and it's imported dependencies will be printed:
```bash
leo  Compiled program file "/{$PATH}/{$NAME}/src/main.leo"
```

```bash
leo  Compiled library file "/{$PATH}/{$NAME}/src/lib.leo"
```

This will create a new directory `outputs/` and a checksum file `.sum` in the directory. 
