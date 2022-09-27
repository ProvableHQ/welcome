---
id: get_transactions
title: Get Transactions
sidebar_label: Get Transactions
---

```bash title=ENDPOINT
GET /testnet3/transactions/{height}
```

Returns the transactions for the given block height.

### Arguments

| Parameter | Type | Required | Description                                     |
|:----------|:----:|:--------:|:------------------------------------------------|
| `height`  | u32  |   Yes    | The block height of the requested transactions. |

### Response

| Parameter |                    Type                    |              Description               |
|:---------:|:------------------------------------------:|:--------------------------------------:|
| `result`  | [array](../../concepts/03_transactions.md) | The array of transactions in the block |
