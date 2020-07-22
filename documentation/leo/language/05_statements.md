---
id: statements
title: Statements
---

## Conditionals

Branching in Leo differs from traditional programming languages. Leo developers should keep in mind that every program compiles to a circuit which represents
all possible evaluations.

### If Else Ternary Expression

A conditional (ternary) expression takes three operands.

1. A **condition** boolean followed by a question mark `?`.
2. A **first expression** to execute if the **condition** is true followed by a colon `:`
3. A **second expression** to execute if the **condition** is false followed by a semicolon `;`

#### Syntax 

`if condition ? first_expression : second_expression;`

#### Example

```leo
// Returns true if a is zero
function is_zero(a: u32) -> bool {
    return if a == 0u32 ? true : false
}
```

#### Cost
Ternary expressions are the cheapest form of conditional.
We can resolve the **first expression** and **second expression** values before evaluating the **condition**.
This is very easy to convert into a circuit because we know that each expression does not depend on information in later statements. 

### If Conditional Statement

A traditional `if` statement that executes a **statement** if a specified **condition** is truthy.

#### Syntax:
```if condition { statement } ```

#### Example:
```leo
function main(mut a: u32) -> u32 {
    if a == 0 {
        a += 1; // statement
    }
    
    return a // another statement
```

#### Cost

We cannot resolve the statements before evaluating the condition. 
As a solution, Leo creates a branch in the circuit so both paths can be evaluated.

```leo title="branch 1, a == 0"
a += 1;
return a
```

```leo title="branch 2, a != 0"
return a
```
Now when the input value `a` is fetched at proving time, we simply select a branch of the circuit to evaluate.

:::info
Conditional statements can cost significantly more than ternary expressions.
:::

#### Increasing costs
Observe that the statement `return a` is repeated in both branches. 
Imagine that the statement made a call to a `large_circuit_with_many_constraints()`.
We have now doubled the number of constraints in our program.

Even though we only return the result of one branch of the circuit at proving time, 
all branches need to be created for the circuit to function properly. 

### If Else Conditional Statement

Adds an `else` and a **statement2** to the above definition. 
Executes **statement2** if **condition** is true.

#### Syntax
```leo 
if condition {
    statement1 
} else { 
    statement2
}    
```

`if` statements can be chained using an `else if` clause.
```leo
if condition1 {
    statement1 
} else if condition2 { 
    statement2
} else {
    statement3
}
```

#### Example
```leo
function main(a: bool, b: bool) -> u32 {
    let mut res = 0u32;

    if a {
        res = 1;
    } else if b {
        res = 2;
    } else {
        res = 3;
    }

    return res
}
```

#### Cost
Following the branching convention from the `if` statement, the following branches are created:
```leo title="branch1, a = true"
res = 1;
return res
```

```leo title="branch2, a = false, b = true"
res = 2;
return res
```

```leo title="branch3, a = false, b = false"
res = 3;
return res
```

## For loops
Leo supports `for` loops with bounded iteration. `from_number` and `to_number` must be constant numbers.

#### Syntax

```leo
for variable in from_number..to_number {
    statement
}
```

#### Example

```leo
function main(mut a: u32) -> field {
    for i in 0..4 {
        a += 1;
    }
    return a
}
```

#### Cost
`for` loops have a variable cost depending on their usage.

Static `for` loops without early termination have cost equal to the number of constraints within a loop times the number of loops.
The above example represents this type of loop. Which does not create any additional branches in the circuit.

Consider adding a conditional statement with early termination to the loop:

```leo
function main(mut a: u32) -> field {
    for i in 0..4 {
        if a == 5 {
            return 0
        } else {
            a += 1;
        }
    }

    return a
}
```

Following the conditional branching convention, one evaluation of the loop results in two branches

```leo title="branch1, a = 5"
return 0;
```

```leo title="branch2, a != 5"
a += 1;
```

Two possible branches, multiplied by 4 loops = 8 branches generated in the circuit by the `for` loop.
