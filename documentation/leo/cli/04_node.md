---
id: node
title: Start a Local Development Node
sidebar_label: leo run
---

## `leo node start`

To start a local development node and deploy the compiled program run.
```bash
leo node start
```

To start a local development node without deploying the compiled program.
```bash
leo node start --nodeploy
```

## Tesnet3 Development Endpoints

The server will start at the following endpoint:
```bash
🌐 Server is running at http://0.0.0.0:4180
```

### Latest Block Height
Returns the number of blocks in the canonical chain.

```bash
http://localhost:4180/testnet3/latest/block/height
```

### Latest Block Hash
Returns the block hash from the head of the canonical chain.

```bash
http://localhost:4180/testnet3/latest/block/hash
```

### Latest Block
Returns the block from the head of the canonical chain.

```bash
http://localhost:4180/testnet3/latest/block
```

### Get Block
Returns the block given the block height.

```bash
http://localhost:4180/testnet3/block/{height}
```