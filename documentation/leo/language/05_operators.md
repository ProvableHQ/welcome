---
id: operators
title: Operators
---

Operators in Leo compute a value based off of one or more expressions.

# Arithmetic Operators

Leo will try to detect arithmetic operation errors as soon as possible. 
If an integer overflow or division by zero can be identified at compile time Leo will quickly tell the programmer.
Otherwise, the error will be caught at proving time when main function inputs are fetched.

## Addition

Adds `first` with `second`, storing the outcome in `destination`.
For integer types, a constraint is added to check for overflow. 
For cases where wrapping semantics are needed for integer types, see the `Add Wrapped` operator.

```leo
let a: u8 = 1u8 + 1u8;
// a is equal to 2

a += 1;
// a is now equal to 3

a = a.add(1u8);
// a is now equal to 4
```

|          Operation           |      Operators      |                                   Supported Types                                    |
|:----------------------------:|:-------------------:|:------------------------------------------------------------------------------------:|
|           addition           |  `+` `+=` `.add()`  | `field` `group` `scalar` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128` |
|      wrapping addition       |  `.add_wrapped()`   |             `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`              |                              
|       negation(unary)        |    `-` `.neg()`     |                    `field` `group` `i8` `i16` `i32` `i64` `i128`                     | 
|     subtraction(binary)      |  `-` `-=` `.sub()`  |     `field` `group` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`      |
| wrapping subtraction(binary) |  `.sub_wrapped()`   |     `field` `group` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`      |
|        multiplication        |  `*` `*=` `.mul()`  | `field` `group` `scalar` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128` |
|   wrapping multiplication    |  `.mul_wrapped()`   |             `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`              |
|           division           |  `/` `/=` `.div()`  |         `field` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`          |
|      wrapping division       |  `.div_wrapped()`   |             `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`              |
|        exponentiation        | `**` `**=` `.pow()` |         `field` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`          |
|   wrapping exponentiation    |  `.pow_wrapped()`   |             `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`              |

# Logical Operators

| Operation | Operators | Supported Types |
|:---------:|:---------:|:---------------:|
| AND       | `&&`      | `bool`          |
| OR        | `\|\|`    | `bool`          |
| NOT       | `!`       | `bool`          |

# Relational Operators

Relational operators will always resolve to a boolean `bool` value.

|       Operation       | Operators |           Supported Types           |
|:---------------------:|:---------:|:-----------------------------------:|
| equal                 | `==`      | `bool`, `group`, `field`, integers, addresses, arrays, tuples, circuits |
| not-equal             | `!=`      | `bool`, `group`, `field`, integers, addresses, arrays, tuples, circuits |
| less than             | `<`       |           integers              |
| less than or equal    | `<=`      |           integers              |
| greater than          | `>`       |           integers              |
| greater than or equal | `>=`      |           integers              |

# Operator Precedence
Operators will prioritize evaluation according to:

|            Operator           | Associativity |
|:-----------------------------:|:-------------:|
|              `!`              |               |
|              `**`             | right to left |
|             `*` `/`           | left to right |
|             `+` `-`           | left to right |
|       `<` `>` `<=` `>=`       |               |
|           `==` `!=`           | left to right |
|              `&&`             | left to right |
|            <code>&#124;&#124;</code>             | left to right |
| `=` `+=` `-=` `*=` `/=` `**=` |               |

## Parentheses

To prioritize a different evaluation use parentheses `()` around the expression.

```leo
let result = (a + 1) * 2; 
```
`(a + 1)` will be evaluated before multiplying by two `* 2`
