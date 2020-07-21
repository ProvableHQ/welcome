---
title: Operators
sidebar_label: Operators
---

Operators in Leo compute a value based off of one or more expressions.

## Implicit evaluation
Since Leo programs compile down to a circuit, Leo enforces a strict type system.
When evaluating an operator that has an implicit expression, Leo will try and resolve the type based off of previous statements.

## Arithmetic Operators

Leo will try to detect arithmetic operation errors as soon as possible. 
If an integer overflow or division by zero can be identified at compile time Leo will quickly tell the programmer.
Otherwise, the error will be caught at proving time when main function inputs are fetched.

| Operation        |  Operators |         Supported Types        |
|:----------------:|:----------:|:------------------------------:|
| addition         |  `+` `+=`  | `group`, `field`, integers |
| subtraction      |  `-` `-=`  | `group`, `field`, integers |
| multiplication   |  `*` `*=`  |     `field`, integers      |
| division         |  `/` `/=`  |     `field`, integers      |
| exponentiation   | `**` `**=` |        integers            |

## Logical Operators

| Operation | Operators | Supported Types |
|:---------:|:---------:|:---------------:|
| AND       | `&&`      | `bool`          |
| OR        | \| \|     | `bool`          |
| NOT       | `!`       | `bool`          |

## Relational Operators

Relational operators will always resolve to a boolean `bool` value.

|       Operation       | Operators |           Supported Types           |
|:---------------------:|:---------:|:-----------------------------------:|
| equal                 | `==`      | `group`, `field`, integers      |
| not-equal             | `!=`      | `group` ,  `field` , integers |
| less than             | `<`       |           integers              |
| less than or equal    | `<=`      |           integers              |
| greater than          | `>`       |           integers              |
| greater than or equal | `>=`      |           integers              |

## Operator Precedence
Operators will prioritize evaluation according to:

|            Operator           | Associativity |
|:-----------------------------:|:-------------:|
|              `!`              |               |
|              `**`             | left to right |
|             `*` `/`           | left to right |
|             `+` `-`           | left to right |
|  `==` `!=` `<` `>` `<=` `>=`  | left to right |
|              `&&`             | left to right |
|             \| \|             | left to right |
| `=` `+=` `-=` `*=` `/=` `**=` |               |

To prioritize a different evaluation use parentheses `()` around the expression.

```leo title="evaluate addition before multiplication"
let result = (a + 1) * 2; 
```