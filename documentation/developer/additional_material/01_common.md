---
id: common
title: Common Patterns
---

Building off of the style guide, here is a list of common patterns that a Leo developer may encounter
as well as the recommended code solution.

## Conditional Branches

Conditional `if else` statements in Leo are expensive. It is preferred to use ternary `? :` expressions.

```leo title="Example:"
if (condition) {
    return a
} else {
    return b
} 
```

```leo title="Alternative:"
return condition ? a : b
```

### Why?
Ternary expressions are the cheapest form of conditional.
We can resolve the *first expression* and *second expression* values before evaluating the *condition*.
This is very easy to convert into a circuit because we know that each expression does not depend on information in later statements.

In the original `Example`,
We cannot resolve the return statements before evaluating the condition. 
As a solution, Leo creates branches in the circuit so both paths can be evaluated.
 
```leo title="branch 1, condition = true"
return a
```
 
```leo title="branch 2, condition = false"
return b
```
When the input value `condition` is fetched at proving time, we select a branch of the circuit to evaluate.
Observe that the statement `return a` is repeated in both branches. 
The cost of every computation within the conditional will be doubled.
This greatly increases the constraint numbers and slows down the circuit.
