---
id: flying_tour
title: A Flying Tour of Leo
---


The best way to get to know Leo is by writing some code. We will fly through a high level overview of a Leo file.
To gain a deeper understanding of the Leo language, continue to the [next page](01_layout.md).


**Square Root Example**: Let's prove that we know the square root of a number.

**`src/main.leo`**
```rust // change this to leo
function main(a: u32, b: u32) -> bool {
    return square_root(a, b)
}

function square_root(a: u32, b: u32) -> bool {
    return a * a == b
}

test function test_square_root() {
    let a: u32 = 5;
    let b: u32 = 25;
    
    let result = square_root(a, b);

    console.assert(result == true);
}
```
## 1. Data Types

Leo supports boolean, unsigned integer, signed integer, field, group element, and address [data types](03_types.md). Data types in Leo 
must be explicitly stated `let a: u32 = 5`;
Collections of data types can be created in the form of static [arrays and tuples](04_arrays_and_tuples.md).

## 2 Functions
The `main` [function](07_functions.md) is the entrypoint of a Leo program. 
[`leo run`](../cli/07_run.md) will provide private [inputs](08_inputs.md) directly to the function for proving and store the program result in an output file.

The `square_root` function is called by `main` with private inputs `a` and `b` which are both unsigned `u32` integers.

## 3. Testing

A naive way to test `square_root` would be to execute `leo run` several times on different inputs and check the output of the program each time.

Luckily, we can write [unit tests](12_tests.md) in Leo using the `test function` syntax. 
In `test_square_root` we can sanity check our code without having to load in private inputs from a file every time. 
Want to upgrade your test function into an integration test? 
In Leo you can add a [test context annotation](12_tests.md#test-context-annotation) that loads different sets of private inputs to make your test suite even more robust.

The last line of `test_square_root` uses the console function `console.assert`. 
This function along with `console.log`, `console.debug`, and `console.error` provide developers with tools that are run without
affecting the underlying constraint system. 


## 4. Circuits

**Circuits Example**

**`src/main.leo`**
```rust
circuit Point {
    x: u32,
    y: u32,

    static function new() -> Self {
        return Self { 
            x: 0, 
            y: 0, 
        }
    }

    function add() -> u32 {
        return self.x + self.y
    }
}

function main() {
    let mut p = Point::new();
    
    p.x = 4u32;
    p.y = 6u32;

    let sum = p.add();
    
    console.log("The sum is {}", sum);
}
```

[Circuits](09_circuits.md) in leo are similar to structures in other object-oriented languages. 
They provide a composite data type that can store primitive values and provide functions for instantiation and computation.

The `static` keyword modifies the `new` function so it can be called without instantiating the circuit.

Leo introduces `Self` and `self` keywords to access circuit member values.

## 5. Imports

[Imports](10_imports.md) fetch other circuits and functions and bring them into the current file scope. 
Leo supports imports for dependencies that are declared locally or in an imported package.
Importing packages can be accomplished using the [**`leo add`**](../cli/09_add.md) command in the CLI.

**This completes the flying tour!** 

## The Leo Language
To learn more about how to use the Leo Language, start [here](01_layout.md)

## The Leo CLI
To learn more about how to use the Leo CLI, start [here](../cli/00_new.md)