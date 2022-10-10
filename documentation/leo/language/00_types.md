---
id: types
title: Data Types and Values
---

### Statically Typed
Leo is a **statically typed language**, which means we must know the type of each variable before executing a circuit.

### Explicit Types Required
There is no `undefined` or `null` value in Leo. When assigning a new variable, **the type of the value must be explicitly stated**.
The exception to this rule is when a new variable inherits its type from a previous variable.

### Pass by Value
Variables in Leo are always **passed by value**, which means they are always copied when they are used as function inputs or in assignments.

## Booleans
Leo supports the traditional `true` or `false` boolean values. The explicit `bool` type for booleans in statements is required.

```leo
let b: bool = false;
```

## Integers
Leo supports signed integers `i8`, `i16`, `i32`, `i64`, `i128` 
and unsigned integers `u8`, `u16`, `u32`, `u64`, `u128`; 

```leo
let b: u8 = 1u8;
```

:::info
Higher bit length integers generate more constraints in the circuit, which can slow down computation time.
:::

### A Note on Leo Integers
Leo will not default to an integer type. The definition of a integer **must** include an explicit type.
**Type casting is not yet supported.**

```leo
let a: u8 = 2u8; // explicit type    
let b: u8 = 2; // implicit type
```

## Field Elements

Leo supports a `field` type for native field elements as unsigned numbers up to the modulus length of the field.
```leo
let a: field = 1field; 
let b: field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
```

## Group Elements
The set of affine points on the elliptic curve passed into the Leo compiler forms a group.
Leo supports this set as a primitive data type. 
Group elements are special since their values can be defined from the x-coordinate of a coordinate pair.  
`1group`. The group type keyword `group` must be used when specifying a group coordinate.

```leo
let b: group = 0group; // the zero of the group

let a: group = 1group; // the group generator

let c: group = 2group; // 2 * the group generator
```

## Scalar Elements
Leo supports the `scalar` type for field elements in the scalar field.
```leo
let a: scalar = 1scalar;
```

## Addresses

Addresses are defined to enable compiler-optimized routines for parsing and operating over addresses. 
These semantics will be accompanied by a standard library in a future sprint.

```leo
function main(owner: address) {
    let receiver: address = aleo1ezamst4pjgj9zfxqq0fwfj8a4cjuqndmasgata3hggzqygggnyfq6kmyd4;
}
```
