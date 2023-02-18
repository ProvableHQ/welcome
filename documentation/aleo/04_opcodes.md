---
id: opcodes
title: Aleo Opcodes Reference
sidebar_label: Opcodes
---

The following lists show the standard and cryptographic opcodes supported by Leo.

## Table of Standard Opcodes
| Name                              | Description                        |
| --------------------------------- |:---------------------------------- |
| [abs](#abs)                       | Absolute value operation           |
| [abs.w](#absw)                    | Wrapping absolute value operation  |
| [add](#add)                       | Addition operation                 |
| [add.w](#addw)                    | Wrapping addition operation        |
| [and](#and)                       | AND operation                      |
| [assert.eq](#asserteq)            | Assert equality                    |
| [assert.neq](#assertneq)          | Assert non-equality                |
| [div](#div)                       | Division operation                 |
| [div.w](#divw)                    | Wrapping division operation        |
| [double](#double)                 | Double operation                   |
| [gt](#gt)                         | Greater than comparison            |
| [gte](#gte)                       | Greater than or equal to comparison|
| [inv](#inv)                       | Multiplicative inverse operation   |
| [is.eq](#iseq)                    | Equality comparison                |
| [is.neq](#isneq)                  | Not equal comparison               |
| [lt](#lt)                         | Less than comparison               |
| [lte](#lte)                       | Less than or equal to comparison   |
| [mod](#mod)                       | Arithmetic modulo operation        |
| [mul](#mul)                       | Multiplication operation           |
| [mul.w](#mulw)                    | Wrapping multiplication operation  |
| [nand](#nand)                     | `Boolean` NAND operation           |
| [neg](#neg)                       | Additive inverse operation         |
| [nor](#nor)                       | `Boolean` NOR operation            |
| [not](#not)                       | NOT operation                      |
| [or](#or)                         | OR Operation                       |
| [pow](#pow)                       | Exponentiation operation           |
| [pow.w](#poww)                    | Wrapping exponentiation operation  |
| [rem](#rem)                       | Remainder operation                |
| [rem.w](#remw)                    | Wrapping remainder operation       |
| [shl](#shl)                       | Shift left operation               |
| [shl.w](#shlw)                    | Wrapping shift left operation      |
| [shr](#shr)                       | Shift right operation              |
| [shr.w](#shrw)                    | Wrapping shift right operation     |
| [sqrt](#sqrt)                     | Square root operation              |
| [square](#square)                 | Square operation                   |
| [sub](#sub)                       | Subtraction operation              |
| [sub.w](#subw)                    | Wrapping subtraction operation     |
| [ternary](#ternary)               | Ternary select operation           |
| [xor](#xor)                       | XOR operation                      |

## Table of Cryptographic Opcodes
| Name                              | Description                        |
| --------------------------------- |:---------------------------------- |
| [commit.bhp256](#commitbhp256)   | 256-bit input BHP commitment        |
| [commit.bhp512](#commitbhp512)   | 512-bit input BHP commitment        |
| [commit.bhp768](#commitbhp768)   | 768-bit input BHP commitment        |
| [commit.bhp1024](#commitbhp1024) | 1024-bit input BHP commitment       |
| [commit.ped64](#commitped64)     | 64-bit input Pedersen commitment    |
| [commit.ped128](#commitped128)   | 128-bit input Pedersen commitment   |
| [hash.bhp256](#hashbhp256)       | 256-bit input BHP hash              |
| [hash.bhp512](#hashbhp512)       | 512-bit input BHP hash              |
| [hash.bhp768](#hashbhp768)       | 768-bit input BHP hash              |
| [hash.bhp1024](#hashbhp1024)     | 1024-bit input BHP hash             |
| [hash.ped64](#hashped64)         | 64-bit input Pedersen hash          |
| [hash.ped128](#hashped128)       | 128-bit input Pedersen hash         |
| [hash.psd2](#hashpsd2)           | Poseidon hash with input rate 2     |
| [hash.psd4](#hashpsd4)           | Poseidon hash with input rate 4     |
| [hash.psd8](#hashpsd8)           | Poseidon hash with input rate 8     |


## Specification

The following is the specification for each opcode in the Aleo Virtual Machine (AVM).

### `abs`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes the absolute value of the input, checking for overflow, storing the result in the destination register.

For integer types, a constraint is added to check for underflow. For cases where wrapping semantics are needed, see the [abs.w](#abs.w) instruction. This underflow happens when the input is the minimum value of a signed integer type. For example, `abs -128i8` would result in underflow, since `128` cannot be represented as an `i8`.

#### Supported Types

| Input  | Destination |
| ------ |:----------- |
| `I8`   | `I8`        |
| `I16`  | `I16`       |
| `I32`  | `I32`       |
| `I64`  | `I64`       |
| `I128` | `I128`      |
<!-- | `U8`   | `U8`        | -->
<!-- | `U16`  | `U16`       | -->
<!-- | `U32`  | `U32`       | -->
<!-- | `U64`  | `U64`       | -->
<!-- | `U128` | `U128`      | -->

***

### `abs.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Compute the absolute value of the input, wrapping around at the boundary of the type, and storing the result in the destination register.

#### Supported Types

| Input  | Destination |
| ------ |:----------- |
| `I8`   | `I8`        |
| `I16`  | `I16`       |
| `I32`  | `I32`       |
| `I64`  | `I64`       |
| `I128` | `I128`      |
<!-- | `U8`   | `U8`        | -->
<!-- | `U16`  | `U16`       | -->
<!-- | `U32`  | `U32`       | -->
<!-- | `U64`  | `U64`       | -->
<!-- | `U128` | `U128`      | -->

***

### `add`

[Back to Top](#table-of-standard-opcodes)

#### Description

Adds `first` with `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow. For cases where wrapping semantics are needed for integer types, see the [add.w](#add.w) instruction.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
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

***

### `add.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Adds `first` with `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Supported Types

| First  | Second | Destination |
| ------ | ------ |:----------- |
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

***

### `and`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs an AND operation on integer (bitwise) or boolean `first` and `second`,
storing the outcome in `destination`.

#### Supported Types

| First     | Second    | Destination |
| --------- | --------- |:----------- |
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

***

### `assert.eq`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks whether `first` and `second` are equal, halting if they are not equal.

#### Supported Types

| First       | Second      |
| ----------- | ----------- |
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
| `Struct`    | `Struct`    |
| `Record`    | `Record`    |

***

### `assert.neq`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks whether `first` and `second` are not equal, halting if they are equal.

#### Supported Types

| First       | Second      |
| ----------- | ----------- |
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
| `Struct`    | `Struct`    |
| `Record`    | `Record`    |

***

### `commit.bhp256`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 256-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First       | Second    | Destination |
| ----------- | --------- |:----------- |
| `Address`   | `Scalar`  | `Field`     |
| `Boolean`   | `Scalar`  | `Field`     |
| `Field`     | `Scalar`  | `Field`     |
| `Group`     | `Scalar`  | `Field`     |
| `I8`        | `Scalar`  | `Field`     |
| `I16`       | `Scalar`  | `Field`     |
| `I32`       | `Scalar`  | `Field`     |
| `I64`       | `Scalar`  | `Field`     |
| `I128`      | `Scalar`  | `Field`     |
| `U8`        | `Scalar`  | `Field`     |
| `U16`       | `Scalar`  | `Field`     |
| `U32`       | `Scalar`  | `Field`     |
| `U64`       | `Scalar`  | `Field`     |
| `U128`      | `Scalar`  | `Field`     |
| `Scalar`    | `Scalar`  | `Field`     |
| `String`    | `Scalar`  | `Field`     |
| `Struct`    | `Scalar`  | `Field`     |

***

### `commit.bhp512`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 512-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First       | Second    | Destination |
| ----------- | --------- |:----------- |
| `Address`   | `Scalar`  | `Field`     |
| `Boolean`   | `Scalar`  | `Field`     |
| `Field`     | `Scalar`  | `Field`     |
| `Group`     | `Scalar`  | `Field`     |
| `I8`        | `Scalar`  | `Field`     |
| `I16`       | `Scalar`  | `Field`     |
| `I32`       | `Scalar`  | `Field`     |
| `I64`       | `Scalar`  | `Field`     |
| `I128`      | `Scalar`  | `Field`     |
| `U8`        | `Scalar`  | `Field`     |
| `U16`       | `Scalar`  | `Field`     |
| `U32`       | `Scalar`  | `Field`     |
| `U64`       | `Scalar`  | `Field`     |
| `U128`      | `Scalar`  | `Field`     |
| `Scalar`    | `Scalar`  | `Field`     |
| `String`    | `Scalar`  | `Field`     |
| `Struct`    | `Scalar`  | `Field`     |

***

### `commit.bhp768`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 768-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First       | Second    | Destination |
| ----------- | --------- |:----------- |
| `Address`   | `Scalar`  | `Field`     |
| `Boolean`   | `Scalar`  | `Field`     |
| `Field`     | `Scalar`  | `Field`     |
| `Group`     | `Scalar`  | `Field`     |
| `I8`        | `Scalar`  | `Field`     |
| `I16`       | `Scalar`  | `Field`     |
| `I32`       | `Scalar`  | `Field`     |
| `I64`       | `Scalar`  | `Field`     |
| `I128`      | `Scalar`  | `Field`     |
| `U8`        | `Scalar`  | `Field`     |
| `U16`       | `Scalar`  | `Field`     |
| `U32`       | `Scalar`  | `Field`     |
| `U64`       | `Scalar`  | `Field`     |
| `U128`      | `Scalar`  | `Field`     |
| `Scalar`    | `Scalar`  | `Field`     |
| `String`    | `Scalar`  | `Field`     |
| `Struct`    | `Scalar`  | `Field`     |

***

### `commit.bhp1024`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 1024-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Field` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First       | Second    | Destination |
| ----------- | --------- |:----------- |
| `Address`   | `Scalar`  | `Field`     |
| `Boolean`   | `Scalar`  | `Field`     |
| `Field`     | `Scalar`  | `Field`     |
| `Group`     | `Scalar`  | `Field`     |
| `I8`        | `Scalar`  | `Field`     |
| `I16`       | `Scalar`  | `Field`     |
| `I32`       | `Scalar`  | `Field`     |
| `I64`       | `Scalar`  | `Field`     |
| `I128`      | `Scalar`  | `Field`     |
| `U8`        | `Scalar`  | `Field`     |
| `U16`       | `Scalar`  | `Field`     |
| `U32`       | `Scalar`  | `Field`     |
| `U64`       | `Scalar`  | `Field`     |
| `U128`      | `Scalar`  | `Field`     |
| `Scalar`    | `Scalar`  | `Field`     |
| `String`    | `Scalar`  | `Field`     |
| `Struct`    | `Scalar`  | `Field`     |

***

### `commit.ped64`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen commitment up to a 64-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given `String` or `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First       | Second    | Destination |
| ----------- | --------- |:----------- |
| `Boolean`   | `Scalar`  | `Group`     |
| `I8`        | `Scalar`  | `Group`     |
| `I16`       | `Scalar`  | `Group`     |
| `I32`       | `Scalar`  | `Group`     |
| `I64`       | `Scalar`  | `Group`     |
| `U8`        | `Scalar`  | `Group`     |
| `U16`       | `Scalar`  | `Group`     |
| `U32`       | `Scalar`  | `Group`     |
| `U64`       | `Scalar`  | `Group`     |
| `String`    | `Scalar`  | `Group`     |
| `Struct`    | `Scalar`  | `Group`     |

***

### `commit.ped128`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen commitment up to a 128-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be a `Group` value.

The instruction will halt if the given `String` or `Struct` value exceeds the 128-bit limit.

#### Supported Types

| First       | Second    | Destination |
| ----------- | --------- |:----------- |
| `Boolean`   | `Scalar`  | `Group`     |
| `I8`        | `Scalar`  | `Group`     |
| `I16`       | `Scalar`  | `Group`     |
| `I32`       | `Scalar`  | `Group`     |
| `I64`       | `Scalar`  | `Group`     |
| `I128`      | `Scalar`  | `Group`     |
| `U8`        | `Scalar`  | `Group`     |
| `U16`       | `Scalar`  | `Group`     |
| `U32`       | `Scalar`  | `Group`     |
| `U64`       | `Scalar`  | `Group`     |
| `U128`      | `Scalar`  | `Group`     |
| `String`    | `Scalar`  | `Group`     |
| `Struct`    | `Scalar`  | `Group`     |

***

### `div`

[Back to Top](#table-of-standard-opcodes)

#### Description

Divides `first` by `second`, storing the outcome in `destination`. Halts on division by zero.

For integer types, this operation performs truncated division. Furthermore, a constraint is added to check for underflow. This underflow happens when dividing the minimum value of a signed integer type by `-1`. For example, `div -128i8 -1i8` would result in underflow, since `128` cannot be represented as an `i8`.


For cases where wrapping semantics are needed for integer types, see the [div.w](#div.w) instruction.

#### Supported Types

| First   | Second  | Destination |
| ------- | ------- |:----------- |
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

***

### `div.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Divides `first` by `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Supported Types

| First  | Second | Destination |
| ------ | ------ |:----------- |
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

***

### `double`

[Back to Top](#table-of-standard-opcodes)

#### Description

Doubles the input, storing the outcome in `destination`.


#### Supported Types

| Input   | Destination |
| ------- | ----------- |
| `Field` | `Field`     |
| `Group` | `Group`     |

***

### `gt`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks if `first` is greater than `second`, storing the result in `destination`.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
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
<!-- | `Address`| `Address`| `Boolean`   | -->


***

### `gte`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks if `first` is greater than or equal to `second`, storing the result in `destination`.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
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
<!-- | `Address`| `Address`| `Boolean`   | -->



***

### `hash.bhp256`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Address`   | `Field`     |
| `Boolean`   | `Field`     |
| `Field`     | `Field`     |
| `Group`     | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `I128`      | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `U128`      | `Field`     |
| `Scalar`    | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `hash.bhp512`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 512-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Address`   | `Field`     |
| `Boolean`   | `Field`     |
| `Field`     | `Field`     |
| `Group`     | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `I128`      | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `U128`      | `Field`     |
| `Scalar`    | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `hash.bhp768`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 768-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given input is smaller than 129 bits.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Address`   | `Field`     |
| `Boolean`   | `Field`     |
| `Field`     | `Field`     |
| `Group`     | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `I128`      | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `U128`      | `Field`     |
| `Scalar`    | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `hash.bhp1024`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 1024-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given input is smaller than 171 bits.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Address`   | `Field`     |
| `Boolean`   | `Field`     |
| `Field`     | `Field`     |
| `Group`     | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `I128`      | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `U128`      | `Field`     |
| `Scalar`    | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `hash.ped64`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen hash up to a 64-bit input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given `String` or `Struct` value exceeds the 64-bit limit.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Boolean`   | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `hash.ped128`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen hash up to a 128-bit input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

The instruction will halt if the given `String` or `Struct` value exceeds the 128-bit limit.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Boolean`   | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `I128`      | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `U128`      | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `hash.psd2`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 2, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Field`     | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `I128`      | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `U128`      | `Field`     |
| `Scalar`    | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `hash.psd4`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 4, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Field`     | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `I128`      | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `U128`      | `Field`     |
| `Scalar`    | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `hash.psd8`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 8, from an input in `first`, storing the hash in `destination`. The produced hash will always be a `Field` value.

#### Supported Types

| First       | Destination |
| ----------- |:----------- |
| `Field`     | `Field`     |
| `I8`        | `Field`     |
| `I16`       | `Field`     |
| `I32`       | `Field`     |
| `I64`       | `Field`     |
| `I128`      | `Field`     |
| `U8`        | `Field`     |
| `U16`       | `Field`     |
| `U32`       | `Field`     |
| `U64`       | `Field`     |
| `U128`      | `Field`     |
| `Scalar`    | `Field`     |
| `String`    | `Field`     |
| `Struct`    | `Field`     |

***

### `inv`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes the multiplicative inverse of the input, storing the outcome in `destination`.

#### Supported Types

| Input   | Destination |
| ------- | ----------- |
| `Field` | `Field`     |

***

### `is.eq`

[Back to Top](#table-of-standard-opcodes)

#### Description

Compares `first` and `second`, storing the result in `destination`.

#### Supported Types

| First       | Second      | Destination |
| ----------- | ----------- | ----------- |
| `Address`   | `Address`   | `Address`   |
| `Boolean`   | `Boolean`   | `Boolean`   |
| `Field`     | `Field`     | `Field`     |
| `Group`     | `Group`     | `Group`     |
| `I8`        | `I8`        | `I8`        |
| `I16`       | `I16`       | `I16`       |
| `I32`       | `I32`       | `I32`       |
| `I64`       | `I64`       | `I64`       |
| `I128`      | `I128`      | `I128`      |
| `U8`        | `U8`        | `U8`        |
| `U16`       | `U16`       | `U16`       |
| `U32`       |  `U32`      | `U32`       |
| `U64`       | `U64`       | `U64`       |
| `U128`      | `U128`      | `U128`      |
| `Scalar`    | `Scalar`    | `Scalar`    |
| `Struct`    | `Struct`    | `Struct`    |
| `Record`    | `Record`    | `Record`    |

***

### `is.neq`

[Back to Top](#table-of-standard-opcodes)

#### Description

Returns true if `first` is not equal to `second`, storing the result in `destination`.

#### Supported Types

| First       | Second      | Destination |
| ----------- | ----------- | ----------- |
| `Address`   | `Address`   | `Address`   |
| `Boolean`   | `Boolean`   | `Boolean`   |
| `Field`     | `Field`     | `Field`     |
| `Group`     | `Group`     | `Group`     |
| `I8`        | `I8`        | `I8`        |
| `I16`       | `I16`       | `I16`       |
| `I32`       | `I32`       | `I32`       |
| `I64`       | `I64`       | `I64`       |
| `I128`      | `I128`      | `I128`      |
| `U8`        | `U8`        | `U8`        |
| `U16`       | `U16`       | `U16`       |
| `U32`       |  `U32`      | `U32`       |
| `U64`       | `U64`       | `U64`       |
| `U128`      | `U128`      | `U128`      |
| `Scalar`    | `Scalar`    | `Scalar`    |
| `Struct`    | `Struct`    | `Struct`    |
| `Record`    | `Record`    | `Record`    |

***

### `lt`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks if `first` is less than `second`, storing the outcome in `destination`.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
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
<!-- | `Address`| `Address`| `Boolean`   | -->


***

### `lte`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks if `first` is less than or equal to `second`, storing the outcome in `destination`.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
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
<!-- | `Address`| `Address`| `Boolean`   | -->

***

### `mod`

[Back to Top](#table-of-standard-opcodes)

#### Description

Takes the modulus of `first` with respect to `second`, storing the outcome in `destination`. Halts if `second` is zero.

The semantics of this operation are consistent with the mathematical definition of modulo operation.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
| `U8`     | `U8`     | `U8`        |
| `U16`    | `U16`    | `U16`       |
| `U32`    | `U32`    | `U32`       |
| `U64`    | `U64`    | `U64`       |
| `U128`   | `U128`   | `U128`      |

***

### `mul`

[Back to Top](#table-of-standard-opcodes)

#### Description

Multiplies `first` with `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow/underflow. For cases where wrapping semantics are needed for integer types, see the [mul.w](#mul.w) instruction.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
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

***

### `mul.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Multiplies `first` with `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Supported Types

| First  | Second | Destination |
| ------ | ------ | ----------- |
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

***

### `nand`

[Back to Top](#table-of-standard-opcodes)

#### Description

Returns false only if `first` and `second` are true, storing the outcome in `destination`.

#### Supported Types

| First     | Second    | Destination |
| --------- | --------- | ----------- |
| `Boolean` | `Boolean` | `Boolean`   |

***

### `neg`

[Back to Top](#table-of-standard-opcodes)

#### Description

Negates `first`, storing the outcome in `destination`.

For signed integer types, calling `neg` on the minimum value is an invalid operation. For example, the input `-128i8` would not be valid since `128` cannot be represented as an `i8`.

#### Supported Types

| Input   | Destination |
| ------- | ----------- |
| `Field` | `Field`     |
| `Group` | `Group`     |
| `I8`    | `I8`        |
| `I16`   | `I16`       |
| `I32`   | `I32`       |
| `I64`   | `I64`       |
| `I128`  | `I128`      |

***

### `nor`

[Back to Top](#table-of-standard-opcodes)

#### Description

Returns true when neither `first` nor `second` is true, storing the outcome in `destination`.

#### Supported Type

| First     | Second    | Destination |
| --------- | --------- | ----------- |
| `Boolean` | `Boolean` | `Boolean`   |

***

### `not`

[Back to Top](#table-of-standard-opcodes)

#### Description

Perform a NOT operation on an integer (bitwise) or boolean input, storing the outcome in `destination`.

#### Supported Types

| Input     | Destination |
| --------- | ----------- |
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

***

### or

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs an OR operation on integer (bitwise) or boolean `first` and `second`, storing the outcome in `destination`.

#### Supported Types

| First     | Second    | Destination |
| --------- | --------- | ----------- |
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

***

### `pow`

[Back to Top](#table-of-standard-opcodes)

#### Description

Raises `first` to the power of `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow/underflow. For cases where wrapping semantics are needed for integer types, see the [pow.w](#pow.w) instruction.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First   | Second      | Destination |
| ------- | ----------- | ----------- |
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

***

### `pow.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Raises `first` to the power of `second`, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
| ------ | ----------- | ----------- |
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

***


### `rem`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes the truncated remainder of `first` divided by `second`, storing the outcome in `destination`. Halts on division by zero.


A constraint is added to check for underflow.  This underflow happens when the associated division operation, [div](#div), underflows.

For cases where wrapping semantics are needed for integer types, see the [rem.w](#rem.w) instruction.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
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

***

### `rem.w`

[Back to Top](#table-of-standard-opcodes)

#### Description
Computes the truncated remainder of `first` divided by `second`, wrapping around at the boundary of the type, and storing the outcome in destination.

#### Supported Types

| First    | Second   | Destination |
| -------- | -------- | ----------- |
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

***

### `shl`

[Back to Top](#table-of-standard-opcodes)

#### Description

Shifts `first` left by `second` bits, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
| ------ | ----------- | ----------- |
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

***

### `shl.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Shifts `first` left by `second` bits, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
| ------ | ----------- | ----------- |
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

***

### `shr`

[Back to Top](#table-of-standard-opcodes)

#### Description

Shifts `first` right by `second` bits, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
| ------ | ----------- | ----------- |
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

***

### `shr.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Shifts `first` right by `second` bits, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
| ------ | ----------- | ----------- |
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

***

### `square`

[Back to Top](#table-of-standard-opcodes)

#### Description

Squares the input, storing the outcome in `destination`.

#### Supported Types

| Input   | Destination |
| ------- | ----------- |
| `Field` | `Field`     |

***

### `sqrt`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes the square root of the input, storing the outcome in `destination`.

#### Supported Types

| Input   | Destination |
| ------- | ----------- |
| `Field` | `Field`     |

***


### `sub`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes `first - second`, storing the outcome in `destination`.

#### Supported Types

| First   | Second  | Destination |
| ------- | ------- | ----------- |
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

***

### `sub.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes `first - second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Supported Types

| First  | Second | Destination |
| ------ | ------ | ----------- |
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

***

### `ternary`

[Back to Top](#table-of-standard-opcodes)

#### Description

Selects `first`, if `condition` is true, otherwise selects `second`, storing the result in `destination`.

Example: `ternary r0 r1 r2 into r3`, where `r0` is the condition, `r1` is first, `r2` is second, and `r3` is the destination.

#### Supported Types

| Condition | First     | Second    | Destination |
| --------- | --------- | --------- | ----------- |
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

***

### `xor`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a XOR operation on integer (bitwise) or boolean `first` and `second`, storing the outcome in `destination`.

#### Supported Types

| First     | Second    | Destination |
| --------- | --------- | ----------- |
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

***