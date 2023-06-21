---
id: changelog
title: Changelog
sidebar_label: Changelog
---

:::info
The Leo language and Aleo SDK are currently in active development. Please monitor their respective repositories for
the latest updates: [**Leo**](https://github.com/AleoHQ/leo), [**Aleo**](https://github.com/AleoHQ/aleo)
:::

## Changes **06.14.2023**

---
### New position, branch.eq, branch.neq
The `position` command, e.g. `position exit`, indicates a point to branch execution to.  
The `branch.eq` command, e.g. `branch.eq r0 r1 to exit`, which branches execution to the position indicated by `exit` if `r0` and `r1` are equal.  
The `branch.neq` command, e.g. `branch.neq r0 r1 to exit`, which branches execution to the position indicated by `exit` if `r0` and `r1` are not equal.

**Example**
The finalize block exits successfully if the input is 0u8 and fails otherwise.
```aleo
program test_branch.aleo;
function run_test:
    input r0 as u8.public;
    finalize r0;
finalize run_test:
    input r0 as u8.public;
    branch.eq r0 0u8 to exit;
    assert.eq true false;
    position exit;
```

### Mapping Updates

The mapping commands in Aleo Instructions have been enhanced with several new operations that provide a more efficient and fluent way of working with mapping data structures. These operations are as follows:

**Contains**: The `contains` command checks if a key exists in a mapping. The syntax for this command is `contains accounts[r0] into r1;`.

**Get**: The `get` command retrieves a value from a mapping. The syntax for this command is `get accounts[r0] into r1;`.

**Get or Use**: This command is a variant of the `get` command that uses the provided default in case of a failure to retrieve a value from the mapping. The syntax for this command is `get.or_use accounts[r0] r1 into r2`.

**Set**: The `set` command sets a value in a mapping. The syntax for this command is `set r0 into accounts[r0];`.

**Remove**: The `remove` command removes a key-value pair from a mapping. The syntax for this command is `remove accounts[r0]`.

The full documentation can be found [here](https://developer.aleo.org/aleo/language#mapping).

### New `rand.chacha`  Opcode:

The `rand.chacha` opcode is used to generate random values within the `finalize` scope. This opcode supports a wide
range of types for the random value.

Here are some examples of how to use `rand.chacha` in Aleo Instructions:

```aleo
rand.chacha into r0 as field;
rand.chacha r0 into r1 as field;
rand.chacha r0 r1 into r2 as field;
```

The general syntax is as follows:

```aleo
rand.chacha [input1] [input2] into [destination] as [type];
```

**Note:** `input1` and `input2` are optional. If not provided, the opcode will generate a random value of the
specified `type`.

#### Supported Types

`Literal` can be an `Address`, `Boolean`, `Field`, `Group`, `I8`, `I16`, `I32`, `I64`, `I128`, `U8`, `U16`, `U32`, `U64`
, `U128`, or `Scalar`.

| First   | Second  | Destination |
|---------|---------|-------------|
|`Literal`|`Literal`| `Literal`   |

### Aleo Instructions: Hash Functions

The previous hash opcodes have been replaced with a new, more flexible syntax that allows the output to be cast to any
desired type. Check out the full
documentation [here](https://developer.aleo.org/aleo/opcodes#table-of-cryptographic-opcodes). The new opcodes are:

```
hash.bhp256
hash.bhp512
hash.bhp768
hash.bhp1024
hash.ped64
hash.ped128
hash.psd2
hash.psd4
hash.psd8
```

The syntax for these opcodes is `hash.<variant> r0 into r1 as <type>;`, where `<variant>` is one of the hash function
variants listed above, `r0` is the source register, `r1` is the destination register, and `<type>` is any supported
type (including `address`, `field`, `group`, `i8`, `i16`, `i32`, `i64`, `i128`, `u8`, `u16`, `u32`, `u64`, `u128`
, `scalar`).

The hash opcodes removed were:

```
hash_to_group.bhp256
hash_to_group.bhp512
hash_to_group.bhp768
hash_to_group.bhp1024
hash_to_group.ped64
hash_to_group.ped128
hash_to_group.psd2
hash_to_group.psd4
hash_to_group.psd8
hash_to_scalar.psd2
hash_to_scalar.psd4
hash_to_scalar.psd8
```

In their place, you can now specify the output type for the hash function. Here's an example:

```aleo
hash.bhp256 r0 into r1 as address;
```

In this example, `hash.bhp256` is the hash function, `r0` is the source register, `r1` is the destination register,
and `address` is the type to which the hash output will be cast. This syntax applies for all hash variants.

### Aleo Instructions: Commit Functions

Similarly, commit opcodes have also been updated with new syntax. Check out the full
documentation [here](https://developer.aleo.org/aleo/opcodes#table-of-cryptographic-opcodes). The new opcodes are:

```
commit.bhp256
commit.bhp512
commit.bhp768
commit.bhp1024
commit.ped64
commit.ped128
```

The syntax for these opcodes is `commit.<variant> r0 r1 into r2 as <type>;`, where `<variant>` is one of the commit
function variants listed above, `r0` and `r1` are the source registers, `r2` is the destination register, and `<type>`
is any supported type (including `address`, `field`, `group`).

The commit opcodes removed were:

```
commit_to_group.bhp256
commit_to_group.bhp512
commit_to_group.bhp768
commit_to_group.bhp1024
commit_to_group.ped64
commit_to_group.ped128
```

In their place, you can now specify the output type for the commit function. Here's an example:

```aleo
commit.bhp256 r0 r1 into r2 as address;
```

In this example, `commit.bhp256` is the commit function, `r0` and `r1` are the source registers, `r2` is the destination
register, and `address` is the type to which the commit output will be cast. This syntax applies for all commit
variants.
