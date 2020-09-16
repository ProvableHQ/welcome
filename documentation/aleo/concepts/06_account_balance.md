# Account Balance

## Introduction

Aleo operates under the UTXO model with records that hold balances and program data. An account's balance is the sum 
of all the unspent record values that the account owns. Each account is comprised of a `private key`, `proving key`, 
`view key`, and `address` as defined [here](./00_accounts.md).

Every [transaction](./03_transactions.md) spends 2 records and creates 2 new records; these 2 new records are then 
encrypted and included in the transaction itself. Each record is encrypted such that only with the record owner's 
corresponding [account view key](./00_accounts.md#account-view-key) can decrypt and reason about the record.

## Owned Records

Because Aleo is fully private, the user must scan the chain and attempt to decrypt every encrypted record with the 
`account view key` to find all the records an `account` owns. Only the `account view key` that successfully decrypts the 
record are determined to owned by the corresponding `account address` and spendable by the `account private key`.

## Spent Records

Every record has a [commitment](./07_glossary.md#record-commitment) which is revealed when the record is created and a 
[serial number](./07_glossary.md#record-serial-number) that is revealed when the record is spent. Each transaction 
has 2 `commitment`s and 2 `serial_number`s corresponding to the spending of 2 records and creating of 2 records. 
For privacy reasons, the `commitment` and `serial_number` of each record can't be linked unless the user has the 
`account private key` that is authorized to spend that particular record.

To determine if a record has been spent, a user must determine if an owned record's `serial number` already exists 
on chain in a transaction by deriving the `serial number` from an owned record and the `account private key` .

### Determine Account Balance

Below are the steps to scan the chain and determine an account's balance.

#### 1. Scan the ledger to find all owned records

Requirements: `account_view_key`

    1. Sequentially fetch all the blocks in the ledger
    2. Fetch the transactions in each block
    3. Attempt to decrypt the encryped records in each transaction with a view key
    4. Store the records that can be successfully decrypted

#### 2. Find Spent Records

    1. Derive the serial number for each owned record
    2. Sequentially fetch all the blocks in the ledger
    3. Fetch the transactions in each block
    4. Check if the transaction contains a serial number corresponding to one of the owned records

Note: This step can be done in parallel with [Step 1](#1.-Scan-the-ledger-to-find-all-owned-records) to prevent having to 
rescan the entire ledger.

#### 3. Sum Record Balances
    
The account balance is the sum of the values for each owned and unspent record.

### RPC Interfacing

Each node has a [JSON-RPC Server](../../autogen/testnet/rpc/concepts/00_rpc_server.md) that can be used to interface and scan the ledger.


#### Fetching Blocks

1. Fetch latest block number, `num_blocks`
    - Get the number of blocks with [getblockcount](../../autogen/testnet/public_endpoints/03_getblockcount.md)
2. Fetch every block on the ledger
    - For every block number (0 to `num_blocks`)
      - Get the block hash with [getblockhash](../../autogen/testnet/public_endpoints/04_getblockhash.md)
      - Get the block data with [getblock](../../autogen/testnet/public_endpoints/02_getblock.md) using the block hash
      
#### Fetching Transactions

1. Transaction hashes
    - Get the `transactions` field in every [getblock](../../autogen/testnet/public_endpoints/02_getblock.md) call
2. Transaction data
    - Get the transaction data with [gettransactioninfo](../../autogen/testnet/public_endpoints/09_gettransactioninfo.md) using the transaction hash

#### Decrypting Records

1. Fetch the encrypted record
    - Get the `encrypted_records` field in every [gettransactioninfo](../../autogen/testnet/public_endpoints/09_gettransactioninfo.md) call
2. Decryption
    - Attempt to decrypt the record with [decryptrecord](../../autogen/testnet/private_endpoints/03_decryptrecord.md) using the `encrypted_record` and an `account view key`

#### Decoding Records

1. Record data
    - Get the record data with [decoderecord](../../autogen/testnet/private_endpoints/02_decoderecord.md) using 
    the raw record bytes from the [decryptrecord](../../autogen/testnet/private_endpoints/03_decryptrecord.md) call.
