---
id: setup
title: Setup the Program
sidebar_label: leo setup
---

### `leo setup`

To run the program setup and produce a proving key and verification key, run:
```bash
leo setup
```
Leo will use cryptographically-secure psuedorandom number generator from your machine to perform the setup. 

After the setup is complete, the proving key and verification key will be stored
in the `outputs` directory as `.lpk` and `.lvk` files:
```
outputs/{$NAME}.lpk
outputs/{$NAME}.lvk
```
