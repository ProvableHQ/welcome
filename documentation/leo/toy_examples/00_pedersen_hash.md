---
id: pedersen_hash
title: Pedersen Hash
sidebar_label: Pedersen Hash
---

:::caution
This design is not standardized and currently unstable.
:::

Let's learn how to write a Pedersen Hash in Leo and prove knowledge of a preimage.

```leo title="src/main.leo"
circuit PedersenHash {
    parameters: [group; 256],

    // Instantiates a Pedersen hash circuit
    function new(parameters: [group; 256]) -> Self {
        return Self { parameters: parameters };
    }

    function hash(self, bits: [bool; 256]) -> group {
        let digest: group = 0group;
        for i in 0..256 {
            if bits[i] {
                digest += self.parameters[i];
            }
        }
        return digest;
    }
}

// The 'pedersen-hash' main function.
function main(hash_input: [bool; 256], const parameters: [group; 256]) -> group {
    const pedersen = PedersenHash::new(parameters);
    return pedersen.hash(hash_input);
}
```

```leo title="inputs/pedersen.in"
[main]
hash_input: [bool; 256] = [true; 256];

[constants]
parameters: [group; 256] = [1group; 256];

[registers]
r0: group = (1, 0)group;
```

### Circuit Execution
All paths in a circuit need to execute. Circuits cannot reason about errors.

All values in a program must be static. Circuits cannot dynamically generate other circuits.

### Logging
To aid developers in writing circuits, Leo provides several [console functions](../language/11_console.md):
* console.assert
* console.log
* console.debug
* console.error

These functions execute separately from the circuit and do not generate constraints.
They can be used to provide developers additional information when testing circuits.