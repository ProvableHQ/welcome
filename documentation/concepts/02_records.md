---
id: records
title: Records
sidebar_label: Records
---

A **record** is a fundamental data structure for encoding user assets and application state.

Each account record contains information that specifies the record owner, its stored value, and its application state. 
An Aleo account can create a [transaction](03_transactions.md) to consume a record and produce a new record in its place.
Records on Aleo are encrypted to the record owner address, ensuring that all records on Aleo are fully private.

## Components of a Record

An Aleo record is serialized in the following format:

| Parameter |          Type          |
|:---------:|:----------------------:|
|  `owner`  |        address         |
|  `gates`  |          u64           | 
|  `data`   | Map<Identifier, Entry> |
|  `nonce`  |         group          |

### Owner

```
aleo1r0dry2tlhjt0yplctz85692kjpqsadn7xgxsmrehkasykjxynypqza3fpl
```
The **record owner** is an [account address](00_accounts.md#account-address),
and specifies the party who is authorized to spend the record.

### gates

```
4130
```

The **record gates** specifies the amount of Aleo credits stored in the record.

### Data

```
[ RECORD BYTE MAP ]
```

The **record data** encodes arbitrary application information.

### Nonce

```
3024738992072387217402876176731225730589877991873828351104009809002984426287group
```

## Advanced Topics

### Record Encryption

When a record is produced in a transaction, it is verifiably encrypted in the transaction and stored on the ledger.
This enables users to securely and privately transfer record data and value between one another over the public network. 
Only the sender and receiver with their corresponding account view keys are able to decrypt these records.
