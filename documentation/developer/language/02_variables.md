---
id: variables
title: Defining Variables
---

Leo supports `let` and `const` keywords for variable definition.

```let``` defines an **allocated** program variable.

```const``` defines a **constant** program variable.

**allocated** variables define private variables in the constraint system. Their value is constrained in the circuit on initialization.

**constant** variables do not define a variable in the constraint system. Their value is constrained in the circuit on computation with an **allocated** variable. 
**constant** variables cannot be mutable. They have the same functionality as `const` variables in other languages.
```leo
function add_one() -> u8 {
    let a = 0u8;   // allocated, value enforced on this line
    const b = 1u8; // constant, value not enforced yet

    return a + b;   // allocated, computed value is enforced to be the sum of both values
}
```
Computations are expressed in terms of arithmetic R1CS circuits. Thus computing on an **allocated** variable always results in another **allocated** variable. 

## Mutability

All `const` variables in Leo are immutable - they cannot be changed after assignment.
All `let` variables in Leo are mutable - they can be changed after assignment.
Mutable functionality does not persist across scopes since Leo variables are **pass by value**.

```leo
const a: u32 = 0;
//a = 1 <- Will fail

let b: u32 = 0;
b = 1; // <- Ok
```

## Global Constants

Leo allows defining global constants in the main scope of a program. Syntax for these definitions is the same as for
constants inside the function:

```leo
const MAGIC_NUMBER: u8 = 42;

function main() -> u8 {
    // here you can access these variables
    return MAGIC_NUMBER;
}

function some_other_func() {
    // constants are accessible everywhere
    let num = MAGIC_NUMBER;
}
```

:::info
Global constants only exist in the scope of the file where they are defined. Import of these constants is not allowed.
:::

Constants can also be used in the other constant definitions:

```leo
const MAGIC_NUMBER : u8 = 42;
const MAGIC_PLUS_TWO : u8 = MAGIC_NUMBER + 2;
```
