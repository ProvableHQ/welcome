---
id: changelog
title: Changelog
sidebar_label: Changelog
---

:::info
The Leo language and Aleo SDK are currently in active development. Please monitor their respective repositories for 
the latest updates:
[**Leo**]
(https://github.com/AleoHQ/leo) [**Aleo**]
(https://github.com/AleoHQ/aleo) .
:::

## Changes **06.14.2023**
---
### Aleo Instructions: Hash Functions

The previous hash opcodes have been replaced with a new, more flexible syntax that allows the output to be cast to any desired type. Check out the full documentation [here](https://developer.aleo.org/aleo/opcodes#table-of-cryptographic-opcodes). The new opcodes are:

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

The syntax for these opcodes is `hash.<variant> r0 into r1 as <type>;`, where `<variant>` is one of the hash function variants listed above, `r0` is the source register, `r1` is the destination register, and `<type>` is any supported type (including `address`, `field`, `group`, `i8`, `i16`, `i32`, `i64`, `i128`, `u8`, `u16`, `u32`, `u64`, `u128`, `scalar`).

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

In this example, `hash.bhp256` is the hash function, `r0` is the source register, `r1` is the destination register, and `address` is the type to which the hash output will be cast. This syntax applies for all hash variants.

### Aleo Instructions: Commit Functions

Similarly, commit opcodes have also been updated with new syntax. Check out the full documentation [here](https://developer.aleo.org/aleo/opcodes#table-of-cryptographic-opcodes). The new opcodes are:

```
commit.bhp256
commit.bhp512
commit.bhp768
commit.bhp1024
commit.ped64
commit.ped128
```

The syntax for these opcodes is `commit.<variant> r0 r1 into r2 as <type>;`, where `<variant>` is one of the commit function variants listed above, `r0` and `r1` are the source registers, `r2` is the destination register, and `<type>` is any supported type (including `address`, `field`, `group`).

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

In this example, `commit.bhp256` is the commit function, `r0` and `r1` are the source registers, `r2` is the destination register, and `address` is the type to which the commit output will be cast. This syntax applies for all commit variants.
