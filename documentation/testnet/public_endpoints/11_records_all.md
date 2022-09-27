---
id: records_all
title: Records All
sidebar_label: Records All
---

```bash title=ENDPOINT
GET /testnet3/records/all
```

Returns all of the records for the given view key.

### Body

|  Type  |                     Description                     |
|:------:|:---------------------------------------------------:|
| string | The view key corresponding to the requested records |

### Response

| Parameter |                 Type                  |            Description             |
|:---------:|:-------------------------------------:|:----------------------------------:|
| `result`  | [array](../../concepts/02_records.md) | The records for the given view key |
