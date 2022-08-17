---
id: hello_world
title: Hello World in Leo
sidebar_label: Hello World
---

Use the Leo CLI to create a new project.
In your terminal, run:
```bash
leo new hello
cd hello
```

This creates a directory with the following structure:

```bash
hello-world/
├── program.json # Your program manifest
├── README.md # Your program description
├── inputs/ 
│ ├── hello.in # Your program inputs
└── src/    
  └── main.leo # Your program file
```

Let's run the project.

## Zero Knowledge in one line

The `leo run` command will compile and execute the program.
In your terminal, run:
```bash
leo run main
```

```bash title="console output:"
 Build ✅ Compiled 'main.leo' into Aleo instructions (in "/hello/build/main.aleo")
⏳ Compiling 'hello.aleo'...

 • Loaded universal setup (in 100 ms)
 • Built 'main' (in 1000 ms)

     Build ✅ Built 'hello.aleo' (in "/hello/build")
 • Loaded universal setup (in 100 ms)
🚀 Executing 'hello.aleo/main'...

 • Executing 'hello.aleo/main'...
 • Executed 'main' (in 1000 ms)

➡️  Output

 • 3u32

 Executing ✅ Executed 'hello.aleo/main' (in "/hello/build")
```

Congratulations! You've just run your first Leo program.

Let's go through the file syntax of the program we just executed.