---
id: console
title: Console Functions
---

Leo supports `console.assert`, `console.log`, `console.debug`, and `console.error` console functions.

## Console Assert

The expression inside of a `console.assert` must evaluate to a boolean.
The assert function is most commonly used in [**testing**](aleo/documentation/developer/language/12_tests.md).

```leo
function square(a: u32) -> u32 {
    return a * a
}

test function test_square() {
    let expected: u32 = 25;

    let actual = square(5u32);

    console.assert(expected == actual);
}
```

:::info
The `console.assert` function does not produce any constraints in the circuit. This makes it ideal for testing!
:::

## Console Log, Debug, and Error

Logging functions like `console.log`, `console.debug`, and `console.error` require a format string as an argument. 

### Format Strings
The first argument a macro receives is a format string. This must be a string literal. The power of the formatting string is in the `{}`'s contained.
Additional parameters passed to a console method replace the `{}`'s within the formatting string in the order given.

Format string syntax is intended to be familiar to those coming from C's `printf`/`fprintf` functions or Python's `str.format`.

```leo
console.log("Hello");                   // => "Hello"
console.log("The number is {}", 1u32);  // => "the number is 1u32"
console.log("{} {}", 1u32, 2u32);)      // => "1 2"
```


### `console.log`
Prints the formatted value to the console.
```leo title="src/main.leo"
function main(a: u32) {
    console.log("a is {}", a);
}
```
In your terminal, run:
```bash
leo build
```
```bash title="console output:"
  leo  a is [input]u32
  leo  Compiled program file "/Users/collinchin/development/leo/tmp/src/main.leo"
```

Since the Leo compiler does not parse input values until the proving phase the formatted of input `a` is printed as `[input]`.

```leo title="inputs/{$NAME}.in
[main]
a: u32 = 1u32;
```

Provide the input inside a Leo input `.in` file with the package name under the main section. In your terminal, run:

```leo
leo prove
```

```bash title="console output:"
  leo  Compiled program file "/Users/collinchin/development/leo/tmp/src/main.leo"
  leo  Setup complete
  leo  Program setup complete
  leo  Proving...
  leo  a is 1u32  // <- logged value
  leo  Program output: []
  leo  Prover completed in 233 milliseconds
  leo  Proof stored ("/Users/collinchin/development/leo/tmp/outputs/tmp.proof")
  leo  Completed program proving
```

The result of `leo prove` now prints out the input value that we provided. 

### `console.debug`
Enabled by specifying the `-d` flag after a Leo command.
```leo
function main(a: u32) {
    console.debug("a is {}", a);
}
```

### `console.error`
Prints the error to console. 
```leo
function main(a: u32) {
    console.error("a is {}", a);
}
```
:::warning
`console.error` does not halt circuit execution.
:::