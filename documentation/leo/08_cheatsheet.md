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

### Type Casting
```leo
let a: u8 = 1u8;
let b: u32 = a as u32; // cast 1u8 to 1u32
```
The primitive types are: `address`, `bool`, `field`, `group`, `i8`, `i16`, `i32`, `i64`, `i128`, `u8`, `u16`, `u32`, `u64`, `u128`, `scalar`.
We can cast between all of these types.


## 4. Records
```leo
record token {
    owner: address,
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

## 6. Arrays
```leo
let arr: [bool; 2] = [true, false];
```

## 7. Transitions
```leo
transition mint_public(
    public receiver: address,
    public amount: u64,
) -> token { /* Your code here */ }
```

## 8. Functions
```leo
function compute(a: u64, b: u64) -> u64 {
    return a + b;
}
```

## 9. Inline Functions
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


## 10. For Loops
```leo
let count: u32 = 0u32;

for i: u32 in 0u32..5u32 {
    count += 1u32;
}
```

## 11. Mappings
```leo
mapping balances: address => u64;

let contains_bal: bool = Mapping::contains(balances, receiver);
let get_bal: u64 = Mapping::get(balances, receiver);
let get_or_use_bal: u64 = Mapping::get_or_use(balances, receiver, 0u64);
let set_bal: () = Mapping::set(balances, receiver, 100u64);
let remove_bal: () = Mapping::remove(balances, receiver);
```

## 12. Commands
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


## 13. Operators
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

