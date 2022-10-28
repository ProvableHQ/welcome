---
id: language
title: Leo Language Guide
sidebar_label: Language
---

### Statically Typed
Leo is a **statically typed language**, which means we must know the type of each variable before executing a circuit.

### Explicit Types Required
There is no `undefined` or `null` value in Leo. When assigning a new variable, **the type of the value must be explicitly stated**.
The exception to this rule is when a new variable inherits its type from a previous variable.

### Pass by Value
Variables in Leo are always **passed by value**, which means they are always copied when they are used as function inputs or in assignments.

## Booleans
Leo supports the traditional `true` or `false` boolean values. The explicit `bool` type for booleans in statements is required.

```leo
let b: bool = false;
```

## Integers
Leo supports signed integers `i8`, `i16`, `i32`, `i64`, `i128`
and unsigned integers `u8`, `u16`, `u32`, `u64`, `u128`;

```leo
let b: u8 = 1u8;
```

:::info
Higher bit length integers generate more constraints in the circuit, which can slow down computation time.
:::

### A Note on Leo Integers
Leo will not default to an integer type. The definition of a integer **must** include an explicit type.
**Type casting is not yet supported.**

```leo
let a: u8 = 2u8; // explicit type    
let b: u8 = 2; // implicit type
```

## Field Elements

Leo supports a `field` type for native field elements as unsigned numbers up to the modulus length of the field.
```leo
let a: field = 1field; 
let b: field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
```

## Group Elements
The set of affine points on the elliptic curve passed into the Leo compiler forms a group.
Leo supports this set as a primitive data type.
Group elements are special since their values can be defined from the x-coordinate of a coordinate pair.  
`1group`. The group type keyword `group` must be used when specifying a group coordinate.

```leo
let b: group = 0group; // the zero of the group

let a: group = 1group; // the group generator

let c: group = 2group; // 2 * the group generator
```

## Scalar Elements
Leo supports the `scalar` type for field elements in the scalar field.
```leo
let a: scalar = 1scalar;
```

## Addresses

Addresses are defined to enable compiler-optimized routines for parsing and operating over addresses.
These semantics will be accompanied by a standard library in a future sprint.

```leo
function main(owner: address) {
    let receiver: address = aleo1ezamst4pjgj9zfxqq0fwfj8a4cjuqndmasgata3hggzqygggnyfq6kmyd4;
}
```

## Layout of a Leo Program

