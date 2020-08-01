---
id: broadcast
title: broadcast
sidebar_label: broadcast
---

# `/transaction/broadcast`

The `broadcast` endpoint sends a signed and valid transaction to the Aleo network.

## Request Type

```
POST /transaction/broadcast
```

## Parameters

### raw transaction <span style="color:red">required</span>

A 1950 character long string that represents an valid signed raw transaction.

## Response

A transaction hash of the posted transaction.
