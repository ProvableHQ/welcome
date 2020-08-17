---
id: arrays_and_tuples
title: Arrays
sidebar_label: Arrays and Tuples
---

## Indexing
Arrays and tuples in Leo are zero indexed.

Leo supports static arrays with fixed size. 
**Dynamic arrays do not exist in Leo**. 
You cannot change the values of an array once they are initialized.

### Array Type
The array type specifies the type and number of elements being stored.

#### Syntax:
> *type*[*size*]

Type is any supported data type.
Size must be a `u32`.

#### Example: 
```leo title="Array type that stores 3 elements with type u32"
u32[3]
```

### Array Expression
Create an array with brackets `[]`.

#### Syntax:
> [*value1*, *value2*, ... *valueN*]

#### Example:
```leo title="Array that stores values 1, 2, 3 with type u32"
[1, 2, 3]
```

### Array Initializer
Create an array of the same element with size `size`.

#### Syntax:
> [*value*; *size*] 

Size must be a `u32`.

#### Example:
```leo title="Array that stores values 1, 1, 1 with type u32"
[1u32; 3]
```

### Array Indexing

Access an element of an array starting at index 0.

#### Syntax:
> *array*[*index*]

Array is the name of an array we are accessing.
Index must be a `u32`.

#### Example:
```leo
let arr: u32[4] = [1, 2, 3, 4];

let first = arr[0]; // access the first element
```

### Array Slicing
Access a subset of an array. 

#### Syntax:
> *array*[*from_index*..*to_index*]

Array is the name of an array we are accessing.
From index must be a u32. Omitting from index defaults to index 0.
To index must be a u32. Omitting to_index defaults to the length of the array.

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
> ...*array*

Array is the name of an array we are accessing.

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

### Multi-dimensional Arrays

Leo supports multi-dimensional arrays of primitive values.

```leo
function main() -> u32[3][2] {
    let m = [[0u32, 0u32, 0u32], 
             [0u32, 0u32, 0u32]];

    let m: u32[3][2] = [[0; 3]; 2];

    return m
}
```

#### Multi-dimensional Array Type
The explicit type for a multi-dimensional array is written: 

#### Syntax
> *type*[*1st dimension*][*2nd dimension*]..[*Nth dimension*]`

Type is any supported data type.
Dimensions must be `u32`.

#### Multi-dimensional Array Indexing
To access an element of a multi-dimensional array:

> *array*[*Nth dimension index*]..[*2nd dimension index*][*1st dimension index*]`

Type is any supported data type.
Dimension indices must be `u32`.

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

# Tuples

**Type**
> (*type1*, *type2*, ... *typeN*)

**Value**
> (*value1*, *value2*, ... *valueN*)

Tuple values can be accessed with 
> *tuple*.*index*

Tuple is the name of the tuple we are accessing.
Index must be a `u32`

```leo
let a = (true, true);

let a: (bool, bool) = (true, true);

let first = a.0;
let second = a.1;

```
