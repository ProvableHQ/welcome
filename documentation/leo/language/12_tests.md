---
id: tests
title: Writing Tests
---

## Annotations

Annotations provide additional metadata to a definition in Leo.

:::info
Annotations are a work in progress. Currently only the `@test` annotation is supported.
:::

Use the `@test` annotation to define tests in a leo program.

```leo
function main(a: u32) -> u32 {
    return a;
}

@test
function test_main() {
    let a = 1u32;

    let res = main(a);

    console.assert(res == 1u32);
}

@test
function test_ne() {
    console.assert(1u8 != 0u8);
}
```
To run tests, use the `leo test` CLI [command](../cli/05_test.md).

## Console Assert Function

The console [assert function](11_console.md#console-assert) was add specifically for testing purposes.
You can use it to check that an expression evaluates to a true boolean value.

```leo
function main() {
    console.assert(45u32 == 45u32);
  
    console.assert(2field == 2field);
  
    console.assert(true == true);
}
```

## The Anatomy of a Test Function
Inside the Leo `@test` function body you have access to all `imports`, `circuits`, and `functions` in the current scope.
```leo title="src/main.leo"
function add_one(a: u32) -> u32 {
    return a + 1;
}

@test
function test_add_one() {
    let one = 1u32;
    let two = 2u32;

    let res = add_one(one);
    
    console.assert(two == res);
}
```

In `test_add_one` we initialize **allocated** values `one` and `two`.
We provide `one` as an input to the `add_one` function and save the result in `res`.
In a real program execution, we would expect `one` to be provided in a Leo input `.in` file.

The last line of the test asserts that the type and value of `two` is equal to result `res`.

Next, run the test with
```bash
leo test
```

```leo title="console output:"
      Test Running 1 tests
      Test testing::test_add_one ... ok

      Done Tests passed in 10 milliseconds. 1 passed; 0 failed;
```
**Success!**

The console output clearly states that our test passed, and our constraint system is satisfied.

### Failing Tests
```leo title="src/main.leo"
function add_one(a: u32) -> u32 {
    return a + 1;
}

@test
function test_add_one() {
    let one = 1u32;
    let two = 2u32;

    let res = add_one(one);
    
    console.assert(one == res); // <- changed to `one`
}
```

Change the last line of `test_add_one` to assert that `one` is equal to the result `res`.

Run the test with
```bash
leo test
```

```leo title="console output:"
      Test Running 1 tests
      Test testing::test_add_one failed due to error

    --> "testing/src/main.leo": 11:5
     |
  11 |      console.assert(one == res);
     |      ^^^^^^^^^^^^^^^^^^^^^^^^^^^
     |
     = Assertion `one == res` failed

      Done Tests failed in 10 milliseconds. 0 passed; 1 failed;
```

As expected, the test now fails. The console output tells us the exact line where the assertion failed.

### Failing Test Compilation 

Tests with invalid syntax will fail before their circuit is run.

```leo title="src/main.leo"
function add_one(a: u32) -> u32 {
    return a + 1;
}

@test
function test_add_one() {
    let one = 1u32;
    let two = 2u32;

    let res = add_one(one, one); // <- added `one` as input
    
    console.assert(one == res);
}
```

Add a second `one` as input to the function call to `add_one`.

```leo title="console output:"
      Test Running 1 tests
      Test testing::test_add_one failed due to error

    --> "testing/src/main.leo": 1:1
     |
   1 |  function add_one(a: u32) -> u32 {
     |
     |
     = function expected 1 input variables, found 2

      Done Tests failed in 10 milliseconds. 0 passed; 1 failed;
```

As expected, the test fails telling us that we incorrectly provided 2 inputs to the `add_one` function.
Since we failed before running the circuit, there is no output about the constraint system.

## Annotation Arguments

One or more arguments can be passed into an annotation using parenthesis `()`

### Test Annotation Arguments
The `@test` annotation can take one argument that will be used as the file name for input and output files.
For integration tests, one can invoke [`.in`](08_inputs.md#program-inputs) and [`.state`](../programming_model/00_model.md#state-file) files to load the correct input and state as follows:
 
For example, one could invoke it as any of the following examples:
```leo
@test(production) //  production.in, production.state, production.out
function token_withdraw() {
    ...
}

@test(custom)   //  custom.in, custom.state, custom.out
function token_withdraw() {
    ...
}
```

**Example**
Create a directory in the `/inputs` directory named `/production`.
Add a file named `production.in` and a file named `production.state`. 

```leo title="inputs/production/production.in"
[main]
a: u32 = 1;
```
```leo title="inputs/production/production.state"
// empty
```

Use the test annotation to load the production input environment into the program test.

```leo title="src/main.leo"
function add_one(a: u32) -> u32 {
    return a + 1;
}

@test(production)
function test_add_one_production(a: u32) { // `a` is provided by the `production.in` file
    let expected = a + 1;

    let actual = add_one(a);

    console.assert(expected == actual);
}
```

Run the tests.

```bash
leo test
```

```bash title="console output:"
      Test Running 1 tests
      Test testing::test_add_one_production ... ok

      Done Tests passed in 10 milliseconds. 1 passed; 0 failed;
```