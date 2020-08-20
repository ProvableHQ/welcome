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
leo  Compiled program file "${NAME}/src/main.leo"
leo  Setup starting...
leo  Program circuit successfully synthesized!
leo  Writing to output registers...
leo  Setup completed in 0 milliseconds
leo  Saving proving key ("${NAME}/outputs/${NAME}.lpk")
leo  Saving verification key ("${NAME}/outputs/${NAME}.lvk")
leo  Program setup complete
leo  Proving...
leo  Program circuit successfully synthesized!
leo  Writing to output registers...
leo  Prover completed in 7 milliseconds
leo  Proof stored ("${NAME}/outputs/${NAME}.proof")
leo  Completed program proving

Verifier time   : 2 milliseconds
Verifier output : true
```

Leo starts by checking the `outputs` directory for an existing `.proof` file. If it doesn't exist, Leo will proceed to run `leo prove` and then continue.

After the verifier is run, Leo will output either `true` or `false` based on the verification.

The program output will be stored in the program output file `.out`:
```bash
outputs/{$NAME}.out
```

