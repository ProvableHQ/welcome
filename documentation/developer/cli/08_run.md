---
id: run
title: Verify a Program
sidebar_label: leo run
---

### `leo run`

To verify the proof in the `outputs` directory run:
```bash
leo run
```
```bash title="console output:"
 Compiling Starting...
 Compiling Compiling main program... ("${NAME}/src/main.leo")
 Compiling Complete
      Done Finished in 10 milliseconds

     Setup Detected saved setup
     Setup Loading proving key...
     Setup Complete
     Setup Loading verification key...
     Setup Complete
      Done Finished in 10 milliseconds

   Proving Starting...
   Proving Saving proof... ("${NAME}/outputs/${NAME}.proof")
      Done Finished in 10 milliseconds

 Verifying Starting...
 Verifying Proof is valid
      Done Finished in 10 milliseconds
```

Leo starts by checking the `outputs` directory for an existing `.proof` file. If it doesn't exist, Leo will proceed to run `leo prove` and then continue.

After the verifier is run, Leo will output either `true` or `false` based on the verification.

The program output will be stored in the program output file `.out`:
```bash
outputs/{$NAME}.out
```

