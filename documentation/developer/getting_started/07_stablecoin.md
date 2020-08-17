---
id: stablecoin
title: StableCoin Example Overview
sidebar_label: StableCoin Example
---

## Goal

Support token functionality plus a policy identifier that is managed by a central authority.

## Implementation

The central authority is identified by a public address. Policies are encoded in programs and enforced with a signature from the central authority. The policy signature is stored in the record payload.

### Policies

The central authority address should be provided as input to the program. Each time a token is transferred, the sender invokes the program with the most recent policy. If the signature in the record payload is valid, the policy is enforced. If the policy is enforced successfully, the transfer will execute. If any step fails, the transfer will fail.

To update the policy, the central authority will release a new program with the updated policy. Token holders with old records that satisfy the new policy can transfer tokens normally using the new program. However, if a token holder owns an old record that does not satisfy the new policy, their transfer will fail to execute. For example, a centrally backed stable coin that enforces blacklisting can check if a token’s owner is equal to an illegal address. The blacklisted owner will not be able to transact under the new policy.

#### stable_token_debit overview

1. Check that policy signature is valid
2. Check that policy is enforced
3. Do token_debit

#### stable_token_credit overview

1. Check that policy signature is valid
2. Check that policy is enforced
3. Do token_credit

## Code:

### Inputs

[main]
central_authority: address

[registers]
Id: u8
vb: u8
predicate_id: u8[48]

…

[[public]]
[state]
leaf_index: u32

[[private]]
[record]
death_predicate_id: u8[48]
birth_predicate_id: u8[48]
payload: [ id || vb || signature ]

### stable_token_debit pseudocode

1. Verify record payload signature.verify(policy, central_authority)
2. Assert !blacklist.contains(record owner)
3. Assert registers id == record payload id
4. Assert token_debit == record death_predicate_id
5. 3. Assert token_credit == record birth_predicate_id
6. If old record 0 == state leaf_index
	Assert registers vb == 0
6. Add registers vb += record payload vb
7. Return (registers id, registers vb, token_credit)

### stable_token_credit pseudocode 
1. Verify record payload signature.verify(policy, central_authority)
2. Assert !blacklist.contains(record owner)
3. Assert registers id == record payload id
4. Assert registers predicate_id == record birth_predicate_id
5. Assert token_credit == record birth_predicate_id
6. Registers vb += record payload vb
7. If new record 1 == state leaf_index
	Assert registers vb == 0
8. Return (registers id, registers vb, ?)
