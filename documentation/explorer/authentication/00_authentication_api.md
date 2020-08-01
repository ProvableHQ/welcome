---
id: authentication_api
title: Authentication API
sidebar_label: Authentication API
---

The authentication API is a starting endpoint that provides an API key for querying REST API endpoints on Aleo Explorer.

## API Key

The API key is a Base64 encoded authentication token.

```
MWRkMWMxMWEtMzUzMC00YTRmLTg5NDQtZjdkZDMwN2YwMjIy
```

## Usage

The API key is a bearer token and should be set in the `Authorization` header with each REST API call.

```
Authorization: "Bearer MWRkMWMxMWEtMzUzMC00YTRmLTg5NDQtZjdkZDMwN2YwMjIy"
```
