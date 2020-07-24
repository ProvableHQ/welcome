---
id: model
title: The Leo Programming Model
sidebar_label: Model
---

This section assumes that you have knowledge of [records]() and their use in the [Aleo Protocol]().

The Leo CLI creates an `inputs/` and an `outputs/` folder to store program input and output information from the compiler.
These folders also provide access to register, record, and transaction state information.
We already introduced the program inputs`.in` file located in the `inputs/` folder.
When a Leo program is built, input and output register `.register` files as well as a `.state` file are generated.

* `.register` files contain intermediate program state information.
* A `.state` file contains record and transaction information.

To see how these files are useful lets walk through a familiar example of transferring an ERC20 token on aleo.

# ERC20 Example

Consider a token with two functions: `token_debit` and `token_credit`.
* `token_debit` decrements a user's token balance by a value.
* `token_credit` increments a user's token balance by a value.

### Leo Record Execution
Each function lives inside a Leo `.leo` file that is compiled into a circuit.
Each circuit lives in a record. Each record lives in a transaction.
An Aleo transaction takes two old records: `old_record_0`, `old_record_1` and produces two new records: `new_record_0`, `new_record_1`.
When a transaction is built on the Leo side, we input some state `state_0` and output some state `state_N` returned by the last `new_record_1`. 

Leo executes each record in order:

1. `state_0 -> old_record_0 -> state_1`
2. `state_1 -> old_record_1 -> state_2`
3. `state_2 -> new_record_0 -> state_3`
4. `state_3 -> new_record_1 -> state_4`

For this example we will only use one old record `old_record_0` and one new record `new_record_0`.
The second `old_record_1` and second `new_record_1` will be set to null **dummy** records.
**Dummy** records pass through their input state as their output state.

The updated execute for our example:

1. `state_0 -> old_record_0 -> state_1`
2. `state_1 -> old_record_1 -> state_1`
3. `state_1 -> new_record_0 -> state_2`
4. `state_2 -> new_record_1 -> state_2`

### Record Predicates

Since Aleo uses a UTXO model, `old_record_0` should contain a token value balance that is transferred entirely into
the `new_record_0`. 

* `token_debit` is the death predicate of `old_record_0`.
* `token_credit` is the birth predicate of `new_record_0`.

After `old_record_0` dies, `token_debit` outputs the token id and token value balance `(id_t, vb_t)` being transferred to `new_record_0`.

`state_1 = (id_t1, vb_t1)`

`new_record_0` should be credited with the value from `state_1` when it is born. In addition, we will check to make sure the 
`state_2` calculated by `new_record_0` is equal to `state_0` ensuring money has not been created out of thin air.

`state_2 = (id_t2, vb_t2)` 

### Implementation

The next sections go into depth about how to implement `token_debit` and `token_credit` in Leo.
For each function we:
1. Define what each function should do.
2. Consider what information we need and where it is stored.
3. Describe how the information is passed into Leo.
4. Write the functions in Leo.

## 1. `token_debit`

### 1.1 The Goal:

Token debit decrements a user's token balance by a value.

To achieve this we:
* Check the record has the correct token information.
* Check the record has the correct birth and death predicates.
* Transfer the user's token value in the record to a new record.
* Verify the record commitment and its path to the local data root.

### 1.2 The Information:

To check token identity and token value we need the record payload:
* `payload`:
    * `id_t`: id of the token
    * `value_t`: token value being transferred
    
We need the starting register information:
* `id_t0`: id of the token
* `vb_t0`: intermediate value (initialized to 0)

To verify the record commitment we need:
* `cm`: record commitment we are verifying
* `address`: account address
* `value`: record value
* `payload`: record payload
* `id_b`: record birth predicate identifier
* `id_d`: record death predicate identifier
* `nonce_sn`: serial number nonce
* `r_cm`: record randomness commitment

To verify the local_data_commitment's path to the local data root:
* `local_data_root`: the root of the merkle tree we are verifying
* `i`: global index
* `sn`:  serial number
* `cm`: record commitment
* `memo`: transaction memo
* `id_n`: network id
* `r_local_data`: randomness for commitment leaf
* `H(id_t0, vb_t0)`: hash of the starting token id and token balance
* `H(id_t1, vb_t1)`: hash of the ending token id and token balance

