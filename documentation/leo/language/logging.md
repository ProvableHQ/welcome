---
hide_title: true
sidebar_label: Logging
---

# Logging

Leo supports `print!`, `debug!`, and `error!` logging macros.

The first argument a macro receives is a format string. This must be a string literal. The power of the formatting string is in the `{}`s contained.

Additional parameters passed to a macro replace the `{}`s within the formatting string in the order given.

#### `print!`
Prints the formatted value to the console.
```leo title="src/main.leo"
function main(a: u32) {
    print!("a is {}", a);
}
```
```bash
leo build
```
```bash title="console output:"
a is [input]u32
  leo  Compiled program file "/Users/collinchin/development/leo/tmp/src/main.leo"
```

Since the Leo compiler does not parse input values until the proving phase the formatted of input `a` is printed as `[input]`.

```leo title="inputs/{$NAME}.in
[main]
a: u32 = 1u32;
```

Provide the input inside a Leo input `.in` file with the package name under the main section.

```leo
leo prove
```

```bash title="console output:"
  leo  Compiled program file "/Users/collinchin/development/leo/tmp/src/main.leo"
  leo  Setup complete
  leo  Program setup complete
  leo  Proving...
a is 1u32
  leo  Program output: []
  leo  Prover completed in 233 milliseconds
  leo  Proof stored ("/Users/collinchin/development/leo/tmp/outputs/tmp.proof")
  leo  Completed program proving
```

The result of `leo prove` now prints out the input value that we provided. 

#### `debug!`
Enabled by specifying the `-d` flag after a Leo command.
```leo
function main(a: u32) {
    debug!("a is {}", a);
}
```




#### `error!`
Prints the error to console.
```leo
function main(a: u32) {
    error!("a is {}", a);
}
```