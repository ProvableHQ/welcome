---
id: cheatsheet
title: Leo Syntax Cheatsheet
---

## 1. File Import
```leo
import foo.leo;
```

## 2. Programs
```leo
program hello.aleo {
    // code
}
```

## 3. Data Types
```leo
let b: bool = false; // boolean
let i: u8 = 1u8; // unsigned integer
let a: field = 1field; // field element
let g: group = 0group; // group element
let s: scalar = 1scalar; // scalar element
let receiver: address = aleo1ezamst4pjgj9zfxqq0fwfj8a4cjuqndmasgata3hggzqygggnyfq6kmyd4; // address
```

## 4. Records
```leo
record token {
    owner: address,
    microcredits: u64,
    amount: u64,
}
```

## 5. Structs
```leo
struct message {
    sender: address,
    object: u64,
}
```

## 6. Transitions
```leo
transition mint_public(
    public receiver: address,
    public amount: u64,
) -> token { /* Your code here */ }
```

## 7. Functions
```leo
function compute(a: u64, b: u64) -> u64 {
    return a + b;
}
```

## 8. Inline Functions
```leo
inline foo(
    a: field,
    b: field,
) -> field {
    return a + b;
}
```

The rules for functions (in the traditional sense) are as follows:

There are three variants of functions: transition, function, inline.
transitions can only call functions and inlines.
functions can only call inlines.
inlines can only call inlines.
Direct/indirect recursive calls are not allowed


## 9. For Loops
```leo
let count: u32 = 0u32;

for i: u32 in 0u32..5u32 {
    count += 1u32;
}
```

## 10. Mappings
```leo
mapping balances: address => u64;

let contains_bal: bool = Mapping::contains(balances, receiver);
let get_bal: u64 = Mapping::get(balances, receiver);
let get_or_use_bal: u64 = Mapping::get_or_use(balances, receiver, 0u64);
let set_bal: () = Mapping::set(balances, receiver, 100u64);
let remove_bal: () = Mapping::remove(balances, receiver);
```

## 11. Commands
```leo
transition matches(height: u32) { 
    return then finalize(height); 
}
finalize matches(height: u32) {
    assert_eq(height, block.height); // block.height returns latest block height
}

let g: group = group::GEN; // the group generator
let result: u32 = ChaCha::rand_u32(); // generate a random type `ChaCha::rand_<type>()`
let owner: address = self.caller; // address of the program function caller
let hash: field = BHP256::hash_to_field(1u32); // hash any type to any type
let commit: group = Pedersen64::commit_to_group(1u64, 1scalar); // commit any type to a field, group, or address, using a scalar as blinding factor

let a: bool = true;
assert(a); // assert the value of a is true

let a: u8 = 1u8;
let b: u8 = 2u8;
assert_eq(a, a); // assert a and b are equal
assert_neq(a, b); // assert a and b are not equal
```


## 12. Operators
```leo
let sum: u64 = a + b; // arithmetic addition
let diff: u64 = a - b; // arithmetic subtraction
let prod: u64 = a * b; // arithmetic multiplication
let quot: u64 = a / b; // arithmetic division
let remainder: u64 = a % b; // arithmetic remainder
let neg: u64 = -a; // negation
let bitwise_and: u64 = a & b; // bitwise AND
let bitwise_or: u64 = a | b; // bitwise OR
let bitwise_xor: u64 = a ^ b; // bitwise XOR
let bitwise_not: u64 = !a; // bitwise NOT
let logical_and: bool = a && b; // logical AND
let logical_or: bool = a || b; // logical OR
let eq: bool = a == b; // equality
let neq: bool = a != b; // non-Equality
let lt: bool = a < b; // less than
let lte: bool = a <= b; // less than or equal
let gt: bool = a > b; // greater than
let gte: bool = a >= b; // greater than or equal
```

## 13. Type Casting
```leo
transition main(a: address, b: bool, c: field, d: i8, e: i16, f: i64, g: i128, h: u8, i: u16, j: u32, k: u64, l: u128, m: scalar) -> bool {
    let a_field: field = a as field;
    let a_group: group = a as group;
    let a_bool: bool = a as bool;
    let a_i8: i8 = a as i8;
    let a_i16: i16 = a as i16;
    let a_i32: i32 = a as i32;
    let a_i64: i64 = a as i64;
    let a_i128: i128 = a as i128;
    let a_u8: u8 = a as u8;
    let a_u16: u16 = a as u16;
    let a_u32: u32 = a as u32;
    let a_u64: u64 = a as u64;
    let a_u128: u128 = a as u128;
    let a_scalar: scalar = a as scalar;
}
```
