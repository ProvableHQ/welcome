---
id: bubble_sort
title: Bubble Sort
sidebar_label: Bubble Sort
---

:::caution
This design is not standardized and currently unstable.
:::

We implement a bubble sorting algorithm on an array of u32 elements.
Bubble sort is a standard algorithm that works by examining each set of adjacent elements, from left to right, and swapping positions if they are out of order.
This process is repeated until there are no more swaps to be made, resulting in a sorted array.

The bubble sort function below takes as input a mutable array of ten u32 elements, and returns a sorted array of the same size.

```leo
// Executes the bubble sorting algorithm.
function bubble_sort(arr: [u32; 10]) -> [u32; 10] {
    // Traverse the entire array
    for i in 0..9 {
        for j in 0..9-i {
            // Move the smaller elements forward
            if arr[j+1] < arr[j] {
                // Swap the elemets at indexes ‘j‘ and ‘j+1‘
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            } 
        }
    }
    return arr;
}
```

We provide below a example test function for checking the correctness of the bubble sort function, which when ran, outputs the results to the console, as shown in the following block.

```leo
@test
function test_bubble_sort() {
    let unsorted: [u32; 10]
        = [8u32, 2u32, 4u32, 3u32, 5u32, 10u32, 7u32, 1u32, 9u32, 6u32];
    let expected: [u32; 10]
        = [1u32, 2u32, 3u32, 4u32, 5u32, 6u32, 7u32, 8u32, 9u32, 10u32];
    
    let result = bubble_sort(unsorted);
    console.log("Result is: {}", result);
    console.assert(result == expected);
}
```

The full code is outlined below:

```leo title="src/main.leo"
// The 'bubble-sort' main function.

function bubble_sort(arr: [u32; 10]) -> [u32; 10] {
    // Traverse the entire array
    for i in 0..9 {
        for j in 0..9-i {
            // Move the smaller elements forward
            if arr[j+1] < arr[j] {
                // Swap the elements at indexes ‘j‘ and ‘j+1‘
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }
    return arr;
}

function main(unsorted: [u32; 10]) -> [u32; 10] {
    return bubble_sort(unsorted);
}

@test
function test_bubble_sort() {
    let unsorted: [u32; 10] = [34u32, 52u32, 999999u32, 84u32, 215u32, 102u32, 888u32, 9292u32, 50482u32, 954u32];
    let sorted_expected: [u32; 10] = [34u32, 52u32, 84u32, 102u32, 215u32, 888u32, 954u32, 9292u32, 50482u32, 999999u32];

    let sorted_actual = bubble_sort(unsorted);

    console.log("{}", sorted_actual);
    console.assert(sorted_expected == sorted_actual);
}
```

```leo title="inputs/bubble_sort.in"
// The program input for bubble-sort/src/main.leo
[main]
unsorted: [u32; 10] = [8u32, 2u32, 4u32, 3u32, 5u32, 10u32, 7u32, 1u32, 9u32, 6u32];

[registers]
sorted: [u32; 10] = [0; 10];
```

## Testing

```bash
Test Running 1 tests
Test Result is: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Test bubble-sort::test_bubble_sort ... ok

Test Tests passed in 8 milliseconds. 1 passed; 0 failed;
Done Finished in 10 milliseconds
```
