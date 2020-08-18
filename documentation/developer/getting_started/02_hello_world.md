---
id: hello_world
title: Hello World in Leo
sidebar_label: Hello World
---

Use the Leo CLI to create a new project

```bash
leo new hello-world
cd hello-world
```

This creates a directory with the following structure:
```bash
hello-world/
├── Leo.toml # Your program manifest
├── inputs/ 
│ └── hello-world.in # Your program inputs
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
  leo  Compiled program file "/$PATH/hello-world/src/main.leo"
  leo  Setup starting...
  leo  Program circuit successfully synthesized!
  leo  Writing to output registers...
  leo  Saving proving key ("/$PATH/hello-world")
  leo  Saving verification key ("/$PATH/hello-world")
  leo  Setup completed in 36 milliseconds
  leo  Program setup complete
  leo  Proving...
  leo  Program circuit successfully synthesized!
  leo  Writing to output registers...
  leo  Prover completed in 10 milliseconds
  leo  Proof stored ("/$PATH/hello-world/outputs/hello-world.proof")
  leo  Completed program proving

  Verifier time   : 3 milliseconds
  Verifier output : true
```

Congratulations! You've just run your first Leo program.

Let's go through the file syntax of the program we just executed.