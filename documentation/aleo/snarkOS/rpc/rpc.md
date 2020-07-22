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

[getblock](methods.md#getblock)

[getblockcount](methods.md#getblockcount)

[getbestblockhash](methods.md#getbestblockhash)

[getblockhash](methods.md#getblockhash)

[getrawtransaction](methods.md#getrawtransaction)

[gettransactioninfo](methods.md#gettransactioninfo)

[decoderawtransaction](methods.md#decoderawtransaction)

[sendtransaction](methods.md#sendtransaction)

[validaterawtransaction](methods.md#validaterawtransaction)

[getconnectioncount](methods.md#getconnectioncount)

[getpeerinfo](methods.md#getpeerinfo)

[getblocktemplate](methods.md#getblocktemplate)

[decoderecord](methods.md#decoderecord)

[createrawtransaction](methods.md#createrawtransaction)

[fetchrecordcommitments](methods.md#fetchrecordcommitments)

[getrawrecord](methods.md#getrawrecord)

[createaccount](methods.md#createaccount)