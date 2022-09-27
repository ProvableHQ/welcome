---
id: get_transactions_mempool
title: Get Transactions Mempool
sidebar_label: Get Transactions Mempool
---

```bash title=ENDPOINT
GET /testnet3/transactions/mempool
```

Returns the transactions in the memory pool.

### Arguments

None

### Response

| Parameter |                    Type                    |        Description        |
|:---------:|:------------------------------------------:|:-------------------------:|
| `result`  | [array](../../concepts/03_transactions.md) | The array of transactions |