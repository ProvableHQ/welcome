---
id: getbyhash
title: getbyhash
sidebar_label: getbyhash
---

# `/transaction/getbyhash`

The `getbyhash` endpoint retrieves a transaction based on the given hash (if one exists at that hash).

## Request Type

```
POST /transaction/getbyhash
```

## Parameters

### hash <span style="color:red">required</span>

A string value that represents a blockhash. This string can be either 64 or 66 characters long, if the string is 66 characters the first two characters should be `0x`.

## Response:

Retrieves a transaction object.
