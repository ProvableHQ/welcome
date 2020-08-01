---
id: graph
title: graph
sidebar_label: graph
---

The `graph` endpoint retrieves temporal data related to the amount of transactions and the sum of their fees.

```
POST /metrics/get
```

## Parameters

### interval (required)

A number value representing the amount of time in seconds for each slice.

### amount (required)

A number value representing the amount of slices requested.

## Response:

Retrieves a graphMetric array of interval slices.
