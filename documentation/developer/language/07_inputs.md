---
id: inputs
title: Leo Inputs
---

Public and private inputs for a Leo program are specified in the `inputs/` directory. 
The syntax for an input file is a limited subset of the Leo program syntax. 

## Sections
A Leo input file is made up of sections. Sections are defined by a section header in brackets `[]` followed by one or 
more explicit type variable definitions. 

## Program Inputs

The `[main]` section header specifies the `main.leo` target file which must have a [`main` function](./06_functions.md#main-function-inputs) with matching input names and types.
The default inputs file is `inputs/package.in`. 

```leo title="inputs/package.in"
[main] // <- section header
a: u32 = 1;
b: u32 = 2;
```

Program inputs can be accessed as main function [arguments](./06_functions.md#arguments).

```leo title="src/main.leo"
function main(a: u32, b: u32) -> u32 {
    let c: u32 = a + b;
    return c
}
```

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

## Runtime Input Registers

In addition to normal program inputs, the Leo runtime gives developers access to input [register](../programming_model/00_model.md#registers) state.
The `[registers]` section header specifies [input registers](../programming_model/00_model.md#input-registers) when placed in the input `.in` file.

## Runtime State Variables

Similar to input registers, runtime [state](../programming_model/00_model.md#state) variables are loaded with record and 
merkle leaf state information that developers can access through the [`.state` file](../programming_model/00_model.md#state-file).

:::info
To learn more about runtime files checkout the Leo runtime [Model](../programming_model/00_model.md#in-and-out-files).
:::

