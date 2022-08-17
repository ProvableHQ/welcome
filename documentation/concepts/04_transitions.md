---
id: transitions
title: Transitions
sidebar_label: Transitions
---

## Components of a Transition
An Aleo transaction is serialized in the following format:

|        Parameter        |                       Type                       | Size (bytes) |
|:-----------------------:|:------------------------------------------------:|:------------:|
|   `old_serial_numbers`  |                     bytes                        |       64     |
|    `new_commitments`    |                     bytes                        |       64     |
|  `program_commitment`   |                     bytes                        |       32     |
|    `local_data_root`    |                     bytes                        |       32     |
|     `value_balance`     |                      i64                         |        8     |
|       `memorandum`      |                     bytes                        |       32     |
|       `network_id`      |                      u8                          |        1     |
|       `signatures`      |                     bytes                        |      128     |
|     `ledger_digest`     |                     bytes                        |       32     |
|   `transaction_proof`   |                     bytes                        |      579     |
|   `encrypted_records`   |                     bytes                        |      518     |
