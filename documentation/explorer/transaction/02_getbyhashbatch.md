---
id: get
title: get
sidebar_label: get
---

# `/transaction/getbyhashbatch`

The `getbyhashbatch` endpoint retrieves a list of transactions based on the list of given hashes.

## Request Type

```
POST /transaction/getbyhashbatch
```

## Parameters

### hash array <span style="color:red">required</span>

A list of string values that represent transaction hashes. These strings can be either 64 or 66 characters long, if the string is 66 characters the first two characters should be `0x`.

## Response

Retrieves a list of transaction objects.
