---
id: types
title: Data Types and Values
---

Leo is a **statically typed language**, which means we must know the type of each variable before executing a circuit.

There is no `undefined` or `null` value in Leo. When assigning a new variable, **the type of the value must be explicitly stated**.
The exception to this rule is when a new variable inherits its type from a previous variable.

Variables in Leo are always **passed by value**, which means they are always copied when they are used as function inputs or in assignments.

## Booleans

**Type** = `bool`

**Value** = `true` or `false`

Adding an explicit type for booleans in statements is optional.
```leo
function main() -> bool {
    let a = true; // implict type
    let a: bool = true; // explicit type
    
    return a
}
```


## Numbers
Leo supports **signed integer**, **unsigned integer**, **field**, and **group** number types. 
Leo will not default to a number type. The definition of a number **must** include an explicit type.
After assignment, you can choose to explicitly add the type or let the compiler interpret implicitly.
**Type casting is not yet supported.**

```leo
function main() {
    let a: u32 = 2; // explicit type
    let a = 2u32; // explicit type    
    let b = a - 1; // implicit type
}
```

### Integers
Leo supports several bit lengths for signed and unsigned integers.

**Type**

| Bits | Signed | Unsigned |
|:----:|:------:|:--------:|
|   8  |   i8   |    u8    |
|  16  |   i16  |    u16   |
|  32  |   i32  |    u32   |
|  64  |   i64  |    u64   |
|  128 |  i128  |   u128   |

**Value** = A number containing digits `0...9` and an optional negative prefix `-`

:::info
Higher bit length integers generate more constraints in the circuit, which can slow down computation time.
:::


### Field Values

**Type** = `field`

**Value** = A number containing digits `0...9` and an optional negative prefix `-`

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

**Type** = `group`

**Value**
> (*x*, *y*)group

*x* and *y* are field values.

Leo also supports recovery of group values from a single field value coordinate
* `(x, +)group` for given x and recovery with sign_high.
* `(x, -)group` for given x and recovery with sign_low.
* `(x, _)group` for given x and recovery with inferred y.
* `(+, y)group` for given y and recovery with sign_high.
* `(-, y)group` for given y and recovery with sign_low.
* `(_, y)group` for given y and recovery with inferred x.

Recovery with an inferred value will first try both sign low and sign high recovery.

The group type keyword `group` must be used when specifying a pair of group coordinates since implicit syntax would collide
with normal tuple `(a, b)` values. 

```leo
function main() -> group {
    let a: group = (0, 1)group;
    let a = (0, +)group;
    let b = a + 1;

    let a = (21888242871839275222246405745257275088548364400416034343698204186575808495617, 21888242871839275222246405745257275088548364400416034343698204186575808495617)group; // explicit type
    
    return b
}
```

## Addresses

**Type** = `address`

**Value** = base 58 encoded hex string with prefix `aleo1`

Addresses are defined to enable compiler-optimized routines for parsing and operating over addresses. These semantics will be accompanied by a standard library in a future sprint.

```leo
function main(owner: address) {
    let sender = address(aleo1qnr4dkkvkgfqph0vzc3y6z2eu975wnpz2925ntjccd5cfqxtyu8sta57j8);
    let receiver: address = aleo1qnr4dkkvkgfqph0vzc3y6z2eu975wnpz2925ntjccd5cfqxtyu8sta57j8;
}
```