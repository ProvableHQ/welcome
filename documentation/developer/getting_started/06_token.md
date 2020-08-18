---
id: token
title: Token Example Overview
sidebar_label: Token Example
---

## Goal

Support transfer for a token with id and value

## Implementation

Tokens are stored inside of record payloads. The record payload specifies the token id and token value balance. The owner of the record owns the tokens.

### Transfer

To transfer a token, a sender should first have a record that specifies the token id and their token value balance. In a transaction, the token_debit function will be invoked on the sender’s input record to begin transferring to the receiver. The token_credit function will be invoked on the receiver’s output record to finalize the transfer in a valid transaction.


#### Inputs
```leo title=token/inputs/token.state
[main]

[registers]
id: u8
vb: u8
predicate_id: u8[48]

…

[state]
leaf_index: u32

[record]
death_predicate_id: u8[48]
birth_predicate_id: u8[48]
payload: [ id || vb ]

```

#### token_debit overview

  1. Check token ids match
  2. Check record death is token_debit
  3. Check record birth is token_credit
  4. If the current record is old_record_0
	Check that the register value balance is 0
  5. Add payload value to register value balance
6. Return registers

#### token_credit overview

  1. Check token id's match
  2. Check record birth
  3. Subtract payload value from register value balance
  4. Check that no money is created
  5. If the record is new_record_1
	Check that register value balance is 0
6. Return registers

## Code: 


```leo
// The token debit function
function debit(
    input,
    token_debit: u8[48],
    token_credit: u8[48]
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

    // 6. Check that no money is lost
    let no_lost_money = vb_t_new >= vb_t_old;
    let condition5 = no_lost_money == true;

    // 7. Debit the funds if checks pass
    let passed = condition1 && condition2 && condition3 && condition4 && condition5;

    if passed {
        return (id_t, vb_t_new)
    } else {
        return (id_t, vb_t_old)
    }
}

// The token credit function
function credit(
    input,
    token_credit: u8[48]
) -> (u8, u8) {
    let id_t = input.registers.id;
    let payload_id_t = input.record.payload[0];

    // 1. Check token id's match
    let condition1 = id_t == payload_id_t;

    // 2. Check record birth
    let id_b = input.record.birth_program_id;
    let condition2 = id_b == token_credit;

    // 3. Subtract payload value form register value balance
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


// The token main function
function main(input, token_debit: u8[48], token_credit: u8[48]) -> (u8, u8) {

    //let (id_t, vb_t) = debit(input, token_debit, token_credit);

    let (id_t, vb_t) = credit(input, token_credit);

    return (id_t, vb_t)
}
```
:::warning
This example is a proof of concept. It is not secure and should not be used for production.
:::
:::info
For a more in-depth description of how tokens use records and state check out the [**programming model**](aleo/documentation/developer/programming_model/01_token.md) for this token.
:::