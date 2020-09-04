---
id: hello_world
title: Hello World in Leo
sidebar_label: Hello World
---

Use the Leo CLI to create a new project.
In your terminal, run:
```bash
leo new hello-world
cd hello-world
```

This creates a directory with the following structure:

```bash
hello-world/
├── Leo.toml # Your program manifest
├── README.md # Your program description
├── inputs/ 
│ ├── hello-world.in # Your program inputs
│ └── hello-world.state # Record state information
└── src/    
  └── main.leo # Your program file
```

Let's run the project.

## Zero Knowledge in one line

The `leo run` command will compile the program, generate keys for a trusted setup, fetch inputs, generate a proof and verify it.
In your terminal, run:
```bash
leo run
```

```bash title="console output:"
Compiling Starting...
 Compiling Compiling main program... ("hello-world/src/main.leo")
 Compiling Complete
      Done Finished in 10 milliseconds

     Setup Starting...
     Setup Saving proving key ("hello-world/outputs/hello-world.lpk")
     Setup Complete
     Setup Saving verification key ("hello-world/outputs/hello-world.lvk")
     Setup Complete
      Done Finished in 10 milliseconds

   Proving Starting...
   Proving Saving proof... ("hello-world/outputs/hello-world.proof")
      Done Finished in 10 milliseconds

 Verifying Starting...
 Verifying Proof is valid
      Done Finished in 10 milliseconds
```

Congratulations! You've just run your first Leo program.

Let's go through the file syntax of the program we just executed.