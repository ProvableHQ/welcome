---
title: Aleo Records
sidebar_label: Records
---

## What are Records?

Records are core data structures in the Aleo protocol that represent state on the ledger - Aleo credits and arbitrary application state.

Records are spent and created via [transactions](02_transactions.md) and are analogous to UTXOs, as they can only be spent once. However unlike UTXOs, records are fully private. 
Records are encrypted on the ledger, and only the record owners can decrypt the record contents.

## Components

#### Account Address

The [account address](00_account.md#Address) of the record owner that can spend the record.

#### Value

The amount of Aleo credits this record holds.

#### Payload

A record payload that encodes arbitrary application information.

#### Birth Predicate Hash

The id of the [birth predicate](07_glossary.md#Birth Predicate) that must be satisfied when the record is created.

#### Death Predicate Hash

The id of the [death predicate](07_glossary.md#Death Predicate) that must be specified when the record is spent.

#### Serial Number Nonce

The nonce used to generate the record [serial number](07_glossary.md#Record Serial Number) when the record is being spent.

#### Record Commitment

The [commitment](07_glossary.md#Record Commitment) on the contents of the record.

#### Commitment Randomness

The randomness used to generate the record commitment.

## Serialization

Records are serialized in the format below:

|          Parameter          |                       Type                        | Size (bytes) |
|:---------------------------:|:-------------------------------------------------:|:------------:|
|          `address`          |                     variable                      |      32      |
|           `value`           |                        u64                        |       8      |
|          `payload`          |                       bytes                       |      32      |
| `birth_predicate_hash` len  | [var_int](07_glossary.md#Variable Length Integer) |      1+      |
|    `birth_predicate_hash`   |                       bytes                       |      48+     |
| `death_predicate_hash` len  | [var_int](07_glossary.md#Variable Length Integer) |      1+      |
|    `death_predicate_hash`   |                       bytes                       |      48+     |
|    `serial_number_nonce`    |                     variable                      |      32      |
|         `commitment`        |                     variable                      |      32      |
|   `commitment_randomness`   |                     variable                      |      32      |
|                             |                                                   |              |

## Encryption

New records are encrypted and live in the transactions that create them. 
This allows for the secure and private transfer of sensitive record information on a public network, 
because only the record owners can decrypt these records. The encryption algorithm is outlined [here]().

## Noop Records

Because Aleo transactions are all have 2 records as input and 2 records as output, the the existence of noop records are necessary to enable the creation of new non-noop records that hold state and can be spent.
Additionally, there is no way to determine if a spent or new record is a noop directly from its serial number or commitment, so there is no leak of privacy.

## Double Spends

A record can not be spent in two different transactions because each record has a unique serial number; once a serial number is already included in previous transaction, the network will reject all subsequent transactions trying to spend the same serial number. 