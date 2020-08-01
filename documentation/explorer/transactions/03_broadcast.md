---
id: broadcast
title: broadcast
sidebar_label: broadcast
---

The `broadcast` endpoint sends a signed and valid transaction to the Aleo network.

## Request Type

```
POST /transaction/broadcast
```

## Parameters

### raw transaction (required)

A 1950 character long string that represents an valid signed raw transaction.

## Response

A transaction hash of the posted transaction.
