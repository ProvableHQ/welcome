---
title: CLI Commands
sidebar_label: CLI Commands
---

In the quick start guide we called
```bash
leo run
```

## Step by step

Let's walk through each command called by `leo run` and get a better understanding of what's happening under the hood. 
First, remove all build files with:
```bash
leo clean
```

### 1. Build

```bash
leo build
```
This command compiles the program file `main.leo`. Leo will check program syntax and produce the circuit. 

```bash title="console output:"
  leo  Compiled program file "/{$PATH}/hello_world/src/main.leo"
```

To avoid unnecessary future compilations, Leo creates a checksum `hello_world.sum` in the `build/` directory.

### 2. Setup
```bash
leo setup
```
This command generates a proving key `hello_world.lpk` and verifying key `hello_world.lvk` and stores both in the `build/` directory.

### 3. Prove

```bash
leo prove
```
This command generates a proof `hello_world.proof` using the inputs at `hello_world.in` and proving key at `hello_world.lpk`. 

```bash title="console output:"
  leo  Compiled program file "/{$PATH}/hello_world/src/main.leo"
  leo  Setup starting...
  leo  Program output: [[input]u32]
  leo  Saving proving key ("/{$PATH}/hello_world")
  leo  Saving verification key ("/{$PATH}/hello_world")
  leo  Setup completed in 37 milliseconds
  leo  Program setup complete
```

The proof is stored in the  `build/` directory.

### 4. Verify

```bash
leo run
```

This command verifies the proof `hello_world.proof` using the verifying key `hello_world.lvk` and outputs the result to console.

```bash title="console output:
  leo  Compiled program file "/{$PATH}/hello_world/src/main.leo"
  leo  Setup complete
  leo  Program setup complete
  leo  Proving...
  leo  Program output: [1u32]
  leo  Prover completed in 11 milliseconds
  leo  Proof stored ("/{$PATH}/hello_world/outputs/hello_world.proof")
  leo  Completed program proving

  Verifier time   : 3 milliseconds
  Verifier output : true
```

#### Why did we call `leo run` twice?

Leo was designed with simplicity in mind. 

The `leo run` command will attempt to verify a proof only if all previous steps completed successfully.
Under the hood, the Leo [CLI](../cli/run/run.md) will check for existing `.sum`, `.lpk`, `.lvk`, or `.proof` files 
in the build directory before running each command. This ensures that we don't run unnecessary commands.

## The Leo Language
To learn more about how to use the Leo Language, start [here](../language/layout.md)

## The Leo CLI
To learn more about how to use the Leo CLI, start [here](../cli/develop/new.md)