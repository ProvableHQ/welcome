---
id: common
title: Common Patterns
---

Building off of the style guide, here is a list of common patterns that a Leo developer may encounter
as well as the recommended code solution.

## Branches

Conditional `if else` statements in Leo are expensive. It is preferred to use ternary `if ? :` expressions.

```leo title="Example:"
if (condition) {
    return a
else {
    return b
} 
```

```leo title="Alternative:"
return if condition? a : b
```

