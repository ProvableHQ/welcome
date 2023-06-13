---
id: operators
title: Leo Operators Reference
sidebar_label: Operators
---

The following lists show the standard and cryptographic operators supported by Leo.
The Leo operators compile down to [Aleo instructions opcodes](../aleo/04_opcodes.md) executable by the Aleo Virtual Machine (AVM).

## Table of standard Operators
| Name                                        | Description                         |
|---------------------------------------------|:------------------------------------|
| [abs](#abs)                                 | Absolute value operation            |
| [abs_wrapped](#abs_wrapped)                 | Wrapping absolute value operation   |
| [add](#add)                                 | Addition operation                  |
| [add_wrapped](#add_wrapped)                 | Wrapping addition operation         |
| [and](#and)                                 | AND operation                       |
| [assert](#assert)                           | Assert boolean true                 |
| [assert_eq](#assert_eq)                     | Assert equality                     |
| [assert_neq](#assert_neq)                   | Assert non-equality                 |
| [div](#div)                                 | Division operation                  |
| [div_wrapped](#div_wrapped)                 | Wrapping division operation         |
| [double](#double)                           | Double operation                    |
| [gt](#gt)                                   | Greater than comparison             |
| [gte](#gte)                                 | Greater than or equal to comparison |
| [inv](#inv)                                 | Multiplicative inverse operation    |
| [eq](#eq)                                   | Equality comparison                 |
| [neq](#neq)                                 | Not equal comparison                |
| [lt](#lt)                                   | Less than comparison                |
| [lte](#lte)                                 | Less than or equal to comparison    |
| [mod](#mod)                                 | Arithmetic modulo operation         |
| [mul](#mul)                                 | Multiplication operation            |
| [mul_wrapped](#mul_wrapped)                 | Wrapping multiplication operation   |
| [nand](#nand)                               | `Boolean` NAND operation            |
| [neg](#neg)                                 | Additive inverse operation          |
| [nor](#nor)                                 | `Boolean` NOR operation             |
| [not](#not)                                 | NOT operation                       |
| [or](#or)                                   | OR Operation                        |
| [pow](#pow)                                 | Exponentiation operation            |
| [pow_wrapped](#pow_wrapped)                 | Wrapping exponentiation operation   |
| [rem](#rem)                                 | Remainder operation                 |
| [rem_wrapped](#rem_wrapped)                 | Wrapping remainder operation        |
| [shl](#shl)                                 | Shift left operation                |
| [shl_wrapped](#shl_wrapped)                 | Wrapping shift left operation       |
| [shr](#shr)                                 | Shift right operation               |
| [shr_wrapped](#shr_wrapped)                 | Wrapping shift right operation      |
| [square_root](#square_root)                 | Square root operation               |
| [square](#square)                           | Square operation                    |
| [sub](#sub)                                 | Subtraction operation               |
| [sub_wrapped](#sub_wrapped)                 | Wrapping subtraction operation      |
| [ternary](#ternary)                         | Ternary select operation            |
| [xor](#xor)                                 | XOR operation                       |
| [group::GEN](#groupgen)                     | Group generator                     |

## Table of cryptographic Operators
| Name                                                        | Description                                       |
|-------------------------------------------------------------|:--------------------------------------------------|
| [BHP256::commit](#bhp256commit)                             | 256-bit input BHP commitment of field type        |
| [BHP512::commit](#bhp512commit)                             | 512-bit input BHP commitment of field type        |
| [BHP768::commit](#bhp768commit)                             | 768-bit input BHP commitment of field type        |
| [BHP1024::commit](#bhp1024commit)                           | 1024-bit input BHP commitment of field type       |
| [Pedersen64::commit](#pedersen64commit)                     | 64-bit input Pedersen commitment of field type    |
| [Pedersen128::commit](#pedersen128commit)                   | 128-bit input Pedersen commitment of field type   |
| [BHP256::commit_to_group](#bhp256commit_to_group)           | 256-bit input BHP commitment of group type        |
| [BHP512::commit_to_group](#bhp512commit_to_group)           | 512-bit input BHP commitment of group type        |
| [BHP768::commit_to_group](#bhp768commit_to_group)           | 768-bit input BHP commitment of group type        |
| [BHP1024::commit_to_group](#bhp1024commit_to_group)         | 1024-bit input BHP commitment of group type       |
| [Pedersen64::commit_to_group](#pedersen64commit_to_group)   | 64-bit input Pedersen commitment of group type    |
| [Pedersen128::commit_to_group](#pedersen128commit_to_group) | 128-bit input Pedersen commitment of group type   |
| [BHP256::hash](#bhp256hash)                                 | 256-bit input BHP hash of field type              |
| [BHP512::hash](#bhp512hash)                                 | 512-bit input BHP hash of field type              |
| [BHP768::hash](#bhp768hash)                                 | 768-bit input BHP hash of field type              |
| [BHP1024::hash](#bhp1024hash)                               | 1024-bit input BHP hash of field type             |
| [Pedersen64::hash](#pedersen64hash)                         | 64-bit input Pedersen hash of field type          |
| [Pedersen128::hash](#pedersen128hash)                       | 128-bit input Pedersen hash of field type         |
| [Poseidon2::hash](#poseidon2hash)                           | Poseidon hash with input rate 2 of field type     |
| [Poseidon4::hash](#poseidon4hash)                           | Poseidon hash with input rate 4 of field type     |
| [Poseidon8::hash](#poseidon8hash)                           | Poseidon hash with input rate 8 of field type     |
| [BHP256::hash_to_group](#bhp256hash_to_group)               | 256-bit input BHP hash of group type              |
| [BHP512::hash_to_group](#bhp512hash_to_group)               | 512-bit input BHP hash of group type              |
| [BHP768::hash_to_group](#bhp768hash_to_group)               | 768-bit input BHP hash of group type              |
| [BHP1024::hash_to_group](#bhp1024hash_to_group)             | 1024-bit input BHP hash of group type             |
| [Pedersen64::hash_to_group](#pedersen64hash_to_group)       | 64-bit input Pedersen hash of group type          |
| [Pedersen128::hash_to_group](#pedersen128hash_to_group)     | 128-bit input Pedersen hash of group type         |
| [Poseidon2::hash_to_group](#poseidon2hash_to_group)         | Poseidon hash with input rate 2 of group type     |
| [Poseidon4::hash_to_group](#poseidon4hash_to_group)         | Poseidon hash with input rate 4 of group type     |
| [Poseidon8::hash_to_group](#poseidon8hash_to_group)         | Poseidon hash with input rate 8 of group type     |
| [Poseidon2::hash_to_scalar](#poseidon2hash_to_scalar)       | Poseidon hash with input rate 2 of scalar type    |
| [Poseidon4::hash_to_scalar](#poseidon4hash_to_scalar)       | Poseidon hash with input rate 4 of scalar type    |
| [Poseidon8::hash_to_scalar](#poseidon8hash_to_scalar)       | Poseidon hash with input rate 8 of scalar type    |


## Specification

The following is the specification for each opcode in the Aleo Virtual Machine (AVM).

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

| First     | Second    |
|-----------|-----------|
| `Address` | `Address` |
| `Boolean` | `Boolean` |
| `Field`   | `Field`   |
| `Group`   | `Group`   |
| `I8`      | `I8`      |
| `I16`     | `I16`     |
| `I32`     | `I32`     |
| `I64`     | `I64`     |
| `I128`    | `I128`    |
| `U8`      | `U8`      |
| `U16`     | `U16`     |
| `U32`     | `U32`     |
| `U64`     | `U64`     |
| `U128`    | `U128`    |
| `Scalar`  | `Scalar`  |
| `Struct`  | `Struct`  |
| `Record`  | `Record`  |

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

| First     | Second    |
|-----------|-----------|
| `Address` | `Address` |
| `Boolean` | `Boolean` |
| `Field`   | `Field`   |
| `Group`   | `Group`   |
| `I8`      | `I8`      |
| `I16`     | `I16`     |
| `I32`     | `I32`     |
| `I64`     | `I64`     |
| `I128`    | `I128`    |
| `U8`      | `U8`      |
| `U16`     | `U16`     |
| `U32`     | `U32`     |
| `U64`     | `U64`     |
| `U128`    | `U128`    |
| `Scalar`  | `Scalar`  |
| `Struct`  | `Struct`  |
| `Record`  | `Record`  |

[Back to Top](#table-of-standard-operators)
***

### `BHP256::commit`

```leo
let a: i128 = 1i128;
let b: field = BHP256::commit(a, 1scalar);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 256-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Address` | `Scalar` | `Field`     |
| `Boolean` | `Scalar` | `Field`     |
| `Field`   | `Scalar` | `Field`     |
| `Group`   | `Scalar` | `Field`     |
| `I8`      | `Scalar` | `Field`     |
| `I16`     | `Scalar` | `Field`     |
| `I32`     | `Scalar` | `Field`     |
| `I64`     | `Scalar` | `Field`     |
| `I128`    | `Scalar` | `Field`     |
| `U8`      | `Scalar` | `Field`     |
| `U16`     | `Scalar` | `Field`     |
| `U32`     | `Scalar` | `Field`     |
| `U64`     | `Scalar` | `Field`     |
| `U128`    | `Scalar` | `Field`     |
| `Scalar`  | `Scalar` | `Field`     |
| `Struct`  | `Scalar` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP512::commit`

```leo
let a: i128 = 1i128;
let b: field = BHP512::commit(a, 1scalar);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 512-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Address` | `Scalar` | `Field`     |
| `Boolean` | `Scalar` | `Field`     |
| `Field`   | `Scalar` | `Field`     |
| `Group`   | `Scalar` | `Field`     |
| `I8`      | `Scalar` | `Field`     |
| `I16`     | `Scalar` | `Field`     |
| `I32`     | `Scalar` | `Field`     |
| `I64`     | `Scalar` | `Field`     |
| `I128`    | `Scalar` | `Field`     |
| `U8`      | `Scalar` | `Field`     |
| `U16`     | `Scalar` | `Field`     |
| `U32`     | `Scalar` | `Field`     |
| `U64`     | `Scalar` | `Field`     |
| `U128`    | `Scalar` | `Field`     |
| `Scalar`  | `Scalar` | `Field`     |
| `Struct`  | `Scalar` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP768::commit`

```leo
let a: i128 = 1i128;
let b: field = BHP768::commit(a, 1scalar);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 768-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Address` | `Scalar` | `Field`     |
| `Boolean` | `Scalar` | `Field`     |
| `Field`   | `Scalar` | `Field`     |
| `Group`   | `Scalar` | `Field`     |
| `I8`      | `Scalar` | `Field`     |
| `I16`     | `Scalar` | `Field`     |
| `I32`     | `Scalar` | `Field`     |
| `I64`     | `Scalar` | `Field`     |
| `I128`    | `Scalar` | `Field`     |
| `U8`      | `Scalar` | `Field`     |
| `U16`     | `Scalar` | `Field`     |
| `U32`     | `Scalar` | `Field`     |
| `U64`     | `Scalar` | `Field`     |
| `U128`    | `Scalar` | `Field`     |
| `Scalar`  | `Scalar` | `Field`     |
| `Struct`  | `Scalar` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP1024::commit`

```leo
let a: i128 = 1i128;
let b: field = BHP1024::commit(a, 1scalar);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 1024-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Address` | `Scalar` | `Field`     |
| `Boolean` | `Scalar` | `Field`     |
| `Field`   | `Scalar` | `Field`     |
| `Group`   | `Scalar` | `Field`     |
| `I8`      | `Scalar` | `Field`     |
| `I16`     | `Scalar` | `Field`     |
| `I32`     | `Scalar` | `Field`     |
| `I64`     | `Scalar` | `Field`     |
| `I128`    | `Scalar` | `Field`     |
| `U8`      | `Scalar` | `Field`     |
| `U16`     | `Scalar` | `Field`     |
| `U32`     | `Scalar` | `Field`     |
| `U64`     | `Scalar` | `Field`     |
| `U128`    | `Scalar` | `Field`     |
| `Scalar`  | `Scalar` | `Field`     |
| `Struct`  | `Scalar` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen64::commit`

```leo
let a: i64 = 1i64;
let b: field = Pedersen64::commit(a, 1scalar);
```

#### Description

Computes a Pedersen commitment up to a 64-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Boolean` | `Scalar` | `Field`     |
| `I8`      | `Scalar` | `Field`     |
| `I16`     | `Scalar` | `Field`     |
| `I32`     | `Scalar` | `Field`     |
| `I64`     | `Scalar` | `Field`     |
| `U8`      | `Scalar` | `Field`     |
| `U16`     | `Scalar` | `Field`     |
| `U32`     | `Scalar` | `Field`     |
| `U64`     | `Scalar` | `Field`     |
| `Struct`  | `Scalar` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen128::commit`

```leo
let a: i128 = 1i128;
let b: field = Pedersen128::commit(a, 1scalar);
```

#### Description

Computes a Pedersen commitment up to a 128-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given `Struct` value exceeds the 128-bit limit.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Boolean` | `Scalar` | `Field`     |
| `I8`      | `Scalar` | `Field`     |
| `I16`     | `Scalar` | `Field`     |
| `I32`     | `Scalar` | `Field`     |
| `I64`     | `Scalar` | `Field`     |
| `I128`    | `Scalar` | `Field`     |
| `U8`      | `Scalar` | `Field`     |
| `U16`     | `Scalar` | `Field`     |
| `U32`     | `Scalar` | `Field`     |
| `U64`     | `Scalar` | `Field`     |
| `U128`    | `Scalar` | `Field`     |
| `Struct`  | `Scalar` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP256::commit_to_group`

```leo
let a: i128 = 1i128;
let b: group = BHP256::commit_to_group(a, 1scalar);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 256-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Address` | `Scalar` | `Group`     |
| `Boolean` | `Scalar` | `Group`     |
| `Field`   | `Scalar` | `Group`     |
| `Group`   | `Scalar` | `Group`     |
| `I8`      | `Scalar` | `Group`     |
| `I16`     | `Scalar` | `Group`     |
| `I32`     | `Scalar` | `Group`     |
| `I64`     | `Scalar` | `Group`     |
| `I128`    | `Scalar` | `Group`     |
| `U8`      | `Scalar` | `Group`     |
| `U16`     | `Scalar` | `Group`     |
| `U32`     | `Scalar` | `Group`     |
| `U64`     | `Scalar` | `Group`     |
| `U128`    | `Scalar` | `Group`     |
| `Scalar`  | `Scalar` | `Group`     |
| `Struct`  | `Scalar` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP512::commit_to_group`

```leo
let a: i128 = 1i128;
let b: group = BHP512::commit_to_group(a, 1scalar);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 512-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Address` | `Scalar` | `Group`     |
| `Boolean` | `Scalar` | `Group`     |
| `Field`   | `Scalar` | `Group`     |
| `Group`   | `Scalar` | `Group`     |
| `I8`      | `Scalar` | `Group`     |
| `I16`     | `Scalar` | `Group`     |
| `I32`     | `Scalar` | `Group`     |
| `I64`     | `Scalar` | `Group`     |
| `I128`    | `Scalar` | `Group`     |
| `U8`      | `Scalar` | `Group`     |
| `U16`     | `Scalar` | `Group`     |
| `U32`     | `Scalar` | `Group`     |
| `U64`     | `Scalar` | `Group`     |
| `U128`    | `Scalar` | `Group`     |
| `Scalar`  | `Scalar` | `Group`     |
| `Struct`  | `Scalar` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP768::commit_to_group`

```leo
let a: i128 = 1i128;
let b: group = BHP768::commit_to_group(a, 1scalar);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 768-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Address` | `Scalar` | `Group`     |
| `Boolean` | `Scalar` | `Group`     |
| `Field`   | `Scalar` | `Group`     |
| `Group`   | `Scalar` | `Group`     |
| `I8`      | `Scalar` | `Group`     |
| `I16`     | `Scalar` | `Group`     |
| `I32`     | `Scalar` | `Group`     |
| `I64`     | `Scalar` | `Group`     |
| `I128`    | `Scalar` | `Group`     |
| `U8`      | `Scalar` | `Group`     |
| `U16`     | `Scalar` | `Group`     |
| `U32`     | `Scalar` | `Group`     |
| `U64`     | `Scalar` | `Group`     |
| `U128`    | `Scalar` | `Group`     |
| `Scalar`  | `Scalar` | `Group`     |
| `Struct`  | `Scalar` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP1024::commit_to_group`

```leo
let a: i128 = 1i128;
let b: group = BHP1024::commit_to_group(a, 1scalar);
```

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 1024-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Address` | `Scalar` | `Group`     |
| `Boolean` | `Scalar` | `Group`     |
| `Field`   | `Scalar` | `Group`     |
| `Group`   | `Scalar` | `Group`     |
| `I8`      | `Scalar` | `Group`     |
| `I16`     | `Scalar` | `Group`     |
| `I32`     | `Scalar` | `Group`     |
| `I64`     | `Scalar` | `Group`     |
| `I128`    | `Scalar` | `Group`     |
| `U8`      | `Scalar` | `Group`     |
| `U16`     | `Scalar` | `Group`     |
| `U32`     | `Scalar` | `Group`     |
| `U64`     | `Scalar` | `Group`     |
| `U128`    | `Scalar` | `Group`     |
| `Scalar`  | `Scalar` | `Group`     |
| `Struct`  | `Scalar` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen64::commit_to_group`

```leo
let a: i64 = 1i64;
let b: group = Pedersen64::commit_to_group(a, 1scalar);
```

#### Description

Computes a Pedersen commitment up to a 64-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Boolean` | `Scalar` | `Group`     |
| `I8`      | `Scalar` | `Group`     |
| `I16`     | `Scalar` | `Group`     |
| `I32`     | `Scalar` | `Group`     |
| `I64`     | `Scalar` | `Group`     |
| `U8`      | `Scalar` | `Group`     |
| `U16`     | `Scalar` | `Group`     |
| `U32`     | `Scalar` | `Group`     |
| `U64`     | `Scalar` | `Group`     |
| `Struct`  | `Scalar` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen128::commit_to_group`

```leo
let a: i128 = 1i128;
let b: group = Pedersen128::commit_to_group(a, 1scalar);
```

#### Description

Computes a Pedersen commitment up to a 128-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given `Struct` value exceeds the 128-bit limit.

#### Supported Types

| First     | Second   | Destination |
|-----------|----------|:------------|
| `Boolean` | `Scalar` | `Group`     |
| `I8`      | `Scalar` | `Group`     |
| `I16`     | `Scalar` | `Group`     |
| `I32`     | `Scalar` | `Group`     |
| `I64`     | `Scalar` | `Group`     |
| `I128`    | `Scalar` | `Group`     |
| `U8`      | `Scalar` | `Group`     |
| `U16`     | `Scalar` | `Group`     |
| `U32`     | `Scalar` | `Group`     |
| `U64`     | `Scalar` | `Group`     |
| `U128`    | `Scalar` | `Group`     |
| `Struct`  | `Scalar` | `Group`     |

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

A constraint is added to check for underflow. Underflow occurs when dividing the minimum value of a signed integer type by -1. For example, `-128i8 / -1i8` would result in underflow, since 128 cannot be represented as an `i8`.

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

### `BHP256::hash`

```leo
let a: address = aleo10qerras5799u6k7rjtc9y3hcwxuykr45qra7x7dp6jgnc0923czqm0lgta;
let b: field = BHP256::hash(a);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Address` | `Field`     |
| `Boolean` | `Field`     |
| `Field`   | `Field`     |
| `Group`   | `Field`     |
| `I8`      | `Field`     |
| `I16`     | `Field`     |
| `I32`     | `Field`     |
| `I64`     | `Field`     |
| `I128`    | `Field`     |
| `U8`      | `Field`     |
| `U16`     | `Field`     |
| `U32`     | `Field`     |
| `U64`     | `Field`     |
| `U128`    | `Field`     |
| `Scalar`  | `Field`     |
| `Struct`  | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP512::hash`

```leo
let a: address = aleo10qerras5799u6k7rjtc9y3hcwxuykr45qra7x7dp6jgnc0923czqm0lgta;
let b: field = BHP512::hash(a);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 512-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Address` | `Field`     |
| `Boolean` | `Field`     |
| `Field`   | `Field`     |
| `Group`   | `Field`     |
| `I8`      | `Field`     |
| `I16`     | `Field`     |
| `I32`     | `Field`     |
| `I64`     | `Field`     |
| `I128`    | `Field`     |
| `U8`      | `Field`     |
| `U16`     | `Field`     |
| `U32`     | `Field`     |
| `U64`     | `Field`     |
| `U128`    | `Field`     |
| `Scalar`  | `Field`     |
| `Struct`  | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP768::hash`

```leo
let a: address = aleo10qerras5799u6k7rjtc9y3hcwxuykr45qra7x7dp6jgnc0923czqm0lgta;
let b: field = BHP768::hash(a);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 768-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Address` | `Field`     |
| `Boolean` | `Field`     |
| `Field`   | `Field`     |
| `Group`   | `Field`     |
| `I8`      | `Field`     |
| `I16`     | `Field`     |
| `I32`     | `Field`     |
| `I64`     | `Field`     |
| `I128`    | `Field`     |
| `U8`      | `Field`     |
| `U16`     | `Field`     |
| `U32`     | `Field`     |
| `U64`     | `Field`     |
| `U128`    | `Field`     |
| `Scalar`  | `Field`     |
| `Struct`  | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP1024::hash`

```leo
let a: address = aleo10qerras5799u6k7rjtc9y3hcwxuykr45qra7x7dp6jgnc0923czqm0lgta;
let b: field = BHP1024::hash(a);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 1024-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Address` | `Field`     |
| `Boolean` | `Field`     |
| `Field`   | `Field`     |
| `Group`   | `Field`     |
| `I8`      | `Field`     |
| `I16`     | `Field`     |
| `I32`     | `Field`     |
| `I64`     | `Field`     |
| `I128`    | `Field`     |
| `U8`      | `Field`     |
| `U16`     | `Field`     |
| `U32`     | `Field`     |
| `U64`     | `Field`     |
| `U128`    | `Field`     |
| `Scalar`  | `Field`     |
| `Struct`  | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen64::hash`

```leo
let a: field = Pedersen64::hash(1u64);
```

#### Description

Computes a Pedersen hash up to a 64-bit input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Boolean` | `Field`     |
| `I8`      | `Field`     |
| `I16`     | `Field`     |
| `I32`     | `Field`     |
| `I64`     | `Field`     |
| `U8`      | `Field`     |
| `U16`     | `Field`     |
| `U32`     | `Field`     |
| `U64`     | `Field`     |
| `Struct`  | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen128::hash`

```leo
let a: field = Pedersen128::hash(1u128);
```

#### Description

Computes a Pedersen hash up to a 128-bit input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given `Struct` value exceeds the 128-bit limit.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Boolean` | `Field`     |
| `I8`      | `Field`     |
| `I16`     | `Field`     |
| `I32`     | `Field`     |
| `I64`     | `Field`     |
| `I128`    | `Field`     |
| `U8`      | `Field`     |
| `U16`     | `Field`     |
| `U32`     | `Field`     |
| `U64`     | `Field`     |
| `U128`    | `Field`     |
| `Struct`  | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon2::hash`

```leo
let a: field = Poseidon2::hash(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 2, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

#### Supported Types

| First    | Destination |
|----------|:------------|
| `Field`  | `Field`     |
| `I8`     | `Field`     |
| `I16`    | `Field`     |
| `I32`    | `Field`     |
| `I64`    | `Field`     |
| `I128`   | `Field`     |
| `U8`     | `Field`     |
| `U16`    | `Field`     |
| `U32`    | `Field`     |
| `U64`    | `Field`     |
| `U128`   | `Field`     |
| `Scalar` | `Field`     |
| `Struct` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon4::hash`

```leo
let a: field = Poseidon4::hash(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 4, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

#### Supported Types

| First    | Destination |
|----------|:------------|
| `Field`  | `Field`     |
| `I8`     | `Field`     |
| `I16`    | `Field`     |
| `I32`    | `Field`     |
| `I64`    | `Field`     |
| `I128`   | `Field`     |
| `U8`     | `Field`     |
| `U16`    | `Field`     |
| `U32`    | `Field`     |
| `U64`    | `Field`     |
| `U128`   | `Field`     |
| `Scalar` | `Field`     |
| `Struct` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon8::hash`

```leo
let a: field = Poseidon8::hash(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 8, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

#### Supported Types

| First    | Destination |
|----------|:------------|
| `Field`  | `Field`     |
| `I8`     | `Field`     |
| `I16`    | `Field`     |
| `I32`    | `Field`     |
| `I64`    | `Field`     |
| `I128`   | `Field`     |
| `U8`     | `Field`     |
| `U16`    | `Field`     |
| `U32`    | `Field`     |
| `U64`    | `Field`     |
| `U128`   | `Field`     |
| `Scalar` | `Field`     |
| `Struct` | `Field`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP256::hash_to_group`

```leo
let a: address = aleo10qerras5799u6k7rjtc9y3hcwxuykr45qra7x7dp6jgnc0923czqm0lgta;
let b: group = BHP256::hash_to_group(a);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Address` | `Group`     |
| `Boolean` | `Group`     |
| `Field`   | `Group`     |
| `Group`   | `Group`     |
| `I8`      | `Group`     |
| `I16`     | `Group`     |
| `I32`     | `Group`     |
| `I64`     | `Group`     |
| `I128`    | `Group`     |
| `U8`      | `Group`     |
| `U16`     | `Group`     |
| `U32`     | `Group`     |
| `U64`     | `Group`     |
| `U128`    | `Group`     |
| `Scalar`  | `Group`     |
| `Struct`  | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP512::hash_to_group`

```leo
let a: address = aleo10qerras5799u6k7rjtc9y3hcwxuykr45qra7x7dp6jgnc0923czqm0lgta;
let b: group = BHP512::hash_to_group(a);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 512-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Address` | `Group`     |
| `Boolean` | `Group`     |
| `Field`   | `Group`     |
| `Group`   | `Group`     |
| `I8`      | `Group`     |
| `I16`     | `Group`     |
| `I32`     | `Group`     |
| `I64`     | `Group`     |
| `I128`    | `Group`     |
| `U8`      | `Group`     |
| `U16`     | `Group`     |
| `U32`     | `Group`     |
| `U64`     | `Group`     |
| `U128`    | `Group`     |
| `Scalar`  | `Group`     |
| `Struct`  | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP768::hash_to_group`

```leo
let a: address = aleo10qerras5799u6k7rjtc9y3hcwxuykr45qra7x7dp6jgnc0923czqm0lgta;
let b: group = BHP768::hash_to_group(a);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 768-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Address` | `Group`     |
| `Boolean` | `Group`     |
| `Field`   | `Group`     |
| `Group`   | `Group`     |
| `I8`      | `Group`     |
| `I16`     | `Group`     |
| `I32`     | `Group`     |
| `I64`     | `Group`     |
| `I128`    | `Group`     |
| `U8`      | `Group`     |
| `U16`     | `Group`     |
| `U32`     | `Group`     |
| `U64`     | `Group`     |
| `U128`    | `Group`     |
| `Scalar`  | `Group`     |
| `Struct`  | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `BHP1024::hash_to_group`

```leo
let a: address = aleo10qerras5799u6k7rjtc9y3hcwxuykr45qra7x7dp6jgnc0923czqm0lgta;
let b: group = BHP1024::hash_to_group(a);
```

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 1024-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Address` | `Group`     |
| `Boolean` | `Group`     |
| `Field`   | `Group`     |
| `Group`   | `Group`     |
| `I8`      | `Group`     |
| `I16`     | `Group`     |
| `I32`     | `Group`     |
| `I64`     | `Group`     |
| `I128`    | `Group`     |
| `U8`      | `Group`     |
| `U16`     | `Group`     |
| `U32`     | `Group`     |
| `U64`     | `Group`     |
| `U128`    | `Group`     |
| `Scalar`  | `Group`     |
| `Struct`  | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen64::hash_to_group`

```leo
let a: group = Pedersen64::hash_to_group(1u64);
```

#### Description

Computes a Pedersen hash up to a 64-bit input in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

The instruction will halt if the given `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Boolean` | `Group`     |
| `I8`      | `Group`     |
| `I16`     | `Group`     |
| `I32`     | `Group`     |
| `I64`     | `Group`     |
| `U8`      | `Group`     |
| `U16`     | `Group`     |
| `U32`     | `Group`     |
| `U64`     | `Group`     |
| `Struct`  | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `Pedersen128::hash_to_group`

```leo
let a: group = Pedersen128::hash_to_group(1u128);
```

#### Description

Computes a Pedersen hash up to a 128-bit input in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

The instruction will halt if the given `Struct` value exceeds the 128-bit limit.

#### Supported Types

| First     | Destination |
|-----------|:------------|
| `Boolean` | `Group`     |
| `I8`      | `Group`     |
| `I16`     | `Group`     |
| `I32`     | `Group`     |
| `I64`     | `Group`     |
| `I128`    | `Group`     |
| `U8`      | `Group`     |
| `U16`     | `Group`     |
| `U32`     | `Group`     |
| `U64`     | `Group`     |
| `U128`    | `Group`     |
| `Struct`  | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon2::hash_to_group`

```leo
let a: group = Poseidon2::hash_to_group(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 2, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

#### Supported Types

| First    | Destination |
|----------|:------------|
| `Field`  | `Group`     |
| `I8`     | `Group`     |
| `I16`    | `Group`     |
| `I32`    | `Group`     |
| `I64`    | `Group`     |
| `I128`   | `Group`     |
| `U8`     | `Group`     |
| `U16`    | `Group`     |
| `U32`    | `Group`     |
| `U64`    | `Group`     |
| `U128`   | `Group`     |
| `Scalar` | `Group`     |
| `Struct` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon4::hash_to_group`

```leo
let a: group = Poseidon4::hash_to_group(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 4, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

#### Supported Types

| First    | Destination |
|----------|:------------|
| `Field`  | `Group`     |
| `I8`     | `Group`     |
| `I16`    | `Group`     |
| `I32`    | `Group`     |
| `I64`    | `Group`     |
| `I128`   | `Group`     |
| `U8`     | `Group`     |
| `U16`    | `Group`     |
| `U32`    | `Group`     |
| `U64`    | `Group`     |
| `U128`   | `Group`     |
| `Scalar` | `Group`     |
| `Struct` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon8::hash_to_group`

```leo
let a: group = Poseidon8::hash_to_group(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 8, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Group` value.

#### Supported Types

| First    | Destination |
|----------|:------------|
| `Field`  | `Group`     |
| `I8`     | `Group`     |
| `I16`    | `Group`     |
| `I32`    | `Group`     |
| `I64`    | `Group`     |
| `I128`   | `Group`     |
| `U8`     | `Group`     |
| `U16`    | `Group`     |
| `U32`    | `Group`     |
| `U64`    | `Group`     |
| `U128`   | `Group`     |
| `Scalar` | `Group`     |
| `Struct` | `Group`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon2::hash_to_scalar`

```leo
let a: scalar = Poseidon2::hash_to_scalar(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 2, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Scalar` value.

#### Supported Types

| First    | Destination  |
|----------|:-------------|
| `Field`  | `Scalar`     |
| `I8`     | `Scalar`     |
| `I16`    | `Scalar`     |
| `I32`    | `Scalar`     |
| `I64`    | `Scalar`     |
| `I128`   | `Scalar`     |
| `U8`     | `Scalar`     |
| `U16`    | `Scalar`     |
| `U32`    | `Scalar`     |
| `U64`    | `Scalar`     |
| `U128`   | `Scalar`     |
| `Scalar` | `Scalar`     |
| `Struct` | `Scalar`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon4::hash_to_scalar`

```leo
let a: scalar = Poseidon4::hash_to_scalar(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 4, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Scalar` value.

#### Supported Types

| First    | Destination  |
|----------|:-------------|
| `Field`  | `Scalar`     |
| `I8`     | `Scalar`     |
| `I16`    | `Scalar`     |
| `I32`    | `Scalar`     |
| `I64`    | `Scalar`     |
| `I128`   | `Scalar`     |
| `U8`     | `Scalar`     |
| `U16`    | `Scalar`     |
| `U32`    | `Scalar`     |
| `U64`    | `Scalar`     |
| `U128`   | `Scalar`     |
| `Scalar` | `Scalar`     |
| `Struct` | `Scalar`     |

[Back to Top](#table-of-standard-operators)
***

### `Poseidon8::hash_to_scalar`

```leo
let a: scalar = Poseidon8::hash_to_scalar(1u128);
```

#### Description

Calculates a Poseidon hash with an input rate of 8, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Scalar` value.

#### Supported Types

| First    | Destination  |
|----------|:-------------|
| `Field`  | `Scalar`     |
| `I8`     | `Scalar`     |
| `I16`    | `Scalar`     |
| `I32`    | `Scalar`     |
| `I64`    | `Scalar`     |
| `I128`   | `Scalar`     |
| `U8`     | `Scalar`     |
| `U16`    | `Scalar`     |
| `U32`    | `Scalar`     |
| `U64`    | `Scalar`     |
| `U128`   | `Scalar`     |
| `Scalar` | `Scalar`     |
| `Struct` | `Scalar`     |

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

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Address` | `Address` | `Boolean`   |
| `Boolean` | `Boolean` | `Boolean`   |
| `Field`   | `Field`   | `Boolean`   |
| `Group`   | `Group`   | `Boolean`   |
| `I8`      | `I8`      | `Boolean`   |
| `I16`     | `I16`     | `Boolean`   |
| `I32`     | `I32`     | `Boolean`   |
| `I64`     | `I64`     | `Boolean`   |
| `I128`    | `I128`    | `Boolean`   |
| `U8`      | `U8`      | `Boolean`   |
| `U16`     | `U16`     | `Boolean`   |
| `U32`     | `U32`     | `Boolean`   |
| `U64`     | `U64`     | `Boolean`   |
| `U128`    | `U128`    | `Boolean`   |
| `Scalar`  | `Scalar`  | `Boolean`   |
| `Struct`  | `Struct`  | `Boolean`   |
| `Record`  | `Record`  | `Boolean`   |

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

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Address` | `Address` | `Boolean`   |
| `Boolean` | `Boolean` | `Boolean`   |
| `Field`   | `Field`   | `Boolean`   |
| `Group`   | `Group`   | `Boolean`   |
| `I8`      | `I8`      | `Boolean`   |
| `I16`     | `I16`     | `Boolean`   |
| `I32`     | `I32`     | `Boolean`   |
| `I64`     | `I64`     | `Boolean`   |
| `I128`    | `I128`    | `Boolean`   |
| `U8`      | `U8`      | `Boolean`   |
| `U16`     | `U16`     | `Boolean`   |
| `U32`     | `U32`     | `Boolean`   |
| `U64`     | `U64`     | `Boolean`   |
| `U128`    | `U128`    | `Boolean`   |
| `Scalar`  | `Scalar`  | `Boolean`   |
| `Struct`  | `Struct`  | `Boolean`   |
| `Record`  | `Record`  | `Boolean`   |

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

| Condition | First     | Second    | Destination |
|-----------|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean` | `Boolean`   |
| `Boolean` | `Field`   | `Field`   | `Field`     |
| `Boolean` | `Group`   | `Group`   | `Group`     |
| `Boolean` | `I8`      | `I8`      | `I8`        |
| `Boolean` | `I16`     | `I16`     | `I16`       |
| `Boolean` | `I32`     | `I32`     | `I32`       |
| `Boolean` | `I64`     | `I64`     | `I64`       |
| `Boolean` | `I128`    | `I128`    | `I128`      |
| `Boolean` | `U8`      | `U8`      | `U8`        |
| `Boolean` | `U16`     | `U16`     | `U16`       |
| `Boolean` | `U32`     | `U32`     | `U32`       |
| `Boolean` | `U64`     | `U64`     | `U64`       |
| `Boolean` | `U128`    | `U128`    | `U128`      |
| `Boolean` | `Scalar`  | `Scalar`  | `Scalar`    |

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
