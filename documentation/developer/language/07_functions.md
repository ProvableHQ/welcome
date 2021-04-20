---
id: functions
title: Functions
---

### Basic Syntax
Leo supports named function definitions that can contain one or more statements. Function names should be lowercase.

```leo
function function_name() {
    let a = 1u32;  // statement
    let b = a + 2; // another statement
}
```

### Arguments
Functions can take one or more arguments. Each function argument must have a name followed by an explicit type.

```leo
function add_one(arg: u32) { // one argument `arg` with type `u32`
    arg += 1;
}

function and(a: bool, b: bool) -> bool { // two arguments `a`, `b` with types `bool`
    return a && b;
}
```
Function arguments are passed by value from the calling function. There are no references in Leo.
```leo
function call(a: u32) {
    a = 0; // the copied value of `a` is set to 0
}

function main() -> u32 {
    let a = 1u32;
    call(a); // the `call` function receives a copy of `a`

    return a; // returns 1
}
```

#### Constant Arguments

Use the `const` keyword to indicate that an argument is a constant value. 
Doing this will constrain the function input to constant values only.

```leo
function one(const value: u32) -> u32 {
    return value + 1;
}

function main() {
    let a = 0u32;

    for i in 0..10 {
        a += one(i);
    }

    console.assert(a == 20u32);
}
```


### Main function inputs
The `main` function is the entry point of a Leo program.

`main` function arguments provide the [inputs](08_inputs.md) to the circuit.
They are allocated private variables in the program's constraint system.

```leo
function main(a: field) {
    let b = a + 1;
}
```


### Return values
Functions can return one or more values. Multiple values are returned as a tuple. Their types are explicitly stated in the function signature.

```leo
function double(f: field) -> field { // one return value with type `field`
    let value = f * 2field;
    return value;
}

function arrays() -> (u32, [u32; 2]) { // two return values 
    return (1, [2, 3]);
}
```

### Calling functions
Functions can be called by their defined name followed by the typed arguments in parentheses `( )`.
```leo
function double(f: field) -> field {
    let value = f * 2field;
    return value;
}

function arrays() -> (u32, [u32; 2]) {
    return (1, [2, 3]);
}

function main() {
    let a = 1field;

    let b = double(a);
    //let b: field = double(a); // explicit type

    let (c, d) = arrays();
    //let (c, d): (u32, [u32; 2]) = arrays(); // explicit types
}
```

### Function Scope
Functions in Leo have their own scope. There are no global variables.
```leo
function foo() -> field {
    // return myGlobal <- not allowed
    return 42field;
}

function main() -> field {
    let myGlobal = 42field;
    return foo();
}
```
