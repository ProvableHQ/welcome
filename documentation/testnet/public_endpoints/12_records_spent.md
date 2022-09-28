---
id: records_spent
title: Records Spent
sidebar_label: Records Spent
---

```bash title=ENDPOINT
GET /testnet3/records/spent
```

Returns the spent records for the given view key.

### Body

|  Type  |                     Description                     |
|:------:|:---------------------------------------------------:|
| string | The view key corresponding to the requested records |

### Response

| Parameter |                 Type                  |            Description             |
|:---------:|:-------------------------------------:|:----------------------------------:|
| `result`  | [array](../../concepts/02_records.md) | The records for the given view key |
