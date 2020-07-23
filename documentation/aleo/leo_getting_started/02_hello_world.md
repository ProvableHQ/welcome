---
id: hello_world
title: Hello World in Leo
sidebar_label: Hello World
---

Use the Leo CLI to create a new project

```bash
leo new hello_world
cd hello_world
```

This creates a directory with the following structure:
```bash
hello_world/
├── Leo.toml # Your program manifest
├── inputs/ 
│ └── hello_world.in # Your program inputs
└── src/    
  └── main.leo # Your program file
```

Let's run the project.

## Zero Knowledge in one line

```bash
leo run
```
This command will compile the program, generate keys for a trusted setup, fetch inputs, generate a proof and verify it.


```bash title="console output:"
  leo  Compiled program file "/$PATH/hello_world/src/main.leo"
  leo  Setup starting...
  leo  Program output: [[input]u32]
  leo  Saving proving key ("/$PATH/hello_world")
  leo  Saving verification key ("/$PATH/hello_world")
  leo  Setup completed in 36 milliseconds
  leo  Program setup complete
  leo  Proving...
  leo  Program output: [1u32]
  leo  Prover completed in 10 milliseconds
  leo  Proof stored ("/$PATH/hello_world/outputs/hello_world.proof")
  leo  Completed program proving

  Verifier time   : 3 milliseconds
  Verifier output : true
```

Congratulations! You've just run your first Leo program.

Let's go through the file syntax of the program we just executed.