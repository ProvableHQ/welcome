---
id: decoderecord
title: decoderecord
sidebar_label: decoderecord
---

Returns information about a record from serialized record hex.

### Arguments

|    Parameter   |  Type  | Required |          Description         |
|:--------------:|:------:|:--------:|:----------------------------:|
| `record_bytes` | string |    Yes   | The raw record hex to decode |

### Response

|        Parameter        |  Type  |             Description            |
|:----------------------- |:------:|:---------------------------------- |
| `account_public_key`    | string | The hash of current highest block  |
| `is_dummy`              | number | The height of the next block       |
| `value`                 | number | The current timestamp              |
| `payload`               | object | The record payload                 |
| `birth_program_repr`  | string | The birth program representation |
| `death_program_repr`  | string | The death program representation |
| `serial_number_nonce`   | string | The serial number nonce            |
| `commitment`            | string | The record commitment              |
| `commitment_randomness` | string | The record commitment randomness   |

### Example
```ignore
curl --data-binary '{"jsonrpc": "2.0", "id":"documentation", "method": "decoderecord", "params": ["record_hexstring"] }' -H 'content-type: application/json' http://127.0.0.1:3030/
```
