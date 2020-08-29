---
id: prove
title: Execute a Program
sidebar_label: leo prove
---

### `leo prove`

To execute your Leo program and produce a program proof, run:
```bash
leo prove
```
```bash title="console output:"
leo  Compiled program file "${NAME}/src/main.leo"
leo  Loading saved setup...
leo  Program setup complete
leo  Proving...
leo  Program circuit successfully synthesized!
leo  Writing to output registers...
leo  Prover completed in 0 milliseconds
leo  Proof stored ("${NAME}/outputs/${NAME}.proof")
leo  Completed program proving
```

Leo first checks the `build` directory for an existing `.lpk` file. If it doesn't exist, Leo will proceed to run `leo setup` and then continue.

Next, the input `.in` and `.state` input files in the `inputs` directory are parsed. All values are allocated in the program before continuing.

Once again, Leo uses cryptographic randomness from your machine to produce the proof. The proof is stored in the `outputs` directory as `.proof`:

```bash
outputs/{$NAME}.proof
```