### 1.3 Passing the Information to Leo:

Leo uses register files `.register` to pass intermediate program state information between records.
To ensure the accuracy of this stored information, it is included in the local data commitment. 

The input register `input.register` file in the `inputs/` directory contains the initial state. 

```leo title="inputs/input.register"
[register]
id_t0: u8[32]
vb_t0: u32
id_token_credit: u8[32]
```

The program input file contains program inputs. In this case, we fetch both values directly from the
record payload so it will be empty.

```leo title="inputs/erc20.in
[main]
```

Record and transaction state are passed into Leo through the `.state` file.

```leo title="outputs/erc20.state"
[record]
cm: u8[32]
addr: address
value: record_value
payload: u8[128]
id_b: u8[32]
id_d: u8[32]

[tx]
nonce_sn: u8[32]
r_cm: u8[32]
memo: u8[32]

[global]
local_data_root: u8[32]
index: u32
sn: u32
id_n: u32
r_local_data: u8[32]
```

All values in the `input/` file are callable as constant values in the Leo program.

Return values are written to the `output.register` file after the program is run.

```leo title="outputs/output.register"
[register]
id_t1: u8[32] = [0u8; 32];
vb_t1: u32 = 0u32;
id_token_credit: [0u8; 32];
```

### 1.4 The Function:

The `token_debit` Leo function should:
 1. Check the program input token id matches the starting register token id.
 2. Check the record birth predicate is equal to `token_debit`.
 3. Check the record death predicate is equal to `token_credit`.
 4. If the global index of this record is 0, check the starting register value balance is 0.
 5. Add the token value balance of this record to the output value balance.
 6. Verify the record commitment.
 7. Verify the local data root.
 8. Return the token id, output value balance, and `id_token_credit`.
 
 ```leo title="token_debit.leo"
function main() -> (u8[32], u32, u8[32]) {
    assert_eq!(id_t0, payload.id_t); // 1.
    assert_eq!(id_d, token_debit); // 2.
    assert_eq!(id_b, token_credit); // 3.
    
    let id_t = id_t0;
    let mut vb_t = vb_t0;
    if (index == 0u32) {
        assert_eq!(vb_t, 0u32); // 4.
    }

    vb_t += payload.value_t; // 5.

    let cm_actual = commit(address, value, payload, id_b, id_d, nonce, r_cm);

    assert_eq!(cm, cm_actual); // 6.

    let hash_t0 = hash(id_t0, vb_t0);
    let hash_t1 = hash(id_t, vb_t);
    let l_data_actual = merkle_root(index, sn, cm, memo, id_n, hash_t0, hash_t1, r_local_data);
    
    assert_eq!(local_data_root, l_data_actual); // 7.

    return (id_t, vb_t, id_token_credit) // 8.
}
```


## 2. `token_credit`

### 2.1 The Goal:

Token credit increments a user's token balance by a value.

To achieve this we:
* Check the record has the correct token information.
* Check the record has the correct birth predicate.
* Transfer the token value from an old record to this new record.
* Verify the record commitment and its path to the local data root.

### 2.2 The Information:

To check token identity and token value we need the record payload:

* `payload`:
    * `id_t`: id of the token
    * `value_t`: token value being transferred

The program needs the starting register information:
* `id_t0`: id of the token (from the previous `token_debit`)
* `vb_t0`: intermediate value (from the previous `token_debit`) 

To verify the record commitment we need:
* `cm`: record commitment we are verifying
* `address`: account address
* `value`: record value
* `payload`: record payload
* `id_b`: record birth predicate identifier
* `id_d`: record death predicate identifier
* `nonce_sn`: serial number nonce
* `r_cm`: record randomness commitment

To verify the local_data_commitment's path to the local data root:
* `local_data_root`: the root of the merkle tree we are verifying
* `i`: global index
* `sn`:  serial number
* `cm`: record commitment
* `memo`: transaction memo
* `id_n`: network id
* `r_local_data`: randomness for commitment leaf
* `H(id_t0, vb_t0)`: hash of the starting token id and token balance
* `H(id_t1, vb_t1)`: hash of the ending token id and token balance

