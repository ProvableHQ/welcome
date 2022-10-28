---
id: run
title: Execute a Program
sidebar_label: leo run
---


[//]: # (```bash title="console output:")

[//]: # ( Compiling Starting...)

[//]: # ( Compiling Compiling main program... &#40;"${NAME}/src/main.leo"&#41;)

[//]: # ( Compiling Complete)

[//]: # (      Done Finished in 10 milliseconds)

[//]: # ()
[//]: # (     Setup Detected saved setup)

[//]: # (     Setup Loading proving key...)

[//]: # (     Setup Complete)

[//]: # (     Setup Loading verification key...)

[//]: # (     Setup Complete)

[//]: # (      Done Finished in 10 milliseconds)

[//]: # ()
[//]: # (   Proving Starting...)

[//]: # (   Proving Saving proof... &#40;"${NAME}/outputs/${NAME}.proof"&#41;)

[//]: # (      Done Finished in 10 milliseconds)

[//]: # ()
[//]: # ( Verifying Starting...)

[//]: # ( Verifying Proof is valid)

[//]: # (      Done Finished in 10 milliseconds)

[//]: # (```)

[//]: # ()
[//]: # (Leo starts by checking the `outputs` directory for an existing `.proof` file. If it doesn't exist, Leo will proceed to run `leo prove` and then continue.)

[//]: # ()
[//]: # (After the verifier is run, Leo will output either `true` or `false` based on the verification.)

[//]: # ()
[//]: # (The program output will be stored in the program output file `.out`:)

[//]: # (```bash)

[//]: # (outputs/{$NAME}.out)

[//]: # (```)

[//]: # ()
