---
id: transfer_credits
title: Public and Private Transfers
sidebar_label: Transfer Credits
---

The `credits.aleo` program allows for the transfer of credits in a public or private manner, along with conversions
between the two forms.

## Transfer Functions

### `transfer_private`

The `transfer_private` function enables a private transfer of credits between two addresses.

### `transfer_public`

The `transfer_public` function is used to perform a public transfer of credits between two addresses.

### `transfer_private_to_public`

The `transfer_private_to_public` function is used to convert private credits into a public credits.
### `transfer_public_to_private`

The `transfer_public_to_private` function is used to convert public credits into private credits.

## Function Usage

To use these functions, one needs to craft a `credits.aleo` program execution. Refer to our full [documentation](https://developer.aleo.org/testnet/getting_started/deploy_execute#usage-guide) on 
deploying and executing programs for more details.


### Arguments:

- `input_record` - The record used to craft the transfer
- `recipient` - The recipient address
- `amount` - The number of microcredits to transfer
- `private_key` - The private key used to generate the deployment (shortcut `-p`)
- `query` - The endpoint to query node state from (shortcut `-q`)
- `fee` - The deployment fee in microcredits (optional)
- `record` - The record to spend the fee from (optional)
- `display` - Display the generated transaction (optional - defaults to false)
- `broadcast` - Broadcast the transaction to a specified endpoint (optional)
- `store` - Store the transaction to a specified file path (optional)
