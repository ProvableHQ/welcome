---
id: get_block
title: Get Block
sidebar_label: Get Block
---

```bash title=ENDPOINT
GET /testnet3/block/{height}
```

Returns the block for the given block height.

### Arguments

| Parameter | Type | Required | Description                             |
|:----------|:----:|:--------:|:----------------------------------------|
| `height`  | u32  |   Yes    | The block height of the requested block |


### Response

| Parameter |                 Type                  |     Description     |
|:---------:|:-------------------------------------:|:-------------------:|
| `result`  | [object](../../concepts/05_blocks.md) | The requested block |

