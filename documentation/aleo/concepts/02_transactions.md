---
id: transactions
title: Aleo Transactions
sidebar_label: Transactions
---

Transactions are core data structures in the Aleo protocol that represent state transitions on the ledger. 
In Aleo, each transaction spends two [records](01_records.md) and creates two new records.

## Components

#### Network Id

The network this transaction should be included in.

#### Ledger Digest

The root of the commitment Merkle tree used at the time of transaction generation.

#### Old Record Serial Numbers

The [serial numbers](07_glossary.md#record-serial-number) of the records being spent by the transaction.

#### New Record Commitments

The [commitments](07_glossary.md#record-commitment) of the new records being created by the transaction.

#### Predicate Commitment

The commitment on the predicates being used to spend the old records and the predicates used to create the new records in the transaction.

#### Local Data Commitment

The commitment on the data being used to create the transaction - old records, new records, memo, and network id.

#### Value Balance

The difference between input and output record values. This value effectively becomes the transaction fee for the miner. 
Only coinbase transactions can have a negative value balance representing Aleo credits being minted.

#### Signatures

The [randomized signatures](07_glossary.md#randomized-signature) used by the record spenders to allow for authorized delegation of transaction generation.

#### Record Ciphertexts

The encrypted ciphertexts of the new records created by the transaction.

#### Transaction Proof

The zero-knowledge proof that the transaction is valid.

#### Memorandum

The transaction memorandum is arbitrary public information associated with the transaction. This value must be unique among all transactions in the network.

## Serialization

Transactions are serialized in the format below:

|        Parameter        |                       Type                       | Size (bytes) |
|:-----------------------:|:------------------------------------------------:|:------------:|
|   `old_serial_numbers`  |                  array[variable]                 |      128     |
|    `new_commitments`    |                  array[variable]                 |      64      |
|       `memorandum`      |                       bytes                      |      32      |
|     `ledger_digest`     |                     variable                     |      32      |
|   `transaction_proof`   |                     variable                     |      579     |
|  `predicate_commitment` |                     variable                     |      32      |
| `local_data_commitment` |                     variable                     |      32      |
|     `value_balance`     |                        i64                       |       8      |
|       `signatures`      |                  array[variable]                 |      128     |
|     `ciphertext` len    | [var_int](07_glossary.md#variable-length-integer)|      1+      |
|       `ciphertext`      |                  array[variable]                 |     512+     |

## Creating Transactions

The steps to create a transaction are as follows:

1. Generate the serial numbers of the records being spent
2. Generate the new records
3. Generate the predicate commitment
4. Generate the local data commitment
5. Generate the transaction signatures
6. Generate the ledger digest and [ledger membership witnesses](07_glossary.md#ledger-membership-witness) for the input record commitments 
7. Generate the inner SNARK proof
8. Generate the predicate SNARK proofs
9. Generate the transaction proof
10. Compose the transaction with the attributes above


## Verifying Transactions

The steps to verify a transaction are as follows:

1. Verify that each serial number in `old_serial_numbers` does not already exist in the ledger.
2. Verify that each commitment in `new_commitments` does not already exist in the ledger.
3. Verify that the memo `memorandum` does not already exist in the ledger.
4. Verify that the transaction proof `transaction_proof` verifies.


Formal Definitions are defined [here]()