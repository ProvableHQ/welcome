---
id: get
title: get
sidebar_label: get
---

The `get` endpoint retrieves a metric based on the last sequence of blocks.

## Request Type

```
POST /metrics/get
```

## Parameters

### blocks (required)

A number value representing the amount of blocks, starting from the best block, to use to calculate the metrics.

## Response

Retrieves a Metrics object.
