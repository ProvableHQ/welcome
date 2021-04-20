---
id: arrays_and_tuples
title: Arrays
sidebar_label: Arrays and Tuples
---

## Indexing
Arrays and tuples in Leo are zero indexed.

## Array Types
Leo supports arrays of all types:
arrays of integers, arrays of field elements, arrays of circuits, etc.
An array type is defined by both the type and the number of its elements:
for example, the type of arrays of `u8` integers of length 3
is different from
both the type of arrays of `u8` integers of length 10
and the type of arrays of `u16` integers of length 3.

## Array Expression
Create an array with brackets `[]`.

```leo
let a = [1u8, 2u8, 3u8];
let b: [u32; 3] = [1, 2, 3];
```

## Array Initializer
Create an array of the same element with a fixed size.

```leo
let a = [1u32; 3];
let b: [u32; 3] = [1; 3];
```

## Array Indexing

Access an element of an array starting at index 0. Indices must be a `u8`, `u16`, or `u32`.
```leo
let arr: [u32; 4] = [1, 2, 3, 4];

let first = arr[0]; // access the first element
```

## Array Slicing
Access a subset of an array. 
The `from` index must be a `u8`, `u16`, or `u32`: it is the first element of the range. Omitting the `from` index will default to index 0.
The `to` index must be a `u8`, `u16`, or `u32`: it is one past the last element of the range. Omitting the `to` index defaults to the length of the array.

```leo
let arr: [u32; 4] = [0, 1, 2, 3];

let first_two = arr[..2]; // = [0, 1]

let middle_two = arr[1..2]; // = [1]

let last_two = arr[2..]; // = [2, 3]
```

## Array Spread Operator
Copies the elements of one array into another. Element types must match.
An array spread may only occur inside an inline array construction expression `[..., ..., ...]`:
the spread is equivalent to listing its elements in the inline array construction expression.

```leo
let arr_4: [u32; 4] = [1, 1, 1, 1];

let arr_5: [u32; 5] = [...arr_4, 1]; // Evaluates to [1, 1, 1, 1, 1]
```

### Notes on Fixed Size
Leo supports static arrays with fixed size. 
**Dynamic arrays do not exist in Leo**. 
You cannot change the length of an array once it is initialized.

### More Array Examples

```leo
// initialize an integer array with integer values
let a: [u32; 3] = [1, 2, 3];

// set an element to a value
a[2] = 4;

// initialize an array of 4 values all equal to 42
let b = [42u32; 4];

// initialize an array of 5 values copying all elements of b using a spread
let c = [1u32, ...b];

// initialize an array copying a slice from `c`
let d = c[1..3];

// initialize a field array
let e = [5field; 2];

// initialize a boolean array
let f = [true, false || true, true];
```

## Multi-dimensional Arrays

Leo supports multi-dimensional arrays.
These are simply arrays whose elements are arrays.

```leo
function main() -> [[u32; 3]; 2] {
    let a = [[0u32, 0u32, 0u32],
             [0u32, 0u32, 0u32]];

    let b: [[u32; 3]; 2] = [[0; 3]; 2];

    console.log("Arrays are equal: {}", a == b);

    return a;
}
```

The value `[[0; 3]; 2]` is read as: An array of length 2 of arrays of length 3 with elements `0u32`.

### Multi-dimensional Array Tuple Syntax

For increased readability, the dimensions of a multi-dimensional array can be specified in a tuple.

```leo
function main() -> [u32; (2, 3)] {
    let a = [[0u32, 0u32, 0u32], 
             [0u32, 0u32, 0u32]];

    let b: [u32; (2, 3)] = [0; (2, 3)];

    console.log("Arrays are equal: {}", a == b);

    return a;
}
```

The value `[0; (2, 3)]` is read the same as the bracket notation: An array of length 2 of arrays of length 3 with elements `0u32`.

:::note
Array tuple syntax is merely syntactic sugar for the more verbose bracket notation
:::

**Valid multidimensional arrays**
```leo
let a: [[u32; 2]; 3] = [[0; 2]; 3]; // brackets only

let b: [[u32; 2]; 3] = [0; (3, 2)]; // bracket array type and tuple array expression

let c: [u32; (3, 2)] = [0; (3, 2)]; // tuples only

let d: [u32; (3, 2)] = [[0; 2]; 3]; // tuple array type and bracket array expression
```

### Multi-dimensional Array Indexing

```leo
function main() -> u32 {
    let m: [[u32; 3]; 2] = [[0u32, 1u32, 2u32],
                            [3u32, 4u32, 5u32]];

    return m[1][2];
}
```
1. Allocate an array with 3 columns and 2 rows of type `u32` `[[u32; 3]; 2]`. 
2. We would like to return value `5u32`.
3. Access the second row located at index 1 `m[1]`.
4. Access the third column located at index 2 `m[1][2]`.
5. Verify the program output is `5u32` with `leo run`.

# Tuples
Leo supports tuples of other data types.
Tuple values are accessed with a dot `.` the index must be a non-negative numeric literal.

```leo
let a = (true, true);

let b: (bool, bool) = (true, true);

let first = a.0;
let second = b.1;
```
