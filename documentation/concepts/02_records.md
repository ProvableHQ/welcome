---
id: records
title: Records
sidebar_label: Records
---

A **record** is a fundamental data structure for encoding user assets and application state.

Each account record contains information that specifies the record owner, its stored value, and its application state. 
Records in Aleo are consumed and newly created from a [transition](04_transitions.md) function. A [transaction](03_transactions.md) will store multiple transitions, each of which is responsible for the consumption and creation of its individual records. 
Optionally, if the `visibility` of the record is `private`, it can be encrypted using the owner's address secret key. 

## Components of a Record

An Aleo record is serialized in the following format:

|  Parameter   |          Type          |                              Description                              |
|:------------:|:----------------------:|:---------------------------------------------------------------------:|
|    `apk`     |        address         |       The address public key of the owner of the program record       |
|   `gates`    |          u64           |           The Aleo balance (in gates) of the program record           |
|    `data`    | Map<Identifier, Entry> | A data payload containing arbitrary application-dependent information |
|   `nonce`    |         group          |             The serial number nonce of the program record             |
| `visibility` |          enum          |  The record's visibility, which can either be `public` or `private`   |
### Owner

```
aleo1r0dry2tlhjt0yplctz85692kjpqsadn7xgxsmrehkasykjxynypqza3fpl
```
The **record owner** is an [account address](00_accounts.md#account-address),
and specifies the party who is authorized to spend the record.

### Gates

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
The **serial number nonce** is used to create a unique identifier for each record,
and is computed via a `PRF` evaluation of the address secret key `ask` of the `owner` and the record's serial number.


### (Optional) Record Encryption
A record which has a `visibility` of `private` is verifiably encrypted in the transition and stored on the ledger.
This enables users to securely and privately transfer record data and values between one another over the public network. 
Only the sender and receiver with their corresponding account view keys are able to decrypt these records.
