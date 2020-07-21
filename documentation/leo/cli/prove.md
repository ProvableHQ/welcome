---
title: Generate a Proof
sidebar_label: leo prove
---

### `leo prove`

To execute the program and produce an execution proof, run:
```bash
leo prove
```
Leo starts by checking the `build` directory for an existing `.lpk` file. If it doesn't exist, it will proceed to run `leo setup` and then continue.

Next any `in` input files in the `inputs` directory are parsed and all input values are passed to the program.

Once again, Leo uses cryptographic randomness from your machine to produce the proof. The proof is stored in the `target` directory as `.proof`:

```
build/{$NAME}.proof
```