---
title: snarkOS JSON-RPC 2.0 API
sidebar_label: RPC Interface
---

# snarkOS JSON-RPC API Reference

The snarkOS RPC is a [JSON-RPC 2.0](https://www.jsonrpc.org/specification) protocol that enables API calls to fetch data and interact with the network.

## Endpoint

The default RPC port is 3030. This can be specified with the `-rpc-port` flag when starting the node.

## Authentication

The RPC endpoint can be protected with an authentication layer by setting the `-rpc-username` and `-rpc-password` flags when starting the node.

RPC requests will require an additional authentication header when calling protected RPC methods.

## Methods

[getblock](01_methods.md#getblock)

[getblockcount](01_methods.md#getblockcount)

[getbestblockhash](01_methods.md#getbestblockhash)

[getblockhash](01_methods.md#getblockhash)

[getrawtransaction](01_methods.md#getrawtransaction)

[gettransactioninfo](01_methods.md#gettransactioninfo)

[decoderawtransaction](01_methods.md#decoderawtransaction)

[sendtransaction](01_methods.md#sendtransaction)

[validaterawtransaction](01_methods.md#validaterawtransaction)

[getconnectioncount](01_methods.md#getconnectioncount)

[getpeerinfo](01_methods.md#getpeerinfo)

[getblocktemplate](01_methods.md#getblocktemplate)

[decoderecord](01_methods.md#decoderecord)

[createrawtransaction](01_methods.md#createrawtransaction)

[fetchrecordcommitments](01_methods.md#fetchrecordcommitments)

[getrawrecord](01_methods.md#getrawrecord)

[createaccount](01_methods.md#createaccount)