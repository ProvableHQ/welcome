---
id: inputs
title: Leo Inputs
---

Private inputs for a Leo program are specified in the `inputs/` directory. 
The syntax for an input file is a limited subset of the Leo program syntax. 
The default inputs file is `inputs/package.in`.

## Sections
A Leo input file is made up of sections. Sections are defined by a section header in brackets followed by one or more input definitions. 

Section headers specify the target file which must have a `main` function with matching input names and types.

```leo title="inputs/package.in"
[main] // <- section header
a: u32 = 1;
b: u32 = 2;
```

```leo title="src/main.leo"
function main(a: u32, b: u32) -> u32 {
    let c: u32 = a + b;
    return c
}
```

## Input Definitions

### Supported types
```leo
[main]
a: bool  = true;       // booleans
b: u8    = 2;          // integers
c: field = 0;          // fields
d: group = (0, 1)group // group tuples
e: address = aleo1qnr4dkkvkgfqph0vzc3y6z2eu975wnpz2925ntjccd5cfqxtyu8sta57j8 // addresses
```

### Arrays
```leo
[main]
a: u8[4]    = [0u8; 4];      // <- single
b: u8[2][3] = [[0u8; 2]; 3]; // <- multi-dimensional
```

## `.in` `.state` and `.out` files

In addition to normal program inputs, the Leo runtime gives developers access to register and state variables.
These state variables are loaded with record and merkle leaf state information.

:::note
To learn more about runtime files checkout the Leo runtime [**Model**](../programming_model/00_model.md#in-and-out-files).
:::