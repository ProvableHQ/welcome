---
id: node
title: Start a Local Development Node
sidebar_label: leo node
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

## Testnet3 Development Endpoints

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

## Getting records belonging to an account
You can retrieve records in three different ways, depending on what type of records you want to query. You will need your ViewKey at your disposal. There are two types of records, spent and unspent, we will talk about these later on. You can see the list of the endpoints associated below:

### Get All Owned Records
`GET /testnet3/records/all`

This endpoint retrieves all the records belonging to a given ViewKey.

```bash
curl --location --request GET 'localhost:4180/testnet3/records/all' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"'
```

### Get All Spent Records
`GET /testnet3/records/spent`

This endpoint retrieves only the spent records belonging to a given ViewKey.

```bash
curl --location --request GET 'localhost:4180/testnet3/records/spent' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"'
```

### Get All Unspent Records
`GET /testnet3/records/unspent`

This endpoint retrieves only the unspent records belonging to a given ViewKey.

```bash
curl --location --request GET 'localhost:4180/testnet3/records/unspent' -H 'Content-Type: application/json' -d '"AViewKey1iAf6a7fv6ELA4ECwAth1hDNUJJNNoWNThmREjpybqder"'
```