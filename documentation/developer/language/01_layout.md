---
id: layout
title: Layout of a Leo Program
---

A Leo program contains declarations of [Imports](#imports), [Functions](#functions), [Circuits](#circuits), 
and [Tests](#tests). Ordering is not enforced. However, it is best practice to declare imports at the top of the file and tests at the bottom.
Declarations are locally accessible within a program file. If you need a declaration from another program file, you must import it.

### Functions

[Functions](07_functions.md) contain statements that can compute values. 
Functions must be in a program's current scope to be called.

```leo
function square(a: u32) -> u32 {
    return a * a;
}
```

### Circuits

[Circuits](09_circuits.md) are similar to structs in object-oriented languages. They can contain members that store values or declare functions.

```leo
circuit Point {
    x: u32;
    y: u32;

    function sum(self) -> u32 {
        return self.x + self.y;
    }
}
```

### Imports

[Imports](10_imports.md) fetch other circuits and functions and bring them into the current file scope.
You can import dependencies that are declared locally in the `src` directory or downloaded to the `imports` directory.

```leo
import math.square; // Import the function `square` from a package `math`.

function main() {
    let a: u32 = square(5u32);
}
```

### Tests

Each [test](12_tests.md) function generates new constraints for an isolated test circuit.
The input to a test can be specified with the [test annotation](12_tests.md#annotation-arguments).
Tests are executed with the Leo [test command](../cli/05_test.md).

```leo
function square(a: u32) -> u32 {
    return a * a;
}

@test
function test_square() {
    let expected: u32 = 25;

    let actual = square(5u32);

    console.assert(expected == actual);
}
```

## Leo Binaries

The **main.leo** file in a Leo project is similar to a binary executable created in languages such as Rust.
Leo CLI commands use **main.leo** as a starting point to pass in witness input values and generate proofs to produce a result.
