---
id: guide
title: Aleo Instructions Language Guide
sidebar_label: Language Guide
---

## Layout of an Aleo Program

An Aleo program contains declarations of a [ProgramID](#programid), [Imports](#import), [Functions](#function), [Closures](#closure), [Interfaces](#interface), [Records](#record),
[Mappings](#mapping), and [Finalize](#finalize). Ordering is only enforced for imports which must be at the top of file.
Declarations are locally accessible within a program file.
If you need a declaration from another program file, you must import it.

### ProgramID

A program ID is declared as `{name}.{network}`.  
Currently, `aleo` is the only supported `network` domain.

```aleo showLineNumbers
program hello.aleo;
```

### Import

An import is declared as `import {ProgramID};`  
Imports fetch other declarations by their program ID and bring them into the current file scope.
You can import dependencies that are downloaded to the `imports` directory.

```aleo showLineNumbers
import foo.aleo; // Import the `foo.aleo` program into the `hello.aleo` program.

program hello.aleo;
```

### Function

A function is declared as `function {name}:`  
Functions contain instructions that can compute values.
Functions must be in a program's current scope to be called.

```aleo showLineNumbers
function foo:
    input r0 as field.public;
    input r1 as field.private;
    add r0 r1 into r2;
    output r2 as field.private;
```

#### Function Inputs

A function input is declared as `input {register} as {type}.{visibility};`  
Function inputs must be declared after the function definition.

```aleo showLineNumbers
// The function `foo` takes a single input `r0` with type `field` and visibility `public`.
function foo:
    input r0 as field.public; 
```

#### Function Outputs

A function output is declared as `output {register} as {type}.{visibility};`  
Function outputs must be declared at the end of the function definition.

```aleo showLineNumbers
...
    output r0 as field.public;
```

### Closure

A closure is declared as `closure {name}:`  
Functions contain instructions that can compute values.
Closures are helper functions that cannot be executed directly. Closures must be called by other functions.

```aleo showLineNumbers
closure foo:
    input r0 as field;
    input r1 as field;
    add r0 r1 into r2;
    output r2 as field;
```

### Interface

A interface is a data structure is declared as `interface {name}:`  
Records contain declarations `{name} as {type}.{visibility};`  
Record data structures must contain the `owner` and `gates` declarations as shown below.  
When passing a record as input to a program function the `_nonce as group.{visibility}` declaration is also required.

```aleo showLineNumbers
interface array3:
    a0 as u32;
    a1 as u32;
    a2 as u32;
```

### Record

A [record](../concepts/02_records.md) is declared as `record {name}:`  
Records contain declarations `{name} as {type}.{visibility};`  
Record data structures must contain the `owner` and `gates` declarations as shown below.  
When passing a record as input to a program function the `_nonce as group.{visibility}` declaration is also required.

```aleo showLineNumbers
record token:
    // The token owner.
    owner as address.private;
    // The Aleo balance (in gates).
    gates as u64.private;
    // The token amount.
    amount as u64.private;
```

### Mapping

A mapping is declared as `mapping {name}:`  
Mappings contain key-value pairs.

```aleo showLineNumbers
// On-chain storage of an `account` map, with `owner` as the key,
// and `amount` as the value.
mapping account:
    // The token owner.
    key owner as address.public;
    // The token amount.
    value amount as u64.public;
```

#### Increment and Decrement
An increment instruction is declared as `increment {name}[{register}] by {register};`
A decrement instruction is declared as `decrement {name}[{register}] by {register};`

```aleo showLineNumbers
finalize transfer_public:
    // Input the token sender.
    input r0 as address.public;
    // Input the token receiver.
    input r1 as address.public;
    // Input the token amount.
    input r2 as u64.public;

    // Decrements `account[r0]` by `r2`.
    // If `account[r0]` does not exist, it will be created.
    // If `account[r0] - r2` underflows, `transfer_public` is reverted.
    decrement account[r0] by r2;

    // Increments `account[r1]` by `r2`.
    // If `account[r1]` does not exist, it will be created.
    // If `account[r1] + r2` overflows, `transfer_public` is reverted.
    increment account[r1] by r2;
```

### Finalize

A finalize function is declared as `finalize {name}:`  
Finalize a program [function](#function).  
Upon success of the finalize function, the program logic is executed.  
Upon failure of the finalize function, the program logic is reverted.  

```aleo showLineNumbers
// The function `transfer_public_to_private` turns a specified token amount
// from `account` into a token record for the specified receiver.
// 
// This function preserves privacy for the receiver's record, however
// it publicly reveals the caller and the specified token amount.
function transfer_public_to_private:
    // Input the token receiver.
    input r0 as address.public;
    // Input the token amount.
    input r1 as u64.public;

    // Produces a token record for the token receiver.
    cast r0 0u64 r1 into r2 as token.record;

    // Output the receiver's record.
    output r2 as token.record;

    // Decrement the token amount of the caller publicly.
    finalize self.caller r1;

finalize transfer_public_to_private:
    // Input the token owner.
    input r0 as address.public;
    // Input the token amount.
    input r1 as u64.public;

    // Decrements `account[r0]` by `r1`.
    // If `account[r0]` does not exist, it will be created.
    // If `account[r0] - r1` underflows, `transfer_public_to_private` is reverted.
    decrement account[r0] by r1;
```

