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

|          Parameter          |                       Type                        | Size (in bytes) |
|:---------------------------:|:-------------------------------------------------:|:------------:|
|           `owner`           |                      address                      |      32      |
|           `value`           |                        u64                        |       8      |
|          `payload`          |                       bytes                       |      32      |
|    `birth_program_id`       |                       bytes                       |      48      |
|    `death_program_id`       |                       bytes                       |      48      |
|    `serial_number_nonce`    |                       bytes                       |      32      |
|   `commitment_randomness`   |                       bytes                       |      32      |

### Owner

```
aleo1fuge6ah8c9custvmlju5t30gk8p8lar5x36jlfa2glhgy9n0fuxsreeh2c
```
The **record owner** is an [account address](00_accounts.md#account-address),
and specifies the party who is authorized to spend the record.

### Value

```
4130
```

The **record value** specifies the amount of Aleo credits stored in the record.

### Payload

```
[ RECORD BYTE ARRAY ]
```

The **record payload** encodes arbitrary application information.

### Birth Program ID

```
692575f93ebd4c58e9e6ed288d7ef2328623a8e391224b3cf24c1e65d4f0660ed5d14b78f84a259f14cb24a91fd58386
```

The **birth program ID** corresponds to the [birth program](06_glossary.md#birth-program) that must be satisfied when the record is created.

### Death Program ID

```
9cb1c71986e72e36640b7fbe09d1853a37bdcbc19a406526a80e54ce37b5c1dd5d14b78f84a259f14cb24746a7fe8b01
```

The **death program ID** corresponds to the [death program](06_glossary.md#death-program) that must be specified when the record is spent.

### Serial Number Nonce

```
c8d81ac0028a5643449a80c3cdf8e8f9593ca5e6bcf103b3c33606b01ea20108
```

The **serial number nonce** is used to generate a [record serial number](06_glossary.md#record-serial-number) when the record is being spent.

### Commitment Randomness

```
5acbd2c0475c7b4afa72173d7ed800edfc1bde235f5cf4e6c09ef70a36a48a09
```
The **commitment randomness** used to generate the [record commitment](06_glossary.md#record-commitment).

## Advanced Topics

### Record Encryption

When a record is produced in a transaction, it is verifiably encrypted in the transaction and stored on the ledger.
This enables users to securely and privately transfer record data and value between one another over the public network. 
Only the sender and receiver with their corresponding account view keys are able to decrypt these records.

### Dummy Records

To protect privacy while enabling transactions that reason over different numbers of transaction inputs and transaction outputs,
users may include dummy records in their transaction inputs and outputs to pad up to the required factor to create a transaction.
Dummy records are required to have to a record value of zero, the dummy birth program ID, and the dummy death program ID.

### Double Spends

In Aleo, the same account record is unable to be spent across two distinct transactions. This is enforced by the requirement that
the serial number of each new record and the commitment of each old record must be unique.
If a previously existing serial number is detected in a transaction, both the transaction proof and consensus will fail to include
the transaction in the next block.
