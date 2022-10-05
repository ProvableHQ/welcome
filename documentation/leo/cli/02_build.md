---
id: build
title: Build a Package
sidebar_label: leo build
---

## `leo build`

To compile your program and verify that it builds properly, run:
```bash
leo build
```

[//]: # (The results of compiling `main.leo` or `lib.leo` and it's imported dependencies will be printed:)

[//]: # (```bash title="console output:")

[//]: # ( Compiling Starting...)

[//]: # ( Compiling Compiling main program... &#40;"${NAME}/src/main.leo"&#41;)

[//]: # ( Compiling Complete)

[//]: # (      Done Finished in 10 milliseconds)

[//]: # (```)
This will create a new directory `build/` with an Aleo program file `.aleo`. 
```bash title="console output:"
     Leo ✅ Compiled 'main.leo' into Aleo instructions
     Leo ✅ Built 'hello.aleo' (in "/hello/build")
```