---
id: getbyheightrange
title: getbyheightrange
sidebar_label: getbyheightrange
---

# `/block/getbyheightrange`

The `getbyheightrange` endpoint retrieves a list of canonical blocks based on the given height range.

## Request Type

```
POST /block/getbyheightrange
```

## Authenticated

```
Yes
```

## Parameters

### from <span style="color:red">required</span>

A `non negative integer` value indicating the start height to return blocks from.

### to <span style="color:grey">optional</span>

A `positive integer` value or the string `latest` is accepted, where the integer will return all the canonical blocks up to that height and the string latest will return all the blocks up to the latest canonical block.

## Response

Retrieves a list of block objects.