A Leo program contains declarations of a [Program Scope](#program-scope), [Imports](#import), [Transitions](#transition-function), [Helper Functions](#helper-function), [Structs](#struct), [Records](#record),
[Mappings](#mapping), and [Finalize](#finalize).
Declarations are locally accessible within a program file.
If you need a declaration from another Leo file, you must import it.



### Program Scope

A program scope in the sense of Leo is a collection of code (its functions) and data (its types) that resides at a 
[program ID](#program-id) on the Aleo blockchain.

```leo 
import foo.leo;

program hello.aleo {
    mapping balances: address => u64;
    
    record token {
        owner: address,
        gates: u64,
        amount: u64,
    }
    
    struct message {
        sender: address,
        object: u64,
    }
    
    transition mint_public(
        public receiver: address,
        public amount: u64,
    ) -> token {
        async finalize(receiver, amount); 
        return token {
            owner: receiver,
            gates: 0u64,
            amount,
        };
    }
    
    finalize mint_public(
        public receiver: address,
        public amount: u64,
    ) {
        increment(balances, receiver, amount);
    }
    
    function compute(a: u64, b: u64) -> u64 { 
        return a + b;
    }
}
```

The following must be defined inside the program scope in a Leo file.
* mapping definitions
* record types
* struct types
* transition function definitions
* helper function definitions
* finalize definitions

The following must be defined outside the program scope in a Leo file.
* import definitions

#### Program ID
A program ID is declared as `{name}.{network}`.  
Currently, `aleo` is the only supported `network` domain.

```leo
hello.aleo
```

### Import

You can import dependencies that are downloaded to the `imports` directory.
An import is declared as `import {filename}.leo;`
This will look for `imports/{filename}.leo` and bring all declarations into the current file scope.
If there are duplicate names for declarations Leo will fail to compile.
Ordering is enforced for imports which must be at the top of file.

:::caution
Leo imports are unstable and currently only provide minimal functionality. 
Their syntax is expected to change. 
:::

```leo showLineNumbers
import foo.leo; // Import all `foo.leo` declarations into the `hello.aleo` program.

program hello.aleo { }
```

### Struct

A struct data type is declared as `struct {name} {}`  
Structs contain declarations `{name}: {type},`

```leo showLineNumbers
struct array3 {
    a0: u32,
    a1: u32,
    a2: u32,
}
```

### Record

A [record](../concepts/02_records.md) data type is declared as `record {name} {}`  
Records contain declarations `{name}: {type},`  
Record data structures must contain the `owner` and `gates` declarations as shown below.  
When passing a record as input to a program function the `_nonce: group,` declaration is also required.

```aleo showLineNumbers
record token {
    // The token owner.
    owner: address,
    // The Aleo balance (in gates).
    gates: u64,
    // The token amount.
    amount: u64,
}
```

### Mapping

A mapping is declared as `mapping {name}:`  
Mappings contain key-value pairs.

```leo showLineNumbers
// On-chain storage of an `account` map, with `address` as the key,
// and `u64` as the value.
mapping account: address => u64;
```

### Transition function

Transitions in Leo are functions that  is declared as `transition {name}() {}`  
Functions contain instructions that can compute values.
Functions must be in a program's current scope to be called.

```leo showLineNumbers
program hello.aleo {
    transition foo(
        public a: field, 
        b: field,
    ) -> field {
        return a + b;
    }
}
```

#### Function Inputs

A function input is declared as `{visibility} {name}: {type},`  
Function inputs must be declared just after the function name declaration.

```leo showLineNumbers
// The transition function `foo` takes a single input `a` with type `field` and visibility `public`.
transition foo(public a: field) { }
```

#### Function Outputs

A function output is declared as `return {expression};`  
Function outputs must be declared at the end of the function definition.
The return type of the function declaration must match the type of the returned `{expression}`.

```leo showLineNumbers
transition foo(public a: field) -> field {
    // Returns the addition of the public input a and the value `1field`.
    return a + 1field;
}
```

### Helper function

A helper function is declared as `function {name}() {}`  
Helper functions contain instructions that can compute values.
Helper functions that cannot be executed directly. Helper functions must be called by other functions.

```leo showLineNumbers
function foo(
    public a: field, 
    b: field,
) -> field {
    return a + b;
}
```


#### Increment and Decrement
An increment instruction is declared as `increment(mapping, key, value);`  
A decrement instruction is declared as `decrement(mapping, key, value);`

```leo showLineNumbers
program transfer.aleo {
    // On-chain storage of an `account` map, with `address` as the key,
    // and `u64` as the value.
    mapping account: address => u64;

    finalize transfer_public(
        public sender: address,
        public receiver: address,
        public amount: u64,
    ) {
        // Decrements `account[sender]` by `amount`.
        // If `account[sender]` does not exist, it will be created.
        // If `account[sender] - amount` underflows, `transfer_public` is reverted.
        decrement(account, sender, amount);

        // Increments `account[receiver]` by `amount`.
        // If `account[receiver]` does not exist, it will be created.
        // If `account[receiver] + amount` overflows, `transfer_public` is reverted.
        increment(account, receiver, amount);
    }
}
```

### Finalize

A finalize function is declared as `finalize {name}:`  
Finalize a [transition function](#transition-function).  
Upon success of the finalize function, the program logic is executed.  
Upon failure of the finalize function, the program logic is reverted.  

```leo showLineNumbers
program transfer.aleo {
    // The function `transfer_public_to_private` turns a specified token amount
    // from `account` into a token record for the specified receiver.
    // 
    // This function preserves privacy for the receiver's record, however
    // it publicly reveals the caller and the specified token amount.
    function transfer_public_to_private(
        public receiver: address, 
        public amount: u64
    ) -> token {
        // Produce a token record for the token receiver.
        let new: token = token {
            owner: receiver,
            gates: 0u64,
            amount,
        };

        // Return the receiver's record, then decrement the token amount of the caller publicly.
        async finalize(self.caller, amount);
        return new;
    }

    // Decrements `account[owner]` by `amount`.
    // If `account[owner]` does not exist, it will be created.
    // If `account[owner] - amount` underflows, `transfer_public_to_private` is reverted.
    finalize transfer_public_to_private(
        public owner: address,
        public amount: u64,
    ) {
        decrement(account, owner, amount);
    }
}
```

# Operators

Operators in Leo compute a value based off of one or more expressions.
Leo will try to detect arithmetic operation errors as soon as possible.
If an integer overflow or division by zero can be identified at compile time Leo will quickly tell the programmer.
Otherwise, the error will be caught at proving time when main function inputs are fetched.

## Addition

Adds `first` with `second`, storing the outcome in `destination`.
For integer types, a constraint is added to check for overflow.
For cases where wrapping semantics are needed for integer types, see the `Add Wrapped` operator.

```leo
let a: u8 = 1u8 + 1u8;
// a is equal to 2

a += 1;
// a is now equal to 3

a = a.add(1u8);
// a is now equal to 4
```

|          Operation           |      Operators      |                                   Supported Types                                    |
|:----------------------------:|:-------------------:|:------------------------------------------------------------------------------------:|
|           addition           |  `+` `+=` `.add()`  | `field` `group` `scalar` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128` |
|      wrapping addition       |  `.add_wrapped()`   |             `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`              |                              
|       negation(unary)        |    `-` `.neg()`     |                    `field` `group` `i8` `i16` `i32` `i64` `i128`                     | 
|     subtraction(binary)      |  `-` `-=` `.sub()`  |     `field` `group` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`      |
| wrapping subtraction(binary) |  `.sub_wrapped()`   |     `field` `group` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`      |
|        multiplication        |  `*` `*=` `.mul()`  | `field` `group` `scalar` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128` |
|   wrapping multiplication    |  `.mul_wrapped()`   |             `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`              |
|           division           |  `/` `/=` `.div()`  |         `field` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`          |
|      wrapping division       |  `.div_wrapped()`   |             `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`              |
|        exponentiation        | `**` `**=` `.pow()` |         `field` `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`          |
|   wrapping exponentiation    |  `.pow_wrapped()`   |             `i8` `i16` `i32` `i64` `i128` `u8` `u16` `u32` `u64` `u128`              |

# Logical Operators

| Operation | Operators | Supported Types |
|:---------:|:---------:|:---------------:|
| AND       | `&&`      | `bool`          |
| OR        | `\|\|`    | `bool`          |
| NOT       | `!`       | `bool`          |

# Relational Operators

Relational operators will always resolve to a boolean `bool` value.

|       Operation       | Operators |                            Supported Types                             |
|:---------------------:|:---------:|:----------------------------------------------------------------------:|
| equal                 | `==`      | `bool`, `group`, `field`, integers, addresses, arrays, tuples, structs |
| not-equal             | `!=`      | `bool`, `group`, `field`, integers, addresses, arrays, tuples, structs |
| less than             | `<`       |                                integers                                |
| less than or equal    | `<=`      |                                integers                                |
| greater than          | `>`       |                                integers                                |
| greater than or equal | `>=`      |                                integers                                |

# Operator Precedence
Operators will prioritize evaluation according to:

|            Operator           | Associativity |
|:-----------------------------:|:-------------:|
|              `!`              |               |
|              `**`             | right to left |
|             `*` `/`           | left to right |
|             `+` `-`           | left to right |
|       `<` `>` `<=` `>=`       |               |
|           `==` `!=`           | left to right |
|              `&&`             | left to right |
|            <code>&#124;&#124;</code>             | left to right |
| `=` `+=` `-=` `*=` `/=` `**=` |               |

## Parentheses

To prioritize a different evaluation use parentheses `()` around the expression.

```leo
let result = (a + 1) * 2; 
```
`(a + 1)` will be evaluated before multiplying by two `* 2`

