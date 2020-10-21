---
id: erc20
title: A Leo Token on Aleo
sidebar_label: Token Example
---

Consider a token with two functions: `token_debit` and `token_credit`.
* `token_debit` decrements a user's token balance by a value.
* `token_credit` increments a user's token balance by a value.

Lets transfer a token value of `100u8` for a token with id `1u8`

### Records
For this example we will only use one old record `old_record_0` and one new record `new_record_0`.
The second `old_record_1` and second `new_record_1` will be set to null **dummy** records.
**Dummy** records pass through their input state as their output state.

The updated [execute](00_model.md#registers) for our example:

1. `state_0 -> old_record_0 -> state_1`
2. `state_1 -> dummy -> state_1`
3. `state_1 -> new_record_0 -> state_2`
4. `state_2 -> dummy -> state_2`

### Record Programs

`old_record_0` contains a token value balance that is transferred entirely into the `new_record_0`. 

* `token_debit` is the [death program](../../aleo/concepts/06_glossary.md#death-program) of `old_record_0`.
* `token_credit` is the [birth program](../../aleo/concepts/06_glossary.md#birth-program) of `new_record_0`.

After `old_record_0` dies, `token_debit` outputs the token id and token value balance `(token_id, value_balance)` being transferred to `new_record_0`.

`state_1 = (1u8, 100u8)`

`new_record_0` should be credited with the value from `state_1` when it is born. In addition, we will check to make sure the 
`state_2` calculated by `new_record_0` is equal to `state_0` where `value_balance == 0u64` ensuring money has not been created out of thin air.

`state_2 = (1u8, 0u8)` 

### Implementation

The next sections go into depth about how to implement `token_debit` and `token_credit` in Leo.
For each function we:
1. Define what each function should do.
2. Consider what data we need and where it is stored.
3. Describe how the data is passed into Leo.
4. Write the functions in Leo.
5. See how the Leo runtime verifies commitments and stores state.

## 1. `token_debit`

### 1.1 Goal

Token debit decrements a user's token balance by a value.

To achieve this we:
* Check that the record has the correct token information.
* Check that the record has the correct birth and death programs.
* Transfer the token value in the record to a new record.

### 1.2 Data

To check token identity and token value we need the record payload:
* `payload`:
    * `token_id`
    * `value_balance`
    
We need the input register information:
* `token_id`
* `value_balance`

We need the birth and death programs:
* `birth_program_id`
* `death_program_id`

We need the index of this record:
* `leaf_index`

#### Summary:

|            Variable         |              Description              |
|-----------------------------|---------------------------------------|
|           `payload`         |            record payload             |
|           `token_id`        |            id of the token            |
|        `value_balance`      | intermediate value (initialized to 0) |
|       `birth_program_id`    |   record birth program identifier   |
|       `death_program_id`    |   record death program identifier   |
|           `leaf_index`      | index of this record's leaf in the local data merkle tree |


### 1.3 Data Inputs

The program input file contains program inputs. In this case, we fetch both values directly from the
record payload so `[main]` will be empty.
The input register contains the initial state and is stored in the `token.in` file.

```leo title="token.in"
[main]

[registers]
token_id: u8 = 1;
value_balance: u8 = 0; // Value in the first input register is initialized to 0
```

Record and leaf state are passed into Leo through the `token.state` file.

```leo title="token.state"
// The program state for stable_token/src/main.leo
[[public]]

[state]
leaf_index: u32 = 0;
root: [u8; 32] = [0; 32];

[[private]]

[record]
serial_number: [u8; 64] = [0; 64];
commitment: [u8; 32] = [0; 32];
owner: address = aleo1daxej63vwrmn2zhl4dymygagh89k5d2vaw6rjauueme7le6k2q8sjn0ng9;
is_dummy: bool = false;
value: u64 = 0;
payload: [u8; 32] = [1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
birth_program_id: [u8; 48] = [1; 48];
death_program_id: [u8; 48] = [0; 48];
serial_number_nonce: [u8; 32] = [0; 32];
commitment_randomness: [u8; 32] = [0; 32];

[state_leaf]
path: [u8; 128] = [0; 128];
memo: [u8; 32] = [0; 32];
network_id: u8 = 0;
leaf_randomness: [u8; 32] = [0; 32];
```

### 1.4 Leo Function

#### Overview

The `token_debit` Leo function should:
 1. Check that the `record.payload.token_id` matches the starting register `registers.token_id`.
 2. Check that the `record.birth_program_id` is equal to `token_debit`.
 3. Check that the `record.death_program_id` is equal to `token_credit`.
 4. If the global `state.leaf_index` of this record is 0, check the starting register `registers.value_balance` is 0.
 5. Add the `record.payload.value_balance` to the output `new_value_balance`.
 6. Return the `register.token_id` and output `new_value_balance`.
 
#### Code

```leo title="token_debit.leo"
// The token debit function
function debit(
    input,
    token_debit: [u8; 48],
    token_credit: [u8; 48]
) -> (u8, u8) {
    // 1. Check token ids match
    let id_t = input.registers.id;
    let payload_id_t = input.record.payload[0]; // payload is u8 bytes
    let condition1 = id_t == payload_id_t;

    // 2. Check record death is token_debit
    let id_d = input.record.death_program_id;
    let condition2 = id_d == token_debit;

    // 3. Check record birth is token_credit
    let id_b = input.record.birth_program_id;
    let condition3 = id_b == token_credit;

    // 4. Handle old_record_0 new token case
    let global_index = input.state.leaf_index;
    let vb_t_old = input.registers.value_balance;
    let is_zero = vb_t_old == 0;
    let condition4 = if global_index == 0 ? is_zero : true;

    // 5. Add payload value to register value balance
    let payload_vb_t = input.record.payload[1];
    let vb_t_new = vb_t_old + payload_vb_t;

    // 6. Debit the funds if checks pass
    let passed = condition1 && condition2 && condition3 && condition4 && condition5;

    if passed {
        return (id_t, vb_t_new)
    } else {
        return (id_t, vb_t_old)
    }
}
```

#### Output

Return values are written to the `token.out` file after the program is run.

```leo title="token.out"
[registers]
token_id: u8 = 1;
value_balance: u8 = 100;
```

### 1.5 Leo Runtime Checks

Under the hood, Leo needs to verify the record commitment and the local data commitment to the local data root.
This ensures that the records and register values are [correct](./00_model.md#committing-to-register-data).

#### The Data

To verify the record `commitment` we need:

|          Variable           |             Description            |
|-----------------------------|------------------------------------|
|        `serial_number`      |         record serial number       |
|         `commitment`        | record commitment we are verifying |
|           `owner`           |           account address          |
|           `value`           |            record value            |
|          `payload`          |           record payload           |
|       `birth_program_id`    |  record birth program identifier |
|       `death_program_id`    |  record death program identifier |
|          `nonce_sn`         |         serial number nonce        |
|   `commitment_randomness`   |    record commitment randomness    |

To verify the `local_data_commitment`'s path to the local data root:

|         Variable        |                   Description                   |
|-------------------------|-------------------------------------------------|
|         `root`          |   the root of the merkle tree we are verifying  |
|      `leaf_index`       |    the public index of this record in the tree  |
|         `path`          |              path to local data root            |
|         `memo`          |               transaction memorandum            |
|      `network_id`       |                    network id                   |
|    `leaf_randomness`    |          randomness for commitment leaf         |
|       `token_id`        |        output register id of the token          |
|     `value_balance`     |          output register value balance          |


#### Calculation

Every piece of input information we need is already passed into the Leo input file.
Since we also depend on the output information for the local data commitment, we calculate the record commitment and local data root at the end of Leo program execution.

If you were to do the calculation in Leo by hand, the `token_debit` function would look like this:

#### Overview

 1. Check that the `record.payload.token_id` matches the starting register `registers.token_id`.
 2. Check that the `record.birth_program_id` is equal to `token_debit`.
 3. Check that the `record.death_program_id` is equal to `token_credit`.
 4. If the global `state.leaf_index` of this record is 0, check the starting register `registers.value_balance` is 0.
 5. Add the `record.payload.value_balance` to the output value balance.
 6. **Verify the record commitment.**
 7. **Verify the local data commitment.**
 8. Return the `register.token_id` and output value balance.

#### Code

```leo title="token_debit.leo"
function debit(
    input,
    token_debit: [u8; 48],
    token_credit: [u8; 48]
) -> (u8, u8) {
    let id_t = input.registers.id;
    let payload_id_t = input.record.payload[0]; // payload is u8 bytes
    let condition1 = id_t == payload_id_t; // 1.

    let id_d = input.record.death_program_id;
    let condition2 = id_d == token_debit; // 2.

    let id_b = input.record.birth_program_id;
    let condition3 = id_b == token_credit; // 3.

    let global_index = input.state.leaf_index;
    let vb_t_old = input.registers.value_balance;
    let is_zero = vb_t_old == 0;
    let condition4 = if global_index == 0 ? is_zero : true; // 4.

    let payload_vb_t = input.record.payload[1];
    let vb_t_new = vb_t_old + payload_vb_t; // 5.

    let cm_actual = commit(
        record.owner, 
        record.value, 
        record.payload,
        record.birth_program_id,
        record.death_proigram_id,
        record.nonce_sn, 
        record.commitment_randomness,
    );

    let condition6 = cm cm_actual; // 6.

    let hash_t0 = hash(
        register.token_id,
        register.value_balance
    );

    let hash_t1 = hash(
        record.payload.token_id,
        record.payload.value_balance
    );

    let data = serialize(
        state.leaf_index,
        record.serial_number,
        record.commitment,
        state_leaf.memo,
        state_leaf.network_id,
        hash_t0,
        hash_t1,
        state_leaf.leaf_randomness
    );

    let local_data_actual = merkle_root(data, state_leaf.path);
    
    let condition7 = state.root == local_data_actual; // 7.

    // 6. Debit the funds if checks pass
    let passed = condition1 && condition2 && condition3 && condition4 && condition6 && condition7

    if passed {
        return (id_t, vb_t_new)
    } else {
        return (id_t, vb_t_old)
    }
}
```

#### Summary

The Leo runtime performs verification checks at the end of a program run.
The input data for these checks comes from the current record and state context that is passed in by default to the `token.in` and `token.state` files.
If the checks fail, the record is invalid and Leo will output a constraint system error.

## 2. `token_credit`

### 2.1 Goal

Token credit increments a user's token balance by a value.

To achieve this we:
* Check the record has the correct token information.
* Check the record has the correct birth program.
* Transfer the token value from the old record to this new record.

### 2.2 Data

To check token identity and token value we need the record payload:
* `payload`:
    * `token_id`
    * `value_balance`
    
We need the input register information:
* `token_id`
* `value_balance`

We need the birth and death programs:
* `birth_program_id`

We need the index of this record:
* `leaf_index`

#### Summary

|            Variable         |              Description                                  |
|-----------------------------|-----------------------------------------------------------|
|           `payload`         |            record payload                                 |
|           `token_id`        | id of the token (from the previous token debit)           |
|        `value_balance`      | intermediate value (from the previous token debit)        |
|       `birth_program_id`    |   record birth program identifier                       |
|           `leaf_index`      | index of this record's leaf in the local data merkle tree |

### 2.3 Data Retrieval

Similar to `token_debit`, the program inputs file contains the input register information.

```leo title="token.in"
[main]

[registers]
token_id: u8 = 1;
value_balance: u8 = 100;
```

:::note
Note that the output registers of `token_debit` are loaded into the input register for `token_credit`.
:::

Record and leaf state are passed into Leo through the `token.state` file.

```leo title="token.state"
// The program state for token/src/main.leo
[[public]]

[state]
leaf_index: u32 = 2;
root: [u8; 32] = [0; 32];

[[private]]

[record]
serial_number: [u8; 32] = [0; 32];
commitment: [u8; 32] = [0; 32];
owner: address = aleo1daxej63vwrmn2zhl4dymygagh89k5d2vaw6rjauueme7le6k2q8sjn0ng9;
is_dummy: bool = false;
value: u64 = 0;
payload: [u8; 32] = [1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
birth_program_id: [u8; 48] = [1; 48];
death_program_id: [u8; 48] = [0; 48];
serial_number_nonce: [u8; 32] = [0; 32];
commitment_randomness: [u8; 32] = [0; 32];

[state_leaf]
path: [u8; 128] = [0; 128];
memo: [u8; 32] = [0; 32];
network_id: u8 = 0;
leaf_randomness: [u8; 32] = [0; 32];

```

:::note
This record's leaf index is 2 since leaf index 1 is a dummy which just passes through register values.
:::

### 2.4 Leo Function

#### Overview

The `token_credit` Leo function should:
 1. Check that the `record.payload.token_id` matches the starting register `registers.token_id`.
 2. Check that the `record.birth_program_id` is equal to `token_credit`.
 3. If the global `state.leaf_index` is 2, subtract the `record.payload.value_balance` from the starting `registers.value_balance`.
 4. If the gloabl `state.leaf_index` is 2, check the output `new_value_balance` is 0. This check ensures that no new money is created.
 5. Return the `registers.token_id` and output `new_value_balance`.
 

#### Code

```leo title="token_credit.leo"
// The token credit function
function credit(
    input,
    token_credit: [u8; 48]
) -> (u8, u8) {
    let id_t = input.registers.id;
    let payload_id_t = input.record.payload[0];

    // 1. Check token id's match
    let condition1 = id_t == payload_id_t;

    // 2. Check record birth
    let id_b = input.record.birth_program_id;
    let condition2 = id_b == token_credit;

    // 3. Subtract payload value from register value balance
    let vb_t_old = input.registers.value_balance;
    let payload_vb_t = input.record.payload[1];
    let vb_t_new = vb_t_old - payload_vb_t;

    // 4. Check that no money is created
    let condition3 = vb_t_new <= vb_t_old;

    // 5. Handle new_record_1 value is conserved case
    let global_index = input.state.leaf_index;
    let is_zero = vb_t_new == 0;
    let condition4 = if global_index == 3 ? is_zero : true;

    // 6. Credit the funds if checks pass
    let passed = condition1 && condition2 && condition3 && condition4;

    if passed {
        return (id_t, vb_t_new)
    } else {
        return (id_t, vb_t_old)
    }
}
```


#### Output

Return values are written to the `token.out` file after the program is run.

```leo title="token.out"
[registers]
token_id: u8 = 1;
value_balance: u8 = 0;
```

### 2.5 Leo Runtime Checks

The Leo runtime will run the [same checks](#15-leo-runtime-checks) as in `token_debit` to ensure that record and register values are correct.

## Summary

To implement a token on Aleo you need to write two functions: [`token_debit`](#1-token_debit) and [`token_credit`](#2-token_credit).
`token debit` will be the [death program](#record-programs) of an old record whose value is being transferred. 
`token_credit` is the [birth program](#record-programs) of a new record that receives the old record's value.
Each program has access to register, record, and leaf state through [input files](#13-data-inputs). 
At the end of each function, the Leo runtime will [verify](#15-leo-runtime-checks) that all state is correct.
