---
id: setup
title: Perform the Program Setup
sidebar_label: leo setup
---

### `leo setup`

To perform the program setup, producing a proving key and verification key, run:
```bash
leo setup
```
Leo uses cryptographic randomness from your machine to perform the setup. 
The proving key and verification key are stored in the `target` directory as `.lpk` and `.lvk`:

```
build/{$NAME}.lpk
build/{$NAME}.lvk
```