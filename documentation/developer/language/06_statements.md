---
id: statements
title: Statements
---

## Conditionals

Branching in Leo differs from traditional programming languages. Leo developers should keep in mind that every program compiles to a circuit which represents
all possible evaluations.

## If Else Ternary Expression

A conditional (ternary) expression takes three operands.

1. A *condition* that evaluates to a boolean followed by a question mark `?`.
2. A *first expression* to execute if the *condition* is true followed by a colon `:`
3. A *second expression* to execute if the *condition* is false followed by a semicolon `;`

```leo
let a = x >= 5u8 ? 1u8 : 0u8;
let b: u8 = is_valid ? 1 : 0;
```

:::info
Ternary expressions are [**the cheapest**](../additional_material/01_common.md#branches) form of conditional.
:::

## If Statement

The boolean condition in an `if` statement does not require parenthesis. The statements to execute require brackets `{}`.

```leo
if a == 0 {
    a += 1; // statement
}
```

## If Else Statement

`else` and `else if` clauses can be used to chain `if` statements.

#### Example
```leo
if a {
    res = 1;
} else if b {
    res = 2;
} else {
    res = 3;
}
```

## For loops
Leo supports `for` loops with bounded iteration. `from_number` and `to_number` must be constant numbers.

```leo
for i in 0..4 {
    a += 1;
}
```

:::info
For more information on branching patterns in Leo see [**Common Patterns**](../additional_material/01_common.md#branches).
:::
