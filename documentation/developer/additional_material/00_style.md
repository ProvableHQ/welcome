---
id: style
title: Style Guide
---

This guide is provided to point developers in the right direction when writing Leo code.
There are many conventions that are unique to Leo language and the circuits it generates.

This guide is a living document. 
As new Leo programming conventions arise and old ones become obsolete this guide should reflect the changes.
Feel free to add your comments and recommendations [here](03_contributing.md).


## Code Layout

### Indentation
4 spaces per indentation level

### Blank lines

A single blank line should separate `circuits`, `functions`, and `tests`.
Multiple imports can be optionally separated by a single blank line. 
The last import at the top of the file should be followed by a blank line.

```leo title="Yes:"
import std.io.Write;
import std.math.Add;

circuit A {
    // ...
}

function foo() {
    // ...
}

@test
function test_foo() {
    // ...
}
```

```leo title="No:"
import std.io.Write;


import std.math.Add;
circuit A {
    // ...
}
function foo() {
    // ...
}

@test
function test_foo() {
    // ...
}
```
### Naming Conventions

| Item                | Convention                          |
|---------------------|-------------------------------------|
| Packages            | kebab-case (but prefer single word) |
| Circuits            | CamelCase                           |
| Circuit Members     | snake_case                          |
| Functions           | snake_case                          |
| Function Parameters | snake_case                          |
| Variables           | snake_case                          |
| Inputs              | snake_case                          |
| Tests               | snake_case                          |

### Circuit Definitions

* Circuits should have value members defined above function members and be separated by a single blank line.
* Multiple value members should be comma separated and have their own line. 
* Static functions should be defined before non-static functions.

```leo
circuit A {
    x: u32;
    y: u32;

    function new() {
        // ...
    }

    function foo(self) {
        // ...
    }
}
```

### Layout
Leo file elements should be ordered:
1. Imports
2. Circuits
3. Functions
4. Tests

### Braces
Opening braces always go on the same line.
```leo
circuit A {
    // ...
}

function main() {
    // ...
}

let a = A { };
```
### Semicolons
Every statement except for the `return` statement should end in a semicolon.
```leo
let a = 1u32;
let mut b = a + 5;
b *= 2;

return b
```

### Commas
Trailing commas should be included whenever the closing delimiter appears on a separate line.
```leo 
let a = A { x: 0, y: 1 };

let a = A {
    x: 0,
    y: 1,
};
```


