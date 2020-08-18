---
id: cli
title: CLI Commands
---

In the [hello world](02_hello_world.md) guide we called
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
  leo  Compiled program file "/{$PATH}/hello-world/src/main.leo"
```

To avoid unnecessary future compilations, Leo creates a checksum `hello-world.sum` in the `build/` directory.

### 2. Setup
```bash
leo setup
```
This command generates a proving key `hello-world.lpk` and verifying key `hello-world.lvk` and stores both in the `build/` directory.

### 3. Prove

```bash
leo prove
```
This command generates a proof `hello-world.proof` using the inputs at `hello-world.in` and proving key at `hello-world.lpk`. 

```bash title="console output:"
  leo  Compiled program file "/{$PATH}/hello-world/src/main.leo"
  leo  Setup starting...
  leo  Program circuit successfully synthesized!
  leo  Writing to output registers...
  leo  Saving proving key ("/{$PATH}/hello-world")
  leo  Saving verification key ("/{$PATH}/hello-world")
  leo  Setup completed in 37 milliseconds
  leo  Program setup complete
```

The proof is stored in the  `build/` directory.

### 4. Verify

```bash
leo run
```

This command verifies the proof `hello-world.proof` using the verifying key `hello-world.lvk` and outputs the result to console.

```bash title="console output:"
  leo  Compiled program file "/{$PATH}/hello-world/src/main.leo"
  leo  Loading saved setup...
  leo  Program setup complete
  leo  Proving...
  leo  Program circuit successfully synthesized!
  leo  Writing to output registers...
  leo  Prover completed in 11 milliseconds
  leo  Proof stored ("/{$PATH}/hello-world/outputs/hello-world.proof")
  leo  Completed program proving

  Verifier time   : 3 milliseconds
  Verifier output : true
```

The `leo run` command will attempt to verify a proof only if all previous steps completed successfully.
Under the hood, the Leo [CLI](../cli/07_run.md) will check for existing `.sum`, `.lpk`, `.lvk`, or `.proof` files 
in the build directory before running each command. This ensures that we don't run unnecessary commands.

### 5. Program Outputs

The return value of the `main` function is stored in the program's output file `outputs/hello-world.out`

```leo title="outputs/hello-world.out"
[registers]
r0: u32 = 3u32;
```
Try editing the inputs in `input/hello-world.in` executing `leo run`. If you provided different input values to the program,
then you should see different results written to the output registers.

## The Leo Language
To learn more about how to use the Leo Language, start [here](../language/00_layout.md)

## The Leo CLI
To learn more about how to use the Leo CLI, start [here](../cli/00_new.md)