---
hide_title: true
sidebar_label: A More Complex Example
---
# Example: Pedersen Hash

Let's learn how to write a Pedersen Hash in Leo and prove knowledge of a preimage.
```leo title="src/256_bit.leo"
circuit PedersenHash {
    parameters: group[256],

    // Instantiates a Pedersen hash circuit
    static function new(parameters: group[256]) -> Self {
        return Self { parameters: parameters }
    }

    function hash(bits: bool[256]) -> group {
        let mut digest: group = 0;
        for i in 0..256 {
            if bits[i] {
                digest += self.parameters[i];
            }
        }
        return digest
    }
}

```

```leo title="src/main.leo"
// Import the PedersenHash circuit from another file
import pedersen.256_bit.PedersenHash;

// The 'pedersen_hash' main function.
function main(parameters: group[256], input: bool[256]) -> group {
    const pedersen = PedersenHash::new(parameters);
    return pedersen.hash(input)
}
```

```leo title="inputs/pedersen.in"
[main]
const parameters: group[256] = [1group; 256];
input: bool[256] = [true; 256];
```