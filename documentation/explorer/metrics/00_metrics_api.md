# Metrics information API

The Metric information api exposes one endpoints that allow the user to retrieve the cached state of metrics over a certain amount of blocks of the Aleo network.

## The metric object

### Attributes

#### totalBlocks (metric {value: number, unit: string, title: string})

Number of canonical blocks on chain.

#### timeLastBlock (metric {value: number, unit: string, title: string})

Block timestamp is a Unix epoch time (UTC) when the miner started hashing the header (according to the miner and checked by every other miner) of the last block in the range.

#### totalTransactions (metric {value: number, unit: string, title: string})

Number of canonical transactions on chain.

#### avgTransactionFee (metric {value: number, unit: string, title: string})

Average of all canonical transaction fees in requested range.

#### lastBlockReward (metric {value: number, unit: string, title: string})

BlockReward of last block in requested range.

#### nodesOnlineNow (metric {value: number, unit: string, title: string})

Number of nodes online (best guess metric).

#### avgBlockTime (metric {value: number, unit: string, title: string})

Average of all canonical block times.

#### snarksPerSecond (metric {value: number, unit: string, title: string})

<todo>

#### medianConfirmationTime (metric {value: number, unit: string, title: string})

Median of all block times.

#### transactionFeePerByte (metric {value: number, unit: string, title: string})

Average amount of bytes per fee generating transaction.

#### totalFeesPayedToMiners (metric {value: number, unit: string, title: string})

The total amount of transaction fees paid to miners in requested range.

#### avgNodesOnline (metric {value: number, unit: string, title: string})

Average number of nodes online (best guess metric) in requested range.

### Example

```json
{
  {
    totalBlocks: {
      value: 6,
      unit: 'blocks',
      title: ''
    },
    totalTransactions: {
      value: 28,
      unit: 'txes',
      title: ''
    },
    timeLastBlock: {
      value: 1593146844,
      unit: 'timeStamp in seconds',
      title: ''
    },
    avgTransactionFee: {
      value: 1000,
      unit: 'blocks',
      title: ''
    },
    lastBlockReward: {
      value: -1000,
      unit: 'AleoCredits',
      title: ''
    },
    nodesOnlineNow: {
      value: 3,
      unit: 'nodes',
      title: ''
    },
    avgBlockTime: {
      value: 25,
      unit: 'seconds',
      title: ''
    },
    snarksPerSecond: {
      value: 25,
      unit: 'snarks per second',
      title: ''
    },
    medianConfirmationTime: {
      value: 25,
      unit: 'seconds',
      title: ''
    },
    transactionFeePerByte: {
      value: 1.0256410256410255,
      unit: 'AleoCredits per byte',
      title: ''
    },
    totalFeesPayedToMiners: {
      value: 21000,
      unit: 'AleoCredits',
      title: ''
      },
    avgNodesOnline: {
      value: 2.142857142857143,
      unit: 'nodes',
      title: '' }
  }
}
```

---

## /get

The `/get` endpoint retrieves a metric based on the last sequence of blocks.

```
POST /metrics/get
```

### Parameters

#### blocks <span style="color:red">required</span>

A number value representing the amount of blocks, starting from the best block, to use to calculate the metrics.

### Response:

Retrieves a metric object.

---

## The graphMetric object

### Attributes

#### txCount (number)

Total amount of transactions, providing a fee, included in slice.

#### feeSum (number))

Sum of transaction fees included in slice

#### start (number)

Block timestamp is a Unix epoch time (UTC) of first block included in slice

#### end (number)

Block timestamp is a Unix epoch time (UTC) of last block included in slice

### Example

```json
[
  {
    txCount: 3;
    feeSum: 1000;
    start: 1593146844;
    end: 1593146875;
  }
]
```

---

## /graph

The `/graph` endpoint retrieves temporal data related to the amount of transactions and the sum of their fees.

```
POST /metrics/get
```

### Parameters

#### interval

A number value representing the amount of time in seconds for each slice.

#### amount

A number value representing the amount of slices requested.

### Response:

Retrieves a graphMetric array of interval slices.
