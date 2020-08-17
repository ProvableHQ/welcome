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

### Inputs

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

### token_debit pseudocode

  1. Assert registers id == record payload id
  2. Assert token_debit == record death_predicate_id
  3. Assert token_credit == record birth_predicate_id
  4. If old record 0 == state leaf_index
	Assert registers vb == 0
  5. Add registers vb += record payload vb
6. Return (registers id, registers vb, token_credit)

### token_credit pseudocode
1. Assert registers id == record payload id
2. Assert registers predicate_id == record birth_predicate_id
3. Assert token_credit == record birth_predicate_id
4. Registers vb += record payload vb
5. If new record 1 == state leaf_index
	Assert registers vb == 0
6. Return (registers id, registers vb, ?)
