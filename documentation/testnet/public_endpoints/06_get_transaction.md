---
id: get_transaction
title: Get Transaction
sidebar_label: Get Transaction
---

```bash title=ENDPOINT
GET /testnet3/transaction/{id}
```

Returns the transaction for the given transaction ID.

### Arguments

| Parameter        |  Type  | Required | Description                                         |
|:-----------------|:------:|:--------:|:----------------------------------------------------|
| `transaction_id` | string |   Yes    | The transaction id of the requested transaction hex |

### Response

| Parameter |                    Type                     |        Description        |
|:---------:|:-------------------------------------------:|:-------------------------:|
| `result`  | [object](../../concepts/03_transactions.md) | The requested transaction |