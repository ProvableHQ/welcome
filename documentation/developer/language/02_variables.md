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

In addition to the above you can create global constants outside of the scopes of functions and circuits.
```leo
const x = 10u32;

function print_x() {
    console.log("x: {}", x); // will print 10
}
```

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