### 2.3 Passing the Information to Leo:

the input register `input.register` file in the `inputs/` directory contains the initial state:

```leo title="inputs/input.register"
[register]
id_t0: u8[32] = [0u8; 32];
vb_t0: u32  = 0u32;
id_token_credit: u8[32] = [0u8; 32];
```

Similar to `token_debit`, the program inputs file is empty since we fetch the `id_t` and `value_t` from `payload`.

```leo title="inputs/erc20.in
[main]
```

Record and transaction state are passed into Leo through the `.state` file.

```leo title="outputs/erc20.state"
[record]
cm: record_commitment
address: account_address
value: record_value
payload: record_payload
id_b: birth_predicate_id
id_d: death_predicate_id

[tx]
nonce_sn: serial number nonce
r_cm: randomness_commitment
memo: transaction memo

[global]
local_data_root: merkle tree root
index: global index
sn: serial number
id_n: network id
r_local_data: randomness
```

All values in the `input/` file are be callable as constant values in the Leo program.

Return values are be written to the `output.register` file.

```leo title="outputs/output.register"
[register]
id_t1: u8[32] = [0u8; 32];
vb_t1: u32 = 0u32;
id_token_credit: [0u8; 32];
```

### 2.4 The Function:

The `token_credit` Leo function should:
 1. Check the program input token id matches the starting register token id.
 2. Check the record birth predicate is equal to `token_credit`.
 3. Subtract the token value balance of this record from the starting register value balance.
 4. If the global index of this record is 2, check the output register value balance is 0. This check ensures that no new money is created.
 5. Verify the record commitment.
 6. Verify the local data root.
 7. Return the token id, output value balance, and `id_token_credit`.
 
 ```leo title="token_credit.leo"
function main() -> (u8[32], u32, u8[32]) {
    assert_eq!(id_t0, payload.id_t); // 1.
    assert_eq!(id_b, token_credit); // 2.
    
    let id_t = id_t0;
    let mut vb_t = vb_t0;
    vb_t -= payload.value_t; // 3.

    if (index == 2u32) {
        assert_eq!(vb_t, 0u32); // 4.
    }

    let cm_actual = commit(address, value, payload, id_b, id_d, nonce, r_cm);

    assert_eq!(cm, cm_actual); // 6.

    let hash_t0 = hash(id_t0, vb_t0);
    let hash_t1 = hash(id_t, vb_t);
    let l_data_actual = merkle_root(index, sn, cm, memo, id_n, hash_t0, hash_t1, r_local_data);
    
    assert_eq!(local_data_root, l_data_actual); // 7.

    return (id_t, vb_t, id_token_credit) // 8.
}
```


# Leo File reference

Definition and example for each file providing outside information to a Leo program

## `inputs/` folder

Contains the witness input and starting register files

### `.in` file

The witness input to the program. It should match the arguments to the main function exactly

```leo
[main]
a: u32 0u32;
```

### `.register` file

The starting register information provided to the circuit. 
This could be the register values to an old or new record.

```leo
[register]
index: u32 = 0u32;
root: u8[32] = [0u8; 32];
```

## `outputs/` folder

Contains files generated by the Leo compiler or the current transaction execution.

### `.state` file

The record and transaction information generated by the current create transaction execution.

```leo
[record]
record_commitment
account_address
record_value
record_payload
birth_predicate_id
death_predicate_id

[state]
nonce
randomness_commitment
```


### `.out`

The ending register values that store intermediate program information.
This information should be stored in the local data commitment and passed to the next record.

```leo
[register]
index: u32 = 0u32;
root: u8[32] = [0u8; 32];
```

# Locking and Unlocking
:::caution
This section is a work in progress!
:::
# Death

## Lock
## Unlock
## Run Procedure 0 Death
## Run Procedure 1 Death

# Birth

## Verify Lock
## Verify Unlock
## Run Procedure 0 Birth
## Run Procedure 1 Birth