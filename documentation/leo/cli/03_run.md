---
id: run
title: Execute a Program
sidebar_label: leo run
---

### `leo run`

To execute a Leo program function using inputs from the program input `.in` file.
```bash
leo run {$FUNCTION}
```

To execute a Leo program function with inputs from the command line.
`{$INPUTS}` should be a list of inputs to the program separated by spaces.
```bash
leo run {$FUNCTION} {$INPUTS}
```


```bash title="console output:"
 Build ✅ Compiled 'main.leo' into Aleo instructions (in "/hello/build/main.aleo")
⏳ Compiling 'hello.aleo'...

 • Loaded universal setup (in 100 ms)
 • Built 'main' (in 1000 ms)

     Build ✅ Built 'hello.aleo' (in "/hello/build")
 • Loaded universal setup (in 100 ms)
🚀 Executing 'hello.aleo/main'...

 • Executing 'hello.aleo/main'...
 • Executed 'main' (in 1000 ms)

➡️  Output

 • 3u32

 Executing ✅ Executed 'hello.aleo/main' (in "/hello/build")
```

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
