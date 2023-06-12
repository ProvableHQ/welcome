---
id: records_unspent
title: Records Unspent
sidebar_label: Records Unspent
---

```bash title=ENDPOINT
GET /testnet3/records/unspent
```

Returns the unspent records for the given view key.

### Body

|  Type  |                     Description                     |
|:------:|:---------------------------------------------------:|
| string | The view key corresponding to the requested records |

### Response

| Parameter |                 Type                  |            Description             |
|:---------:|:-------------------------------------:|:----------------------------------:|
| `result`  | [array](../../concepts/02_records.md) | The records for the given view key |

### With snarkOS CLI

The `snarkos developer scan` command is used to scan the Aleo network for transaction records associated with a specific key. This key can be either a `view key` or a `private key`, depending on the use case.

```
snarkos developer scan --view-key "${VIEWKEY}" --endpoint "${ENDPOINT}" [--last N | --start N --end N]
snarkos developer scan --private-key "${PRIVATEKEY}" --endpoint "${ENDPOINT}"
```

### Options

- `--view-key "${VIEWKEY}"`: Specifies the view key to use when scanning for transaction records. A view key allows you to view transactions associated with the key but does not permit you to make transactions. This option is mutually exclusive with `--private-key`.

- `--private-key "${PRIVATEKEY}"`: Specifies the private key to use when scanning for transaction records. A private key allows you to make transactions and access funds.

- `--endpoint "${ENDPOINT}"`: Specifies the endpoint of the Aleo network API that `snarkos` tool will interface with.

- `--last N`: Specifies the number of the most recent blocks to scan for transaction records. Replace `N` with the desired number of blocks. This option is mutually exclusive with `--start` and `--end`.

- `--start N --end N`: Specifies a range of blocks to scan for transaction records. Replace the first `N` with the start block number and the second `N` with the end block number.

### Examples

1. Scan the last 100 blocks for transaction records associated with a view key:

    ```
    snarkos developer scan --view-key "${VIEWKEY}" --endpoint "https://vm.aleo.org/api" --last 100
    ```

2. Scan all blocks for transaction records associated with a private key:

    ```
    snarkos developer scan --private-key "${PRIVATEKEY}" --endpoint "https://vm.aleo.org/api"
    ```

3. Scan a range of blocks (from block 30000 to 50636) for transaction records associated with a view key:

    ```
    snarkos developer scan --view-key "${VIEWKEY}" --endpoint "https://vm.aleo.org/api" --start 30000 --end 50636
    ```

### Returns

The `snarkos developer scan` command returns an array of the transaction records associated with the provided key. 
