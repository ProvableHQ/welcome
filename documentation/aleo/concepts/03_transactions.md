---
id: transactions
title: Transactions
sidebar_label: Transactions
---

A **transaction** is a fundamental data structure for publishing a state transition on the ledger.

## Components of a Transaction

An Aleo transaction is serialized in the following format:

|        Parameter        |                       Type                       | Size (bytes) |
|:-----------------------:|:------------------------------------------------:|:------------:|
|   `old_serial_numbers`  |                     bytes                        |       64     |
|    `new_commitments`    |                     bytes                        |       64     |
|  `program_commitment`   |                     bytes                        |       32     |
|    `local_data_root`    |                     bytes                        |       32     |
|     `value_balance`     |                      i64                         |        8     |
|       `memorandum`      |                     bytes                        |       32     |
|       `network_id`      |                      u8                          |        1     |
|       `signatures`      |                     bytes                        |      128     |
|     `ledger_digest`     |                     bytes                        |       32     |
|   `transaction_proof`   |                     bytes                        |      579     |
|   `encrypted_records`   |                     bytes                        |      518     |

### Old Serial Numbers

```
[e1bf55b44e4b6ee475e7f21996b34af0b815d9412974cd6b24979c47ee95cd8d,
 e8a82df9d2e92758f50e52832a0b635718c253ce60962e993afebca9a726de91]
```

The **old serial numbers** are the [serial numbers](06_glossary.md#record-serial-number) for corresponding records
that were consumed by the transaction.

### New Commitments

```
[400dc473eff14e0be0a292ac6609963a59f5176cfdb8d840f635ec4f2db50410,
 2854be536b8ba0feafd10ae0725c1f920aec6b18740607321660b872feac4700]
```

The **new commitments** are the [commitments](06_glossary.md#record-commitment) for corresponding records that were produced by the transaction.

### Program Commitment

```
121edc861e1730306397c895152e5b76da00d0b598ea6225b22aaf4b3741f323
```

The **program commitment** on the programs being used to spend the old records and the programs used to create the new records in the transaction.

### Local Data Root

```
46cabfc26131ade4dac2b5f5893c789d8e295bdc9d5786f5e1658da91300c008
```

The **local data root** is a commitment of the following record data in the transaction - old records, new records, memorandum, and network ID.

### Value Balance

```
1562500
```

The value balance denotes difference between input and output record values. This value effectively becomes the transaction fee for the miner. 
Only coinbase transactions can have a negative value balance representing Aleo credits being minted.

### Memorandum

```
53967badcd6356eb5b384eb2f57745c380c5034a843fa500ac7f7db60f181fd3
```

The *transaction memorandum* is arbitrary public information associated with the transaction. This value must be unique among all transactions in the network.

### Network ID

```
0
```

The **network ID** indicates the network that the transaction is included in. For convention, the mainnet network ID is `0`.

### Signatures

```
[b6c23dc215c7ffb66a68436597bb50cf1c13b972e8a33909c8fd2fe6a859c80104d6afabbd875ae911818cf76a9a72229cf31cde036d6c33199abc39692b9700,
 5b74266ae4566ca630c0ce2df1b9bec84c788c6635a40f80e1761dc1bfb0c600f720ea0c6d5e9b8a579e6f00ad6ccfdf916b96b1189c1ff470bfb77d10513703]
```

The [randomized signatures](06_glossary.md#randomized-signature) used by the record spenders to allow for authorized delegation of transaction generation.

### Ledger Digest

```
87e08a7f2b9d9dc829e5f43edd02e37a26bfc50cb3c9e7ce4c4d327c494a5803
```

The **ledger digest** is the root of a global Merkle tree that contains all record commitments from transactions on the ledger.
When creating a transaction, the user must select a ledger digest that includes the record commitments for both of the old records being consumed.

### Encrypted Records

```
[ ENCRYPTED RECORD BYTES ]
```

The **encrypted records** are ciphertexts of the new records created by the transaction.

### Transaction Proof

```
[ ZERO KNOWLEDGE PROOF BYTES ]
```

The **transaction proof** is a zero-knowledge proof attesting to the validity of the transaction.

## Advanced Topics

### Creating Transactions

The steps to create a transaction are as follows:

1. Generate the serial numbers of the records being spent
2. Generate the new records
3. Generate the program commitment
4. Generate the local data commitment
5. Generate the transaction signatures
6. Generate the ledger digest and [ledger membership witnesses](06_glossary.md#ledger-membership-witness) for the input record commitments 
7. Generate the inner SNARK proof
8. Generate the program SNARK proofs
9. Generate the transaction proof
10. Compose the transaction with the attributes above


### Verifying Transactions

The steps to verify a transaction are as follows:

1. Verify that each serial number in `old_serial_numbers` does not already exist in the ledger.
2. Verify that each commitment in `new_commitments` does not already exist in the ledger.
3. Verify that the memo `memorandum` does not already exist in the ledger.
4. Verify that the transaction proof `transaction_proof` verifies.


Formal Definitions are defined [here]()