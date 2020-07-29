# APIKey API

The APIKey API can be used to generate new APIKeys, these keys are required to authenticate against the rest of the API endpoints.

## The APIkey

The APIKey is a string value in base 64 encoding.

```json
"MWRkMWMxMWEtMzUzMC00YTRmLTg5NDQtZjdkZDMwN2YwMjIy"
```

## Usage

The APIKey is used as a bearer token and should be set in the `Authorization` header of the core APIs.

```json
  Authorization:"Bearer MWRkMWMxMWEtMzUzMC00YTRmLTg5NDQtZjdkZDMwN2YwMjIy"
```

---

## /createapikey

The `/createapikey` generates a new APIKey for the user to authenticate with, it requires no parameters or sign-up.

```
GET /auth/createapikey
```

### Parameters

No parameters.

### Response:

Retrieves an authentication token.
