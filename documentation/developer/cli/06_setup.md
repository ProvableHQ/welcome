---
id: setup
title: Setup a Program
sidebar_label: leo setup
---

### `leo setup`

To run the program setup and produce a proving key and verification key, run:
```bash
leo setup
```
```bash title="console output:"
leo  Compiled program file "{$NAME}/src/main.leo"
leo  Setup starting...
leo  Program circuit successfully synthesized!
leo  Writing to output registers...
leo  Setup completed in 0 milliseconds
leo  Saving proving key ("{$NAME}/outputs/${NAME}.lpk")
leo  Saving verification key ("{$NAME}/outputs/${NAME}.lvk")
leo  Program setup complete
```
Leo will use a cryptographically-secure pseudorandom number generator from your machine to perform the setup. 

After the setup is complete, the proving key and verification key will be stored
in the `outputs` directory as `.lpk` and `.lvk` files:
```bash
outputs/{$NAME}.lpk
outputs/{$NAME}.lvk
```
