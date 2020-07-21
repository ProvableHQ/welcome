---
title: Defining Variables
sidebar_label: Defining Variables
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

    return a + b   // allocated, computed value is enforced to be the sum of both values
}
```
Computations are expressed in terms of arithmetic circuits, in particular rank-1 quadratic constraint systems. Thus computing on an **allocated** variable always results in another **allocated** variable. 

## Mutability
* All defined variables in Leo are immutable by default.
* Variables can be made mutable with the `mut` keyword.

```leo
let a = 0u32;
//a = 1 <- Will fail

let mut b = 0u32;
b = 1; // <- Ok
```

## Booleans
* Keywords: `true` and `false`
* Explicit type is optional in statements.
```leo
function main() -> bool {
    let a = true; // implict type
    let a: bool = true; // explicit type
    
    return a
}
```

## Numbers
* The definition of a number **must** include an explicit type.
* After assignment, you can choose to explicitly add the type or let the compiler interpret implicitly.
* Type casting is not yet supported.

### Integers
Supported unsigned integer types: `u8`, `u16`, `u32`, `u64`, `u128`

Supported signed integer types: `i8`, `i16`, `i32`, `i64`, `i128`
```leo
function main() {
    let a: u32 = 2; // explicit type
    let a = 2u32; // explicit type    
    let b = a - 1; // implicit type
}
```

### Field Values

Leo supports a `field` type for native field elements as unsigned numbers up to the modulus length of the field.

```leo
function main() -> field {
    let a: = field = 1; // explicit type
    let a = 1field; // explicit type
    let b = a + 1; // implicit type

    let a: field = 21888242871839275222246405745257275088548364400416034343698204186575808495617; // explicit type

    return b
}
```

### Group Elements
The set of affine points on the elliptic curve passed into the Leo compiler forms a group.
Leo supports this set as a primitive data type.

```leo
function main() -> group {
    let a: group = 1; // explicit type
    let a = 0group; // explicit type
    let b = a + 1; // implicit type

    let a = (21888242871839275222246405745257275088548364400416034343698204186575808495617, 21888242871839275222246405745257275088548364400416034343698204186575808495617)group; // explicit type
    
    return b
}
```

## Addresses

Addresses are defined to enable compiler-optimized routines for parsing and operating over addresses. These semantics will be accompanied by a standard library in a future sprint.

```leo
function main(owner: address) {
    let sender = address(aleo1qnr4dkkvkgfqph0vzc3y6z2eu975wnpz2925ntjccd5cfqxtyu8sta57j8);
    let receiver: address = aleo1qnr4dkkvkgfqph0vzc3y6z2eu975wnpz2925ntjccd5cfqxtyu8sta57j8;
    assert_eq!(owner, sender);
    assert_eq!(sender, receiver);
}
```

## Arrays
Leo supports static arrays with fixed size.

### Array type
The array type specifies the type and number of elements being stored.

`type[size]`

### Array expression
Create an array with brackets `[]`.

`[element1, element2]`

### Array initializer
Create an array of the same element with size `size`.

`[element; size]` 

### Examples

```leo
function main() -> u32[2] {
    // initialize an integer array with integer values
    let mut a: u32[3] = [1, 2, 3];

    // set a mutable member to a value
    a[2] = 4;

    // initialize an array of 4 values all equal to 42
    let b = [42u8; 4];

    // initialize an array of 5 values copying all elements of b using a spread
    let c = [1, ...b];

    // initialize an array copying a slice from `c`
    let d = c[1..3];

    // initialize a field array
    let e = [5field; 2];

    // initialize a boolean array
    let f = [true, false || true, true];

    return d
}
```

### Access Operators

Leo supports multiple ways to access an array's values.

#### Index
`[index]`

```leo
let arr: u32[4] = [1, 2, 3, 4];

let first = arr[0]; // access the first element
```

#### Slice

`from_index..to_index`

```leo
let arr: u32[4] = [0, 1, 2, 3];

let first_two = arr[..1]; // access the first two elements of the array

let middle_two = arr[1..2]; // access the middle two elements of the array

let last_two = arr[2..]; // access the last two elements of the array
```

#### Spread
Copies the elements of one array into another. Element types must match.

`...`

```leo
let arr: u32[4] = [0, 1, 2, 3];

let arr_with_4: u32[5] = [...arr, 4];
```

### Multidimensional Arrays

Leo supports multidimensional arrays.

```leo
function main() -> u32[3][2] {
    let m = [[0u32, 0u32], [0u32, 0u32]];

    let m: u32[3][2] = [[0; 3]; 2];

    return m
}
```
