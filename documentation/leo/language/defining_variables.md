---
hide_title: true
sidebar_label: Defining Variables
---

# Defining Variables

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

    return a + b   // allocated, computed value is enforced to be the sum of both values
}
```
Computations are expressed in terms of arithmetic circuits, in particular rank-1 quadratic constraint systems. Thus computing on an **allocated** variable always results in another **allocated** variable. 

## Mutability
All defined variables in Leo are immutable by default, which means they cannot be changed after assignment.
Local variables can be made mutable with the `mut` keyword. This functionality does not persist across scopes since Leo 
variables are **pass by value**.

```leo
let a = 0u32;
//a = 1 <- Will fail

let mut b = 0u32;
b = 1; // <- Ok
```
