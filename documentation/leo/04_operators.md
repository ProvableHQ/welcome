---
id: operators
title: Leo Operators Reference
sidebar_label: Operators
---

The following lists show the standard and cryptographic operators supported by Leo.
The Leo operators compile down to [Aleo instructions opcodes](../aleo/04_opcodes.md) executable by the Aleo Virtual Machine (AVM).

## Table of Standard Operators
| Name                        | Description                         |
|-----------------------------|:------------------------------------|
| [abs](#abs)                 | Absolute value operation            |
| [abs_wrapped](#abs_wrapped) | Wrapping absolute value operation   |
| [add](#add)                 | Addition operation                  |
| [add_wrapped](#add_wrapped) | Wrapping addition operation         |
| [and](#and)                 | AND operation                       |
| [assert](#assert)           | Assert boolean true                 |
| [assert_eq](#assert_eq)     | Assert equality                     |
| [assert_neq](#assert_neq)   | Assert non-equality                 |
| [div](#div)                 | Division operation                  |
| [div_wrapped](#div_wrapped) | Wrapping division operation         |
| [double](#double)           | Double operation                    |
| [group::GEN](#groupgen)     | Group generator                     |
| [gt](#gt)                   | Greater than comparison             |
| [gte](#gte)                 | Greater than or equal to comparison |
| [inv](#inv)                 | Multiplicative inverse operation    |
| [eq](#eq)                   | Equality comparison                 |
| [neq](#neq)                 | Not equal comparison                |
| [lt](#lt)                   | Less than comparison                |
| [lte](#lte)                 | Less than or equal to comparison    |
| [mod](#mod)                 | Arithmetic modulo operation         |
| [mul](#mul)                 | Multiplication operation            |
| [mul_wrapped](#mul_wrapped) | Wrapping multiplication operation   |
| [nand](#nand)               | `Boolean` NAND operation            |
| [neg](#neg)                 | Additive inverse operation          |
| [nor](#nor)                 | `Boolean` NOR operation             |
| [not](#not)                 | NOT operation                       |
| [or](#or)                   | OR Operation                        |
| [pow](#pow)                 | Exponentiation operation            |
| [pow_wrapped](#pow_wrapped) | Wrapping exponentiation operation   |
| [rem](#rem)                 | Remainder operation                 |
| [rem_wrapped](#rem_wrapped) | Wrapping remainder operation        |
| [shl](#shl)                 | Shift left operation                |
| [shl_wrapped](#shl_wrapped) | Wrapping shift left operation       |
| [shr](#shr)                 | Shift right operation               |
| [shr_wrapped](#shr_wrapped) | Wrapping shift right operation      |
| [square_root](#square_root) | Square root operation               |
| [square](#square)           | Square operation                    |
| [sub](#sub)                 | Subtraction operation               |
| [sub_wrapped](#sub_wrapped) | Wrapping subtraction operation      |
| [ternary](#ternary)         | Ternary select operation            |
| [xor](#xor)                 | XOR operation                       |

## Table of Cryptographic Operators
| Name                                                                    | Description                       |
|-------------------------------------------------------------------------|:----------------------------------|
| [ChaCha::rand_destination](#chacharand_destination)                     | ChaCha RNG                        |
| [BHP256::commit_to_destination](#bhp256commit_to_destination)           | 256-bit input BHP commitment      |
| [BHP512::commit_to_destination](#bhp512commit_to_destination)           | 512-bit input BHP commitment      |
| [BHP768::commit_to_destination](#bhp768commit_to_destination)           | 768-bit input BHP commitment      |
| [BHP1024::commit_to_destination](#bhp1024commit_to_destination)         | 1024-bit input BHP commitment     |
| [Pedersen64::commit_to_destination](#pedersen64commit_to_destination)   | 64-bit input Pedersen commitment  |
| [Pedersen128::commit_to_destination](#pedersen128commit_to_destination) | 128-bit input Pedersen commitment |
| [BHP256::hash_to_destination](#bhp256hash_to_destination)               | 256-bit input BHP hash            |
| [BHP512::hash_to_destination](#bhp512hash_to_destination)               | 512-bit input BHP hash            |
| [BHP768::hash_to_destination](#bhp768hash_to_destination)               | 768-bit input BHP hash            |
| [BHP1024::hash_to_destination](#bhp1024hash_to_destination)             | 1024-bit input BHP hash           |
| [Keccak256::hash_to_destination](#keccak256hash_to_destination)         | 256-bit input Keccak hash         |
| [Keccak384::hash_to_destination](#keccak384hash_to_destination)         | 384-bit input Keccak hash         |
| [Keccak512::Hash_to_destination](#keccak512hash_to_destination)         | 512-bit input Keccak hash         |
| [Pedersen64::hash_to_destination](#pedersen64hash_to_destination)       | 64-bit input Pedersen hash        |
| [Pedersen128::hash_to_destination](#pedersen128hash_to_destination)     | 128-bit input Pedersen hash       |
| [Poseidon2::hash_to_destination](#poseidon2hash_to_destination)         | Poseidon hash with input rate 2   |
| [Poseidon4::hash_to_destination](#poseidon4hash_to_destination)         | Poseidon hash with input rate 4   |
| [Poseidon8::hash_to_destination](#poseidon8hash_to_destination)         | Poseidon hash with input rate 8   |
| [SHA3_256::hash_to_destination](#sha3_256hash_to_destination)           | 256-bit input SHA3 hash           |
| [SHA3_384::hash_to_destination](#sha3_384hash_to_destination)           | 384-bit input SHA3 hash           |
| [SHA3_512::hash_to_destination](#sha3_512hash_to_destination)           | 512-bit input SHA3 hash           |
| [signature::verify](#signatureverify)                                   | Verify a signature                |

## Specification

The following is the specification for each operator in the Leo compiler.

### `abs`

```leo
let a: i8 = -1i8;
let b: i8 = a.abs(); // 1i8
```

#### Description

Computes the absolute value of the input, checking for overflow, storing the result in the destination.

For integer types, a constraint is added to check for underflow. For cases where wrapping semantics are needed, see the [abs_wrapped](#abs_wrapped) instruction. This underflow happens when the input is the minimum value of a signed integer type. For example, `abs -128i8` would result in underflow, since `128` cannot be represented as an `i8`.

#### Supported Types

| Input  | Destination |
|--------|:------------|
| `I8`   | `I8`        |
| `I16`  | `I16`       |
| `I32`  | `I32`       |
| `I64`  | `I64`       |
| `I128` | `I128`      |

[Back to Top](#table-of-standard-operators)
***

### `abs_wrapped`

```leo
let a: i8 = -128i8;
let b: i8 = a.abs_wrapped(); // -128i8
```

#### Description

Compute the absolute value of the input, wrapping around at the boundary of the type, and storing the result in the destination.

#### Supported Types

| Input  | Destination |
|--------|:------------|
| `I8`   | `I8`        |
| `I16`  | `I16`       |
| `I32`  | `I32`       |
| `I64`  | `I64`       |
| `I128` | `I128`      |

[Back to Top](#table-of-standard-operators)
***

### `add`

```leo
let a: u8 = 1u8;
let b: u8 = a + 1u8; // 2u8
let c: u8 = b.add(1u8); // 3u8
```

#### Description

Adds `first` with `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow. For cases where wrapping semantics are needed for integer types, see the [add_wrapped](#add_wrapped) instruction.

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Field`     |
| `Group`  | `Group`  | `Group`     |
| `I8`     | `I8`     | `I8`        |
| `I16`    | `I16`    | `I16`       |
| `I32`    | `I32`    | `I32`       |
| `I64`    | `I64`    | `I64`       |
| `I128`   | `I128`   | `I128`      |
| `U8`     | `U8`     | `U8`        |
| `U16`    | `U16`    | `U16`       |
| `U32`    | `U32`    | `U32`       |
| `U64`    | `U64`    | `U64`       |
| `U128`   | `U128`   | `U128`      |
| `Scalar` | `Scalar` | `Scalar`    |

[Back to Top](#table-of-standard-operators)
***

### `add_wrapped`

```leo
let a: u8 = 255u8;
let b: u8 = a.add_wrapped(1u8); // 0u8
```

#### Description

Adds `first` with `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Supported Types

| First  | Second | Destination |
|--------|--------|:------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `and`

```leo
let a: i8 = 1i8 & 1i8; // 1i8
let b: i8 = 1i8.and(2i8); // 0i8
```


#### Description

Performs an AND operation on integer (bitwise) or boolean `first` and `second`,
storing the outcome in `destination`.

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|:------------|
| `Boolean` | `Boolean` | `Boolean`   |
| `I8`      | `I8`      | `I8`        |
| `I16`     | `I16`     | `I16`       |
| `I32`     | `I32`     | `I32`       |
| `I64`     | `I64`     | `I64`       |
| `I128`    | `I128`    | `I128`      |
| `U8`      | `U8`      | `U8`        |
| `U16`     | `U16`     | `U16`       |
| `U32`     | `U32`     | `U32`       |
| `U64`     | `U64`     | `U64`       |
| `U128`    | `U128`    | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `assert`

```leo
let a: bool = true;
let b: bool = false;

assert(a); // will not halt
assert(b); // program halts
```

#### Description

Checks whether the expression evaluates to a `true` boolean value, halting if evaluates to `false`.

#### Supported Types

| Expression |
|------------|
| `Boolean`  |

[Back to Top](#table-of-standard-operators)
***

### `assert_eq`

```leo
let a: u8 = 1u8;
let b: u8 = 2u8;

assert_eq(a, a); // will not halt
assert_eq(a, b); // program halts
```

#### Description

Checks whether `first` and `second` are equal, halting if they are not equal.

#### Supported Types

| First       | Second      |
|-------------|-------------|
| `Address`   | `Address`   |
| `Boolean`   | `Boolean`   |
| `Field`     | `Field`     |
| `Group`     | `Group`     |
| `I8`        | `I8`        |
| `I16`       | `I16`       |
| `I32`       | `I32`       |
| `I64`       | `I64`       |
| `I128`      | `I128`      |
| `U8`        | `U8`        |
| `U16`       | `U16`       |
| `U32`       | `U32`       |
| `U64`       | `U64`       |
| `U128`      | `U128`      |
| `Scalar`    | `Scalar`    |
| `Signature` | `Signature` |
| `Struct`    | `Struct`    |
| `Record`    | `Record`    |

[Back to Top](#table-of-standard-operators)
***

### `assert_neq`

```leo
let a: u8 = 1u8;
let b: u8 = 2u8;

assert_neq(a, b); // will not halt
assert_neq(a, a); // program halts
```

#### Description

Checks whether `first` and `second` are not equal, halting if they are equal.

#### Supported Types

| First       | Second      |
|-------------|-------------|
| `Address`   | `Address`   |
| `Boolean`   | `Boolean`   |
| `Field`     | `Field`     |
| `Group`     | `Group`     |
| `I8`        | `I8`        |
| `I16`       | `I16`       |
| `I32`       | `I32`       |
| `I64`       | `I64`       |
| `I128`      | `I128`      |
| `U8`        | `U8`        |
| `U16`       | `U16`       |
| `U32`       | `U32`       |
| `U64`       | `U64`       |
| `U128`      | `U128`      |
| `Scalar`    | `Scalar`    |
| `Signature` | `Signature` |
| `Struct`    | `Struct`    |
| `Record`    | `Record`    |

[Back to Top](#table-of-standard-operators)
***

### `block.height`

```leo
transition matches(height: u32) {
    return then finalize(height);
} 
finalize matches(height: u32) {
    assert_eq(height, block.height);
}
```

#### Description

The `block.height` operator is used to fetch the latest block height in a Leo program. It represents the number of 
blocks in the chain. In the above example, `block.height` is used in a `finalize` context to fetch the latest block 
height in a program.

#### Note:
* The `block.height` operator can only be used in a `finalize` context. Using it outside a `finalize` context will result in a compilation error.
* The `block.height` operator doesn't take any parameters.

[Back to Top](#table-of-standard-operators)
***

### `div`

```leo
let a: u8 = 4u8;
let b: u8 = a / 2u8; // 2u8
let c: u8 = b.div(2u8); // 1u8
```
#### Description

Performs division of the first operand by the second, storing the result in the destination. The operation halts if division by zero is attempted.

For integer types, this operation performs truncated division. Truncated division rounds towards zero, regardless of the sign of the operands. This means it cuts off any digits after the decimal, leaving the largest whole number less than or equal to the result.

For example:

1. `7 / 3` yields `2`, not `2.3333`.
2. `-7 / 3` yields `-2`, not `-2.3333`.

The operation halts if there is an underflow. Underflow occurs when dividing the minimum value of a signed integer type by -1. For example, `-128i8 / -1i8` would result in underflow, since 128 cannot be represented as an `i8`.

For field types, division `a / b` is well-defined for any field values `a` and `b` except when `b = 0field`.

For cases where wrapping semantics are needed for integer types, see the [div_wrapped](#div_wrapped) instruction.

#### Supported Types

| First   | Second  | Destination |
|---------|---------|:------------|
| `Field` | `Field` | `Field`     |
| `I8`    | `I8`    | `I8`        |
| `I16`   | `I16`   | `I16`       |
| `I32`   | `I32`   | `I32`       |
| `I64`   | `I64`   | `I64`       |
| `I128`  | `I128`  | `I128`      |
| `U8`    | `U8`    | `U8`        |
| `U16`   | `U16`   | `U16`       |
| `U32`   | `U32`   | `U32`       |
| `U64`   | `U64`   | `U64`       |
| `U128`  | `U128`  | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `div_wrapped`

```leo
let a: i8 = -128i8;
let b: i8 = a.div_wrapped(-1i8); // -128i8
```

#### Description

Divides `first` by `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Supported Types

| First  | Second | Destination |
|--------|--------|:------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `double`

```leo
let a: group = (0, 4)group;
let b: group = a.double();
```

#### Description

Doubles the input, storing the outcome in `destination`.


#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |
| `Group` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `gt`

```leo
let a: bool = 2u8 > 1u8; // true
let b: bool = 1u8.gt(1u8); // false
```

#### Description

Checks if `first` is greater than `second`, storing the result in `destination`.

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Boolean`   |
| `I8`     | `I8`     | `Boolean`   |
| `I16`    | `I16`    | `Boolean`   |
| `I32`    | `I32`    | `Boolean`   |
| `I64`    | `I64`    | `Boolean`   |
| `I128`   | `I128`   | `Boolean`   |
| `U8`     | `U8`     | `Boolean`   |
| `U16`    | `U16`    | `Boolean`   |
| `U32`    | `U32`    | `Boolean`   |
| `U64`    | `U64`    | `Boolean`   |
| `U128`   | `U128`   | `Boolean`   |
| `Scalar` | `Scalar` | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `gte`

```leo
let a: bool = 2u8 >= 1u8; // true
let b: bool = 1u8.gte(1u8); // true
```

#### Description

Checks if `first` is greater than or equal to `second`, storing the result in `destination`.

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Boolean`   |
| `I8`     | `I8`     | `Boolean`   |
| `I16`    | `I16`    | `Boolean`   |
| `I32`    | `I32`    | `Boolean`   |
| `I64`    | `I64`    | `Boolean`   |
| `I128`   | `I128`   | `Boolean`   |
| `U8`     | `U8`     | `Boolean`   |
| `U16`    | `U16`    | `Boolean`   |
| `U32`    | `U32`    | `Boolean`   |
| `U64`    | `U64`    | `Boolean`   |
| `U128`   | `U128`   | `Boolean`   |
| `Scalar` | `Scalar` | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `inv`

```leo
let a: field = 1field.inv();
```

#### Description

Computes the multiplicative inverse of the input, storing the outcome in `destination`.

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `eq`

```leo
let a: bool = 1u8 == 1u8; // true
let b: bool = 1u8.eq(2u8); // false
```

#### Description

Compares `first` and `second`, storing the result in `destination`.

#### Supported Types

| First       | Second      | Destination |
|-------------|-------------|-------------|
| `Address`   | `Address`   | `Boolean`   |
| `Boolean`   | `Boolean`   | `Boolean`   |
| `Field`     | `Field`     | `Boolean`   |
| `Group`     | `Group`     | `Boolean`   |
| `I8`        | `I8`        | `Boolean`   |
| `I16`       | `I16`       | `Boolean`   |
| `I32`       | `I32`       | `Boolean`   |
| `I64`       | `I64`       | `Boolean`   |
| `I128`      | `I128`      | `Boolean`   |
| `U8`        | `U8`        | `Boolean`   |
| `U16`       | `U16`       | `Boolean`   |
| `U32`       | `U32`       | `Boolean`   |
| `U64`       | `U64`       | `Boolean`   |
| `U128`      | `U128`      | `Boolean`   |
| `Scalar`    | `Scalar`    | `Boolean`   |
| `Signature` | `Signature` | `Boolean`   |
| `Struct`    | `Struct`    | `Boolean`   |
| `Record`    | `Record`    | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `neq`

```leo
let a: bool = 1u8 != 1u8; // false
let b: bool = 1u8.neq(2u8); // true
```

#### Description

Returns true if `first` is not equal to `second`, storing the result in `destination`.

#### Supported Types

| First       | Second      | Destination |
|-------------|-------------|-------------|
| `Address`   | `Address`   | `Boolean`   |
| `Boolean`   | `Boolean`   | `Boolean`   |
| `Field`     | `Field`     | `Boolean`   |
| `Group`     | `Group`     | `Boolean`   |
| `I8`        | `I8`        | `Boolean`   |
| `I16`       | `I16`       | `Boolean`   |
| `I32`       | `I32`       | `Boolean`   |
| `I64`       | `I64`       | `Boolean`   |
| `I128`      | `I128`      | `Boolean`   |
| `U8`        | `U8`        | `Boolean`   |
| `U16`       | `U16`       | `Boolean`   |
| `U32`       | `U32`       | `Boolean`   |
| `U64`       | `U64`       | `Boolean`   |
| `U128`      | `U128`      | `Boolean`   |
| `Scalar`    | `Scalar`    | `Boolean`   |
| `Signature` | `Signature` | `Boolean`   |
| `Struct`    | `Struct`    | `Boolean`   |
| `Record`    | `Record`    | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `lt`

```leo
let a: bool = 1u8 < 2u8; // true
let b: bool = 1u8.lt(1u8); // false
```

#### Description

Checks if `first` is less than `second`, storing the outcome in `destination`.

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Boolean`   |
| `I8`     | `I8`     | `Boolean`   |
| `I16`    | `I16`    | `Boolean`   |
| `I32`    | `I32`    | `Boolean`   |
| `I64`    | `I64`    | `Boolean`   |
| `I128`   | `I128`   | `Boolean`   |
| `U8`     | `U8`     | `Boolean`   |
| `U16`    | `U16`    | `Boolean`   |
| `U32`    | `U32`    | `Boolean`   |
| `U64`    | `U64`    | `Boolean`   |
| `U128`   | `U128`   | `Boolean`   |
| `Scalar` | `Scalar` | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `lte`

```leo
let a: bool = 1u8 <= 2u8; // true
let b: bool = 1u8.lte(1u8); // true
```

#### Description

Checks if `first` is less than or equal to `second`, storing the outcome in `destination`.

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Boolean`   |
| `I8`     | `I8`     | `Boolean`   |
| `I16`    | `I16`    | `Boolean`   |
| `I32`    | `I32`    | `Boolean`   |
| `I64`    | `I64`    | `Boolean`   |
| `I128`   | `I128`   | `Boolean`   |
| `U8`     | `U8`     | `Boolean`   |
| `U16`    | `U16`    | `Boolean`   |
| `U32`    | `U32`    | `Boolean`   |
| `U64`    | `U64`    | `Boolean`   |
| `U128`   | `U128`   | `Boolean`   |
| `Scalar` | `Scalar` | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `mod`

```leo
let a: u8 = 3u8.mod(2u8); // 1u8
```

#### Description

Takes the modulus of `first` with respect to `second`, storing the outcome in `destination`. Halts if `second` is zero.

The semantics of this operation are consistent with the mathematical definition of modulo operation.

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `mul`

```leo
let a: u8 = 2u8 * 2u8; // 4u8
let b: u8 = a.mul(2u8); // 8u8
```

#### Description

Multiplies `first` with `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow/underflow. For cases where wrapping semantics are needed for integer types, see the [mul_wrapped](#mul_wrapped) instruction.

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Field`     |
| `Group`  | `Scalar` | `Group`     |
| `Scalar` | `Group`  | `Group`     |
| `I8`     | `I8`     | `I8`        |
| `I16`    | `I16`    | `I16`       |
| `I32`    | `I32`    | `I32`       |
| `I64`    | `I64`    | `I64`       |
| `I128`   | `I128`   | `I128`      |
| `U8`     | `U8`     | `U8`        |
| `U16`    | `U16`    | `U16`       |
| `U32`    | `U32`    | `U32`       |
| `U64`    | `U64`    | `U64`       |
| `U128`   | `U128`   | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `mul_wrapped`

```leo
let a: u8 = 128u8.mul_wrapped(2u8); // 0u8
```

#### Description

Multiplies `first` with `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `nand`

```leo
let a: bool = true.nand(false); // true
```

#### Description

Returns false only if `first` and `second` are true, storing the outcome in `destination`.

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `neg`

```leo
let a: i8 = -1i8.neg(); // 1i8
```

#### Description

Negates `first`, storing the outcome in `destination`.

For signed integer types, calling `neg` on the minimum value is an invalid operation. For example, the input `-128i8` would not be valid since `128` cannot be represented as an `i8`.

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |
| `Group` | `Group`     |
| `I8`    | `I8`        |
| `I16`   | `I16`       |
| `I32`   | `I32`       |
| `I64`   | `I64`       |
| `I128`  | `I128`      |

[Back to Top](#table-of-standard-operators)
***

### `nor`

```leo
let a: bool = false.nor(false); // true
```

#### Description

Returns true when neither `first` nor `second` is true, storing the outcome in `destination`.

#### Supported Type

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `not`

```leo
let a: bool = true.not(); // false
```

#### Description

Perform a NOT operation on an integer (bitwise) or boolean input, storing the outcome in `destination`.

#### Supported Types

| Input     | Destination |
|-----------|-------------|
| `Boolean` | `Boolean`   |
| `I8`      | `I8`        |
| `I16`     | `I16`       |
| `I32`     | `I32`       |
| `I64`     | `I64`       |
| `I128`    | `I128`      |
| `U8`      | `U8`        |
| `U16`     | `U16`       |
| `U32`     | `U32`       |
| `U64`     | `U64`       |
| `U128`    | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### or

```leo
let a: bool = true || false; // true
let b: bool = false.or(false); // false
```

#### Description

Performs an OR operation on integer (bitwise) or boolean `first` and `second`, storing the outcome in `destination`.

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean`   |
| `I8`      | `I8`      | `I8`        |
| `I16`     | `I16`     | `I16`       |
| `I32`     | `I32`     | `I32`       |
| `I64`     | `I64`     | `I64`       |
| `I128`    | `I128`    | `I128`      |
| `U8`      | `U8`      | `U8`        |
| `U16`     | `U16`     | `U16`       |
| `U32`     | `U32`     | `U32`       |
| `U64`     | `U64`     | `U64`       |
| `U128`    | `U128`    | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `pow`

```leo
let a: u8 = 2u8 ** 2u8; // 4u8
let b: u8 = a.pow(2u8); // 16u8
```

#### Description

Raises `first` to the power of `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow/underflow. For cases where wrapping semantics are needed for integer types, see the [pow_wrapped](#pow_wrapped) instruction.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First   | Second      | Destination |
|---------|-------------|-------------|
| `Field` | `Field`     | `Field`     |
| `I8`    | `Magnitude` | `I8`        |
| `I16`   | `Magnitude` | `I16`       |
| `I32`   | `Magnitude` | `I32`       |
| `I64`   | `Magnitude` | `I64`       |
| `I128`  | `Magnitude` | `I128`      |
| `U8`    | `Magnitude` | `U8`        |
| `U16`   | `Magnitude` | `U16`       |
| `U32`   | `Magnitude` | `U32`       |
| `U64`   | `Magnitude` | `U64`       |
| `U128`  | `Magnitude` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `pow_wrapped`

```leo
let a: u8 = 16u8.pow_wrapped(2u8); // 0u8
```

#### Description

Raises `first` to the power of `second`, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

[Back to Top](#table-of-standard-operators)
***


### `rem`

```leo
let a: u8 = 3u8 % 2u8; // 1u8
let b: u8 = 4u8.rem(2u8); // 0u8
```

#### Description

Computes the truncated remainder of `first` divided by `second`, storing the outcome in `destination`. Halts on division by zero.


A constraint is added to check for underflow.  This underflow happens when the associated division operation, [div](#div), underflows.

For cases where wrapping semantics are needed for integer types, see the [rem_wrapped](#rem_wrapped) instruction.

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `rem_wrapped`

```leo
let a: i8 = -128i8;
let b: i8 = a.rem_wrapped(-1i8); // 0i8
```

#### Description
Computes the truncated remainder of `first` divided by `second`, wrapping around at the boundary of the type, and storing the outcome in destination.

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `signature::verify`

```leo
transition verify_field(s: signature, a: address, v: field) {
    let first: bool = signature::verify(s, a, v);
    let second: bool = s.verify(a, v);
    assert_eq(first, second);
}
```

#### Description

Verifies that the signature `first` was signed by the address `second` with respect to the field `third`, storing the outcome in `destination`.

#### Supported Types

| First       | Second    | Third     | Destination |
|-------------|-----------|-----------|-------------|
| `Signature` | `Address` | `Message` | `Boolean`   |

[Back to Top](#table-of-standard-operators)
***

### `shl`

```leo
let a: u8 = 1u8 << 1u8; // 2u8
let b: u8 = a.shl(1u8); // 4u8
```

#### Description

Shifts `first` left by `second` bits, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `shl_wrapped`

```leo
let a: u8 = 128u8.shl_wrapped(1u8); // 0u8
```

#### Description

Shifts `first` left by `second` bits, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `shr`

```leo
let a: u8 = 4u8 >> 1u8; // 2u8
let b: u8 = a.shr(1u8); // 1u8
```

#### Description

Shifts `first` right by `second` bits, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `shr_wrapped`

```leo
let a: u8 = 128u8.shr_wrapped(7u8); // 1u8
```

#### Description

Shifts `first` right by `second` bits, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `square`

```leo
let a: field = 1field.square(); // 1field
```

#### Description

Squares the input, storing the outcome in `destination`.

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `square_root`

```leo
let a: field = 1field.square_root(); // 1field
```

#### Description

Computes the square root of the input, storing the outcome in `destination`.

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |

[Back to Top](#table-of-standard-operators)
***


### `sub`

```leo
let a: u8 = 2u8 - 1u8; // 1u8
let b: u8 = a.sub(1u8); // 0u8
```

#### Description

Computes `first - second`, storing the outcome in `destination`.

#### Supported Types

| First   | Second  | Destination |
|---------|---------|-------------|
| `Field` | `Field` | `Field`     |
| `Group` | `Group` | `Group`     |
| `I8`    | `I8`    | `I8`        |
| `I16`   | `I16`   | `I16`       |
| `I32`   | `I32`   | `I32`       |
| `I64`   | `I64`   | `I64`       |
| `I128`  | `I128`  | `I128`      |
| `U8`    | `U8`    | `U8`        |
| `U16`   | `U16`   | `U16`       |
| `U32`   | `U32`   | `U32`       |
| `U64`   | `U64`   | `U64`       |
| `U128`  | `U128`  | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `sub_wrapped`

```leo
let a: u8 = 0u8.sub_wrapped(1u8); // 255u8
```

#### Description

Computes `first - second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `ternary`

```leo
let a: u8 = true ? 1u8 : 2u8; // 1u8
```

#### Description

Selects `first`, if `condition` is true, otherwise selects `second`, storing the result in `destination`.

#### Supported Types

| Condition | First       | Second      | Destination |
|-----------|-------------|-------------|-------------|
| `Boolean` | `Boolean`   | `Boolean`   | `Boolean`   |
| `Boolean` | `Field`     | `Field`     | `Field`     |
| `Boolean` | `Group`     | `Group`     | `Group`     |
| `Boolean` | `I8`        | `I8`        | `I8`        |
| `Boolean` | `I16`       | `I16`       | `I16`       |
| `Boolean` | `I32`       | `I32`       | `I32`       |
| `Boolean` | `I64`       | `I64`       | `I64`       |
| `Boolean` | `I128`      | `I128`      | `I128`      |
| `Boolean` | `U8`        | `U8`        | `U8`        |
| `Boolean` | `U16`       | `U16`       | `U16`       |
| `Boolean` | `U32`       | `U32`       | `U32`       |
| `Boolean` | `U64`       | `U64`       | `U64`       |
| `Boolean` | `U128`      | `U128`      | `U128`      |
| `Boolean` | `Scalar`    | `Scalar`    | `Scalar`    |
| `Boolean` | `Signature` | `Signature` | `Signature` |

[Back to Top](#table-of-standard-operators)
***

### `xor`

```leo
let a: bool = true.xor(false); // true
```

#### Description

Performs a XOR operation on integer (bitwise) or boolean `first` and `second`, storing the outcome in `destination`.

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean`   |
| `I8`      | `I8`      | `I8`        |
| `I16`     | `I16`     | `I16`       |
| `I32`     | `I32`     | `I32`       |
| `I64`     | `I64`     | `I64`       |
| `I128`    | `I128`    | `I128`      |
| `U8`      | `U8`      | `U8`        |
| `U16`     | `U16`     | `U16`       |
| `U32`     | `U32`     | `U32`       |
| `U64`     | `U64`     | `U64`       |
| `U128`    | `U128`    | `U128`      |

[Back to Top](#table-of-standard-operators)
***

### `group::GEN`

```leo
let g: group = group::GEN; // the group generator
```

#### Description

Returns the generator of the algebraic group that the `group` type consists of.

The compilation of Leo is based on an elliptic curve, whose points form a group,
and on a specified point on that curve, which generarates a subgroup, whose elements form the type `group`.

This is a constant, not a function. Thus, it takes no inputs, and just returns an output.

It is an associated constant, whose name is `GEN` and whose associated type is `group`.

#### Supported Types

| Destination |
|-------------|
| `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `ChaCha::rand_DESTINATION`

```leo
let result: address = ChaCha::rand_address();
let result: bool = ChaCha::rand_bool();
let result: field = ChaCha::rand_field();
let result: group = ChaCha::rand_group();
let result: i8 = ChaCha::rand_i8();
let result: i16 = ChaCha::rand_i16();
let result: i32 = ChaCha::rand_i32();
let result: i64 = ChaCha::rand_i64();
let result: i128 = ChaCha::rand_i128();
let result: u8 = ChaCha::rand_u8();
let result: u16 = ChaCha::rand_u16();
let result: u32 = ChaCha::rand_u32();
let result: u64 = ChaCha::rand_u64();
let result: u128 = ChaCha::rand_u128();
let result: scalar = ChaCha::rand_scalar();
```

#### Description

Returns a random value with the destination type.
**Must be used in a finalize context**

#### Supported Types

| Destination |
|-------------|
| `Address`   |
| `Boolean`   |
| `Field`     |
| `Group`     |
| `I8`        |
| `I16`       |
| `I32`       |
| `I64`       |
| `I128`      |
| `U8`        |
| `U16`       |
| `U32`       |
| `U64`       |
| `U128`      |
| `Scalar`    |


### `BHP256::commit_to_DESTINATION`

```leo
let salt: scalar = ChaCha::rand_scalar();
let a: address = BHP256::commit_to_address(1u8, salt);
let b: field = BHP256::commit_to_field(2i64, salt);
let c: group = BHP256::commit_to_group(1field, salt);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 256-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment can be an `Address`, `Field` or, `Group` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Address` | `Scalar` | `Address`, `Field`, `Group` |
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `Field`   | `Scalar` | `Address`, `Field`, `Group` |
| `Group`   | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `I128`    | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U128`    | `Scalar` | `Address`, `Field`, `Group` |
| `Scalar`  | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |

[Back to Top](#table-of-standard-operators)
***

### `BHP512::commit_to_DESTINATION`

```leo
let salt: scalar = ChaCha::rand_scalar();
let a: address = BHP512::commit_to_address(1u8, salt);
let b: field = BHP512::commit_to_field(2i64, salt);
let c: group = BHP512::commit_to_group(1field, salt);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 512-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Address` | `Scalar` | `Address`, `Field`, `Group` |
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `Field`   | `Scalar` | `Address`, `Field`, `Group` |
| `Group`   | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `I128`    | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U128`    | `Scalar` | `Address`, `Field`, `Group` |
| `Scalar`  | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |

[Back to Top](#table-of-standard-operators)
***

### `BHP768::commit_to_DESTINATION`

```leo
let salt: scalar = ChaCha::rand_scalar();
let a: address = BHP768::commit_to_address(1u8, salt);
let b: field = BHP768::commit_to_field(2i64, salt);
let c: group = BHP768::commit_to_group(1field, salt);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 768-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Address` | `Scalar` | `Address`, `Field`, `Group` |
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `Field`   | `Scalar` | `Address`, `Field`, `Group` |
| `Group`   | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `I128`    | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U128`    | `Scalar` | `Address`, `Field`, `Group` |
| `Scalar`  | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |

[Back to Top](#table-of-standard-operators)
***

### `BHP1024::commit_to_DESTINATION`

```leo
let salt: scalar = ChaCha::rand_scalar();
let a: address = BHP1024::commit_to_address(1u8, salt);
let b: field = BHP1024::commit_to_field(2i64, salt);
let c: group = BHP1024::commit_to_group(1field, salt);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 1024-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Address` | `Scalar` | `Address`, `Field`, `Group` |
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `Field`   | `Scalar` | `Address`, `Field`, `Group` |
| `Group`   | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `I128`    | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U128`    | `Scalar` | `Address`, `Field`, `Group` |
| `Scalar`  | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen64::commit_to_DESTINATION`

```leo
let salt: scalar = ChaCha::rand_scalar();
let a: address = Pedersen64::commit_to_address(1u8, salt);
let b: field = Pedersen64::commit_to_field(2i64, salt);
let c: group = Pedersen64::commit_to_group(1field, salt);
```

#### Description

Computes a Pedersen commitment up to a 64-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen128::commit_to_DESTINATION`

```leo
let salt: scalar = ChaCha::rand_scalar();
let a: address = Pedersen64::commit_to_address(1u8, salt);
let b: field = Pedersen64::commit_to_field(2i64, salt);
let c: group = Pedersen64::commit_to_group(1field, salt);
```

#### Description

Computes a Pedersen commitment up to a 128-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given `Struct` value exceeds the 128-bit limit.


#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |

[Back to Top](#table-of-standard-operators)
***


### `BHP256::hash_to_DESTINATION`

```leo
let result: address = BHP256::hash_to_address(1u8);
let result: field = BHP256::hash_to_field(2i64);
let result: group = BHP256::hash_to_group(1field);
let result: scalar = BHP256::hash_to_scalar(1field);
let result: i8 = BHP256::hash_to_i8(1field);
let result: i16 = BHP256::hash_to_i16(1field);
let result: i32 = BHP256::hash_to_i32(1field);
let result: i64 = BHP256::hash_to_i64(1field);
let result: i128 = BHP256::hash_to_i128(1field);
let result: u8 = BHP256::hash_to_u8(1field);
let result: u16 = BHP256::hash_to_u16(1field);
let result: u32 = BHP256::hash_to_u32(1field);
let result: u64 = BHP256::hash_to_u64(1field);
let result: u128 = BHP256::hash_to_u128(1field);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `BHP512::hash_to_DESTINATION`

```leo
let result: address = BHP512::hash_to_address(1u8);
let result: field = BHP512::hash_to_field(2i64);
let result: group = BHP512::hash_to_group(1field);
let result: scalar = BHP512::hash_to_scalar(1field);
let result: i8 = BHP512::hash_to_i8(1field);
let result: i16 = BHP512::hash_to_i16(1field);
let result: i32 = BHP512::hash_to_i32(1field);
let result: i64 = BHP512::hash_to_i64(1field);
let result: i128 = BHP512::hash_to_i128(1field);
let result: u8 = BHP512::hash_to_u8(1field);
let result: u16 = BHP512::hash_to_u16(1field);
let result: u32 = BHP512::hash_to_u32(1field);
let result: u64 = BHP512::hash_to_u64(1field);
let result: u128 = BHP512::hash_to_u128(1field);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 512-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `BHP768::hash_to_DESTINATION`

```leo
let result: address = BHP768::hash_to_address(1u8);
let result: field = BHP768::hash_to_field(2i64);
let result: group = BHP768::hash_to_group(1field);
let result: scalar = BHP768::hash_to_scalar(1field);
let result: i8 = BHP768::hash_to_i8(1field);
let result: i16 = BHP768::hash_to_i16(1field);
let result: i32 = BHP768::hash_to_i32(1field);
let result: i64 = BHP768::hash_to_i64(1field);
let result: i128 = BHP768::hash_to_i128(1field);
let result: u8 = BHP768::hash_to_u8(1field);
let result: u16 = BHP768::hash_to_u16(1field);
let result: u32 = BHP768::hash_to_u32(1field);
let result: u64 = BHP768::hash_to_u64(1field);
let result: u128 = BHP768::hash_to_u128(1field);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 768-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `BHP1024::hash_to_DESTINATION`

```leo
let result: address = BHP1024::hash_to_address(1u8);
let result: field = BHP1024::hash_to_field(2i64);
let result: group = BHP1024::hash_to_group(1field);
let result: scalar = BHP1024::hash_to_scalar(1field);
let result: i8 = BHP1024::hash_to_i8(1field);
let result: i16 = BHP1024::hash_to_i16(1field);
let result: i32 = BHP1024::hash_to_i32(1field);
let result: i64 = BHP1024::hash_to_i64(1field);
let result: i128 = BHP1024::hash_to_i128(1field);
let result: u8 = BHP1024::hash_to_u8(1field);
let result: u16 = BHP1024::hash_to_u16(1field);
let result: u32 = BHP1024::hash_to_u32(1field);
let result: u64 = BHP1024::hash_to_u64(1field);
let result: u128 = BHP1024::hash_to_u128(1field);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 1024-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `Keccak256::hash_to_DESTINATION`

```leo
let result: address = Keccak256::hash_to_address(1u8);
let result: field = Keccak256::hash_to_field(2i64);
let result: group = Keccak256::hash_to_group(1field);
let result: scalar = Keccak256::hash_to_scalar(1field);
let result: i8 = Keccak256::hash_to_i8(1field);
let result: i16 = Keccak256::hash_to_i16(1field);
let result: i32 = Keccak256::hash_to_i32(1field);
let result: i64 = Keccak256::hash_to_i64(1field);
let result: i128 = Keccak256::hash_to_i128(1field);
let result: u8 = Keccak256::hash_to_u8(1field);
let result: u16 = Keccak256::hash_to_u16(1field);
let result: u32 = Keccak256::hash_to_u32(1field);
let result: u64 = Keccak256::hash_to_u64(1field);
let result: u128 = Keccak256::hash_to_u128(1field);
```

#### Description

Computes a Keccak256 hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`.
The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `Keccak384::hash_to_DESTINATION`

```leo
let result: address = Keccak384::hash_to_address(1u8);
let result: field = Keccak384::hash_to_field(2i64);
let result: group = Keccak384::hash_to_group(1field);
let result: scalar = Keccak384::hash_to_scalar(1field);
let result: i8 = Keccak384::hash_to_i8(1field);
let result: i16 = Keccak384::hash_to_i16(1field);
let result: i32 = Keccak384::hash_to_i32(1field);
let result: i64 = Keccak384::hash_to_i64(1field);
let result: i128 = Keccak384::hash_to_i128(1field);
let result: u8 = Keccak384::hash_to_u8(1field);
let result: u16 = Keccak384::hash_to_u16(1field);
let result: u32 = Keccak384::hash_to_u32(1field);
let result: u64 = Keccak384::hash_to_u64(1field);
let result: u128 = Keccak384::hash_to_u128(1field);
```

#### Description

Computes a Keccak384 hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`.
The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `Keccak512::hash_to_DESTINATION`

```leo
let result: address = Keccak512::hash_to_address(1u8);
let result: field = Keccak512::hash_to_field(2i64);
let result: group = Keccak512::hash_to_group(1field);
let result: scalar = Keccak512::hash_to_scalar(1field);
let result: i8 = Keccak512::hash_to_i8(1field);
let result: i16 = Keccak512::hash_to_i16(1field);
let result: i32 = Keccak512::hash_to_i32(1field);
let result: i64 = Keccak512::hash_to_i64(1field);
let result: i128 = Keccak512::hash_to_i128(1field);
let result: u8 = Keccak512::hash_to_u8(1field);
let result: u16 = Keccak512::hash_to_u16(1field);
let result: u32 = Keccak512::hash_to_u32(1field);
let result: u64 = Keccak512::hash_to_u64(1field);
let result: u128 = Keccak512::hash_to_u128(1field);
```

#### Description

Computes a Keccak512 hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`.
The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen64::hash_to_DESTINATION`

```leo
let result: address = Pedersen64::hash_to_address(1u8);
let result: field = Pedersen64::hash_to_field(2i64);
let result: group = Pedersen64::hash_to_group(1field);
let result: scalar = Pedersen64::hash_to_scalar(1field);
let result: i8 = Pedersen64::hash_to_i8(1field);
let result: i16 = Pedersen64::hash_to_i16(1field);
let result: i32 = Pedersen64::hash_to_i32(1field);
let result: i64 = Pedersen64::hash_to_i64(1field);
let result: i128 = Pedersen64::hash_to_i128(1field);
let result: u8 = Pedersen64::hash_to_u8(1field);
let result: u16 = Pedersen64::hash_to_u16(1field);
let result: u32 = Pedersen64::hash_to_u32(1field);
let result: u64 = Pedersen64::hash_to_u64(1field);
let result: u128 = Pedersen64::hash_to_u128(1field);
```

#### Description

Computes a Pedersen hash up to a 64-bit input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

The instruction will halt if the given `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen128::hash_to_DESTINATION`

```leo
let result: address = Pedersen128::hash_to_address(1u8);
let result: field = Pedersen128::hash_to_field(2i64);
let result: group = Pedersen128::hash_to_group(1field);
let result: scalar = Pedersen128::hash_to_scalar(1field);
let result: i8 = Pedersen128::hash_to_i8(1field);
let result: i16 = Pedersen128::hash_to_i16(1field);
let result: i32 = Pedersen128::hash_to_i32(1field);
let result: i64 = Pedersen128::hash_to_i64(1field);
let result: i128 = Pedersen128::hash_to_i128(1field);
let result: u8 = Pedersen128::hash_to_u8(1field);
let result: u16 = Pedersen128::hash_to_u16(1field);
let result: u32 = Pedersen128::hash_to_u32(1field);
let result: u64 = Pedersen128::hash_to_u64(1field);
let result: u128 = Pedersen128::hash_to_u128(1field);
```

#### Description

Computes a Pedersen hash up to a 128-bit input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

The instruction will halt if the given `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***


### `Poseidon2::hash_to_DESTINATION`

```leo
let result: address = Poseidon2::hash_to_address(1u8);
let result: field = Poseidon2::hash_to_field(2i64);
let result: group = Poseidon2::hash_to_group(1field);
let result: scalar = Poseidon2::hash_to_scalar(1field);
let result: i8 = Poseidon2::hash_to_i8(1field);
let result: i16 = Poseidon2::hash_to_i16(1field);
let result: i32 = Poseidon2::hash_to_i32(1field);
let result: i64 = Poseidon2::hash_to_i64(1field);
let result: i128 = Poseidon2::hash_to_i128(1field);
let result: u8 = Poseidon2::hash_to_u8(1field);
let result: u16 = Poseidon2::hash_to_u16(1field);
let result: u32 = Poseidon2::hash_to_u32(1field);
let result: u64 = Poseidon2::hash_to_u64(1field);
let result: u128 = Poseidon2::hash_to_u128(1field);
```

#### Description

Calculates a Poseidon hash with an input rate of 2, from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***


### `Poseidon4::hash_to_DESTINATION`

```leo
let result: address = Poseidon4::hash_to_address(1u8);
let result: field = Poseidon4::hash_to_field(2i64);
let result: group = Poseidon4::hash_to_group(1field);
let result: scalar = Poseidon4::hash_to_scalar(1field);
let result: i8 = Poseidon4::hash_to_i8(1field);
let result: i16 = Poseidon4::hash_to_i16(1field);
let result: i32 = Poseidon4::hash_to_i32(1field);
let result: i64 = Poseidon4::hash_to_i64(1field);
let result: i128 = Poseidon4::hash_to_i128(1field);
let result: u8 = Poseidon4::hash_to_u8(1field);
let result: u16 = Poseidon4::hash_to_u16(1field);
let result: u32 = Poseidon4::hash_to_u32(1field);
let result: u64 = Poseidon4::hash_to_u64(1field);
let result: u128 = Poseidon4::hash_to_u128(1field);
```

#### Description

Calculates a Poseidon hash with an input rate of 4, from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***


### `Poseidon8::hash_to_DESTINATION`

```leo
let result: address = Poseidon8::hash_to_address(1u8);
let result: field = Poseidon8::hash_to_field(2i64);
let result: group = Poseidon8::hash_to_group(1field);
let result: scalar = Poseidon8::hash_to_scalar(1field);
let result: i8 = Poseidon8::hash_to_i8(1field);
let result: i16 = Poseidon8::hash_to_i16(1field);
let result: i32 = Poseidon8::hash_to_i32(1field);
let result: i64 = Poseidon8::hash_to_i64(1field);
let result: i128 = Poseidon8::hash_to_i128(1field);
let result: u8 = Poseidon8::hash_to_u8(1field);
let result: u16 = Poseidon8::hash_to_u16(1field);
let result: u32 = Poseidon8::hash_to_u32(1field);
let result: u64 = Poseidon8::hash_to_u64(1field);
let result: u128 = Poseidon8::hash_to_u128(1field);
```

#### Description

Calculates a Poseidon hash with an input rate of 8, from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `SHA3_256::hash_to_DESTINATION`

```leo
let result: address = SHA3_256::hash_to_address(1u8);
let result: field = SHA3_256::hash_to_field(2i64);
let result: group = SHA3_256::hash_to_group(1field);
let result: scalar = SHA3_256::hash_to_scalar(1field);
let result: i8 = SHA3_256::hash_to_i8(1field);
let result: i16 = SHA3_256::hash_to_i16(1field);
let result: i32 = SHA3_256::hash_to_i32(1field);
let result: i64 = SHA3_256::hash_to_i64(1field);
let result: i128 = SHA3_256::hash_to_i128(1field);
let result: u8 = SHA3_256::hash_to_u8(1field);
let result: u16 = SHA3_256::hash_to_u16(1field);
let result: u32 = SHA3_256::hash_to_u32(1field);
let result: u64 = SHA3_256::hash_to_u64(1field);
let result: u128 = SHA3_256::hash_to_u128(1field);
```

#### Description

Calculates a SHA3_256 hash from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `SHA3_384::hash_to_DESTINATION`

```leo
let result: address = SHA3_384::hash_to_address(1u8);
let result: field = SHA3_384::hash_to_field(2i64);
let result: group = SHA3_384::hash_to_group(1field);
let result: scalar = SHA3_384::hash_to_scalar(1field);
let result: i8 = SHA3_384::hash_to_i8(1field);
let result: i16 = SHA3_384::hash_to_i16(1field);
let result: i32 = SHA3_384::hash_to_i32(1field);
let result: i64 = SHA3_384::hash_to_i64(1field);
let result: i128 = SHA3_384::hash_to_i128(1field);
let result: u8 = SHA3_384::hash_to_u8(1field);
let result: u16 = SHA3_384::hash_to_u16(1field);
let result: u32 = SHA3_384::hash_to_u32(1field);
let result: u64 = SHA3_384::hash_to_u64(1field);
let result: u128 = SHA3_384::hash_to_u128(1field);
```

#### Description

Calculates a SHA3_384 hash from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***

### `SHA3_512::hash_to_DESTINATION`

```leo
let result: address = SHA3_512::hash_to_address(1u8);
let result: field = SHA3_512::hash_to_field(2i64);
let result: group = SHA3_512::hash_to_group(1field);
let result: scalar = SHA3_512::hash_to_scalar(1field);
let result: i8 = SHA3_512::hash_to_i8(1field);
let result: i16 = SHA3_512::hash_to_i16(1field);
let result: i32 = SHA3_512::hash_to_i32(1field);
let result: i64 = SHA3_512::hash_to_i64(1field);
let result: i128 = SHA3_512::hash_to_i128(1field);
let result: u8 = SHA3_512::hash_to_u8(1field);
let result: u16 = SHA3_512::hash_to_u16(1field);
let result: u32 = SHA3_512::hash_to_u32(1field);
let result: u64 = SHA3_512::hash_to_u64(1field);
let result: u128 = SHA3_512::hash_to_u128(1field);
```

#### Description

Calculates a SHA3_512 hash from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `hash_to_DESTINATION` at the end of the function.

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

[Back to Top](#table-of-standard-operators)
***