---
id: token_swap
title: Token Swap Example Overview
sidebar_label: Token Swap Example
---

# Goal

Support a decentralized exchange for tokens that preserves trade anonymity and trade confidentiality

## Implementation

A maker publishes an intention to trade a token by invoking the exchange_or_cancel_program in exchange mode. A taker interested in the trade provides their record with the desired token amount as old record 0 in a transaction. The trade will execute if old record 1 is the maker’s intention and old record 0 satisfies the program. Two new records will be created with the traded tokens and values.

A maker cancels an intention to trade by invoking the exchange_or_cancel_program in cancel mode. The program checks that the maker is the original owner of the tokens. A new record transferring the tokens back to the maker is created.

## 3 Programs:
1. exchange_token_debit
2. exchange_or_cancel
3. exchange_token_credit

### 1. Exchange_token_debit overview

1. Check the record is old record 0 // we require the taker’s token to be first
2. Check registers token ids match
3. Check record death is exchange_token_debit
4. Check record birth is exchange_token_credit
5. Check registers values are 0
6. Add payload value to register value 1 balance
7. Set register taker_recv to record owner
8. Return registers

### 2. Exchange_or_cancel overview

1. Check that record death is exchange_or_cancel
2. if exchange == true
    1. Do exchange
3. else exchange == false
    1. Do cancel 


#### 2.1 Exchange overview

1. Check the record is old record 1 // we require the maker’s token to be secondCheck registers token id 0 matches
2. Check registers maker address matches
3. Check registers token ids match
4. Check registers value 0 is 0
5. Check registers value 1 is matches
6. Add payload value to register value 0
7. Return registers

#### 2.2 Cancel

1. Check refund address matches
2. Check registers token ids match
3. Check registers values are 0
4. Add payload value to register value 0
5. Set taker_recv to the refund address
6. Return registers 


### 3. Exchange_token_credit overview

1. Check record birth is exchange_token_credit
2. If record is new record 0
    1. Check record owner is the taker’s recv address
    2. Check registers token 0 ids match
    3. Subtract payload value from register value 0
    4. Check register value 0 is 0
    5. Return registers
3. Else record is new record 1
    1. Check record owner is the maker’s recv address
    2. Check registers token 1 ids match
    3. Subtract payload value from register value 1
    4. Check register value 1 is 0
    5. Return registers


## Code:

### Inputs
```leo
[main]
exchange: bool
maker_recv: address

[registers] // make sure value is conserved for both assets in trade
maker_recv: address
id_0: u8
vb_0: u8

taker_recv: address
id_1: u8
vb_1: u8

…

[[public]]
[state]
leaf_index: u32

[[private]]
[record]
Owner: address
Payload: [  id_0  ||  vb_0  ||  id_1  ||  vb_1 ]
```

### exchange_or_cancel program

1. Check that record birth is exchange or cancel
2. If exchange == true
    1. Exchange trade
3. Else exchange == false
    1. Cancel trade


### Exchange trade record pseudocode:

Old record 0: Taker’s token debit function for 5Y

	Payload: [ id || vb ]

    1. Assert 0 == record state leaf_index
    2. Assert register id_1 == record payload id
    3. Assert exchange_token_credit == record birth_predicate_id
    4. Assert exchange_token_debit == record death_predicate_id
    5. Add registers vb_1 += payload vb // Debit the taker amount for the trade
    6. Set registers taker_recv = record payload recv
    7. Return registers ( maker_recv, id_0, vb_0, taker_recv, id_1, vb_1)

Old record 1: Makers’s intention to trade 10X for 5Y

	Payload:  [  id_0  ||  vb_0  ||  id_1  ||  vb_1 ]

    1. Assert 1 == record state leaf index
    2. Assert exchange_or_cancel = record death_predicate_id
    3. If exchange mode == true
    4. Assert registers maker == record payload recv
    5. Assert registers id_0 == record payload id_0: X
    6. Assert registers vb_0 == 0
    7. Assert registers id_1 == record payload id_1: Y
    8. Assert registers vb_1 == record payload vb_1: 5
    9. Add registers vb_0 += record payload value // Debit the maker’s amount for the trade
    10. Set registers maker_recv = record payload recv
    11. Return registers ( maker_recv, id_0, vb_0, taker_recv, id_1, vb_1)

New record 0: Takers token credit function for 10X

	Payload: [ id || vb ]

    1. Assert exchange_token_credit == record birth_predicate_id
    2. If 2 == record state leaf_index
    3. Assert registers taker_recv == record owner
    4. Assert registers id_0 == record payload id_0: X
    5. Assert registers vb_0 == record payload vb_0: 10
    6. Subtract registers vb_0 -= record payload vb_0 // Transfer the maker’s tokens to the taker
    7. Assert registers vb_0 == 0

New record 1: Maker’s token credit function for 5Y

	Payload: [ id || vb ]

    1. Assert exchange_token_credit == record birth_predicate_id
    2. If 3 == record state leaf_index
    3. Assert registers maker_recv == record owner
    4. Assert registers id_1 == record payload id_0: Y
    5. Assert registers vb_1 == record payload vb_0: 5
    6. Subtract registers vb_1 -= record payload vb_0  // Transfer the taker’s tokens to the maker
    7. Assert registers vb_1 == 0

### Cancel trade record pseudocode:

Old record 0: dummy	
 
Old record 1: Cancel maker’s request to trade 10X for 5Y

	Payload:  [  id_0  ||  vb_0  ||  id_1  ||  vb_1 ]

    1. Assert 1 == record state leaf index
    2. Assert exchange_or_cancel = record death_predicate_id
    3. If exchange mode == false
    4. Assert refund == record payload recv
    5. Assert registers id_0 == record payload id_0
    6. Assert registers vb_0 == 0
    7. Assert registers id_1 == record payload id_1
    8. Assert registers vb_1 == 0
    9. Add registers vb_0 += record payload vb_0
    10. Set registers taker_recv = record payload recv
    11. Return registers ( maker_recv, id_0, vb_0, taker_recv, id_1, vb_1)

New record 0: Maker’s token credit function for 10X
    1. Assert exchange_token_credit == record birth_predicate_id
    2. Assert 3 == record state leaf_index
    3. Assert registers taker_recv == record owner // The maker is the taker in a trade cancel
    4. Assert registers id_1 == record payload id: X
    5. Assert registers vb_1 == record payload vb: 10
    6. Subtract registers vb_1 -= record payload vb
    7. Assert registers vb_1 == 0

New record 1: dummy
