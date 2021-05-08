---
id: flying_tour
title: A Flying Tour of Leo
---


The best way to get to know Leo is by writing some code. We will fly through a high level overview of a Leo file.
To gain a deeper understanding of the Leo language, continue to the [next page](01_layout.md).


**Square Example**: Let's prove that we know the square of a number.

**`src/main.leo`**
```leo
function main(a: u32, b: u32) -> bool {
    return square(a, b);
}

function square(a: u32, b: u32) -> bool {
    return a * a == b;
}

@test
function test_square() {
    let a: u32 = 5;
    let b: u32 = 25;
    
    let result = square(a, b);

    console.assert(result == true);
}
```
**`inputs/square/square.in`**
```leo
// The program input for /src/main.leo
[main]
a: u32 = 5;
b: u32 = 25;

[registers]
r: u32 = false;
```
## 1. Data Types

Leo supports boolean, unsigned integer, signed integer, field, group, and address [data types](03_types.md). Data types in Leo 
must be explicitly stated `let a: u32 = 5`;
Collections of data types can be created in the form of static [arrays and tuples](04_arrays_and_tuples.md).

## 2 Functions
The `main` [function](07_functions.md) is the entrypoint of a Leo program. 
[`leo run`](../cli/08_run.md) will provide private [inputs](08_inputs.md) directly to the function for proving and store the program result in an output file.

The `square` function is called by `main` with private inputs `a` and `b` which are both unsigned `u32` integers.

## 3. Testing

A naive way to test `square` would be to execute `leo run` several times on different inputs and check the output of the program each time.

Luckily, we can write [unit tests](12_tests.md) in Leo using the `@test` syntax and run them using [`leo test`](../cli/05_test.md). 
In `test_square` we can sanity check our code without having to load in private inputs from a file every time. 
Want to upgrade your unit test into an integration test? 
In Leo you can provide [arguments](12_tests.md#test-annotation-arguments) that load different sets of private inputs to make your test suite even more robust.

The last line of `test_square` uses the console function `console.assert`. 
This function along with `console.log`, `console.debug`, and `console.error` provide developers with tools that are run without
affecting the underlying constraint system. 


## 4. Circuits

**Circuits Example**

**`src/main.leo`**
```leo
circuit Point {
    x: u32;
    y: u32;

    function new() -> Self {
        return Self { 
            x: 0, 
            y: 0, 
        };
    }

    function add(self) -> u32 {
        return self.x + self.y;
    }
}

function main() {
    let p = Point::new();
    
    p.x = 4u32;
    p.y = 6u32;

    let sum = p.add();
    
    console.log("The sum is {}", sum);
}
```

[Circuits](09_circuits.md) in leo are similar to structures in other object-oriented languages. 
They provide a composite data type that can store any value and provide functions for instantiation and computation.

The `new` function is static and can be called without instantiating the circuit.

Leo introduces `Self` and `self` keywords to access circuit member variables and functions.

## 5. Imports

[Imports](10_imports.md) fetch other circuits and functions and bring them into the current file scope. 
Leo supports imports for dependencies that are declared locally or in an imported package.
Importing packages can be accomplished using the [**`leo add`**](../cli/11_add.md) command in the CLI.

**This completes the flying tour!** 

## The Leo Language
To learn more about how to use the Leo Language, start [here](01_layout.md)

## The Leo CLI
To learn more about how to use the Leo CLI, start [here](../cli/01_new.md)
