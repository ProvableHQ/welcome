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
     Setup Starting...
     Setup Saving proving key ("${NAME}/outputs/${NAME}.lpk")
     Setup Complete
     Setup Saving verification key ("${NAME}/outputs/${NAME}.lvk")
     Setup Complete
      Done Finished in 10 milliseconds
```
Leo will use a cryptographically-secure pseudorandom number generator from your machine to perform the setup. 

After the setup is complete, the proving key and verification key will be stored
in the `outputs` directory as `.lpk` and `.lvk` files:
```bash
outputs/{$NAME}.lpk
outputs/{$NAME}.lvk
```
