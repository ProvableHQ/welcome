---
title: Arrays
sidebar_label: Arrays
---

Leo supports static arrays with fixed size. 
**Dynamic arrays do not exist in Leo**. 
You cannot change the values of an array once they are initialized.

### Array type
The array type specifies the type and number of elements being stored.

#### Syntax:
`type[size]`

#### Example: 
```leo title="Array type that stores 3 elements with type u32"
u32[3]
```

### Array expression
Create an array with brackets `[]`.

#### Syntax:
`[element1, element2, ... elementN]`

#### Example:
```leo title="Array that stores values 1, 2, 3 with type u32"
[1, 2, 3]
```

### Array initializer
Create an array of the same element with size `size`.

#### Syntax:
`[element; size]` 

#### Example:
```leo title="Array that stores values 1, 1, 1 with type u32"
[1u32; 3]]
```

### Array Indexing

Access an element of an array starting at index 0.

#### Syntax:
`array[index]`

#### Example:
```leo
let arr: u32[4] = [1, 2, 3, 4];

let first = arr[0]; // access the first element
```

### Array Slicing
Access a subset of an array. 

#### Syntax:
`array[from_index..to_index]`

* Omitting `from_index` defaults to index 0.
* Omitting `to_index` defaults to the length of the array.

#### Example:
```leo
let arr: u32[4] = [0, 1, 2, 3];

let first_two = arr[..1]; // access the first two elements of the array

let middle_two = arr[1..2]; // access the middle two elements of the array

let last_two = arr[2..]; // access the last two elements of the array
```

### Spread Operator
Copies the elements of one array into another. Element types must match.
Equivalent to slicing all elements of an array.

#### Syntax:
`...array`

#### Example:
```leo
let arr: u32[4] = [0, 1, 2, 3];

let arr_with_4: u32[5] = [...arr, 4];
```

### More Array Examples

```leo
function main() -> u32[2] {
    // initialize an integer array with integer values
    let mut a: u32[3] = [1, 2, 3];

    // set a mutable member to a value
    a[2] = 4;

    // initialize an array of 4 values all equal to 42
    let b = [42u8; 4];

    // initialize an array of 5 values copying all elements of b using a spread
    let c = [1, ...b];

    // initialize an array copying a slice from `c`
    let d = c[1..3];

    // initialize a field array
    let e = [5field; 2];

    // initialize a boolean array
    let f = [true, false || true, true];

    return d
}
```

### Multidimensional Arrays

Leo supports multidimensional arrays of primitive values.

```leo
function main() -> u32[3][2] {
    let m = [[0u32, 0u32, 0u32], 
             [0u32, 0u32, 0u32]];

    let m: u32[3][2] = [[0; 3]; 2];

    return m
}
```

#### Multidimensional Array Type
The explicit type for a multidimensional array is written: 

`data_type[1st dimension][2nd dimension]..[Nth dimension]`

#### Multidimensional Array Indexing
To access an element of a multidimensional array:

`name[Nth dimension access]..[2nd dimension access][1st dimension access]`

#### Example:

```leo title="src/main.leo"
function main() -> u32 {
    let mut m: u32[3][2] = [[0u32, 1u32, 2u32],
                            [3u32, 4u32, 5u32]];

    return m[1][2]
}
```
1. Allocate an array with 3 columns and 2 rows of type u32 `u32[3][2]`. 
2. We would like to return value `5u32`.
3. Access the second row located at index 1 `m[1]`.
4. Access the third column located at index 2 `m[1][2]`.
5. Verify the program output is `5u32` with `leo run`.