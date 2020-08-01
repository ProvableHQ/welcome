---
id: getbyhash
title: getbyhash
sidebar_label: getbyhash
---

The `getbyhash` endpoint retrieves a canonical block based on the given hash (if one exists at that hash).

## Request Type

```
POST /block/getbyhash
```

## Authenticated

```
Yes
```

## Parameters

### hash (required)

A string value that represents a blockhash. This string can be either 64 or 66 characters long, if the string is 66 characters the first two characters should be `0x`.

## Response

Retrieves a block object.
