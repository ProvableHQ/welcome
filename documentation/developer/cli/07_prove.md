---
id: prove
title: Execute a Program
sidebar_label: leo prove
---

### `leo prove`

To execute your Leo program and produce a program proof, run:
```leo_console
leo prove
```
```leo_console title="console output:"
     Setup Detected saved setup
     Setup Loading proving key...
     Setup Complete
     Setup Loading verification key...
     Setup Complete
      Done Finished in 10 milliseconds

   Proving Starting...
   Proving Saving proof... ("package-name/outputs/package-name.proof")
      Done Finished in 10 milliseconds
```

Leo first checks the `build` directory for an existing `.lpk` file. If it doesn't exist, Leo will proceed to run `leo setup` and then continue.

Next, the input `.in` and `.state` input files in the `inputs` directory are parsed. All values are allocated in the program before continuing.

Once again, Leo uses cryptographic randomness from your machine to produce the proof. The proof is stored in the `outputs` directory as `.proof`:

```leo_console
outputs/package-name.proof
```