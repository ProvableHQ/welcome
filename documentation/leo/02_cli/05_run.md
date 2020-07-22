---
hide_title: true
sidebar_label: leo run
---

# Verify the Program

### `leo run`

To call the `setup`, `prove`, and `verify` commands sequentially, run:
```bash
leo run
```
Leo starts by checking the `target` directory for an existing `.proof` file. If it doesn't exist, it will proceed to run `leo prove` and then continue.

After the verifier is run, Leo will output either `true` or `false` based on the verification.

