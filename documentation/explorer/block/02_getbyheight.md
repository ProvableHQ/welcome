---
id: getbyheight
title: getbyheight
sidebar_label: getbyheight
---

The `getbyheight` endpoint retrieves a canonical block based on the given height (if one exists at that height).

## Request Type

```
POST /block/getbyheight
```

## Authenticated

```
Yes
```

## Parameters

### height (required)

A `positive integer` value or the string `latest` is accepted, where the integer will return the block corresponding to that height and the string latest will return the latest canonical block.

## Response

Retrieves a block object.
