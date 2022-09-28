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
