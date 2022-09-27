---
id: get_state_path
title: Get State Path
sidebar_label: Get State Path
---

```bash title=ENDPOINT
GET /testnet3/statePath/{commitment}
```

Returns the state path for the given commitment.

### Arguments

|  Parameter   |  Type  |                  Description                  |
|:------------:|:------:|:---------------------------------------------:|
| `commitment` | string | The record commitment in the best valid chain |

### Response

|       Parameter       |  Type  |                Description                |
|:---------------------:|:------:|:-----------------------------------------:|
|     `state_root`      | string |              The state root               |
|     `block_path`      | string |    The Merkle path for the block hash     |
|     `block_hash`      | string |              The block hash               |
| `previous_block_hash` | string |          The previous block hash          |
|     `header_root`     | string |           The block header root           |
|     `header_path`     | string | The Merkle path for the block header leaf |
|     `header_leaf`     | string |           The block header leaf           |
|  `transactions_path`  | string |  The Merkle path for the transaction ID   |
|   `transaction_id`    | string |            The transaction ID             |
|  `transaction_path`   | string | The Merkle path for the transaction leaf  |
|  `transaction_leaf`   | string |           The transaction leaf            |
|   `transition_path`   | string |  The Merkle path for the transition leaf  |
|   `transition_leaf`   | string |            The transition leaf            |

