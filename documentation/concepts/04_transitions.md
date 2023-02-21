---
id: transitions
title: Transitions
sidebar_label: Transitions
---

## Components of a Transition
An Aleo transition is serialized in the following format:

|    Parameter    |         Type         |                                                                        Description                                                                        |
|:---------------:|:--------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------:|
|      `id`       | finite field element |                         The transition id, which is computed via the Merkle tree digest formed from the `Input` and `Output` IDs                          |
|  `program_id`   |        string        |                          The program ID, which is associated with a verification key on a globally maintained map on the ledger.                          |
| `function_name` |        string        |                                    The function name, which is used to compute a `function_id` using the `program_id`.                                    |
|    `inputs`     |  array of `Input`s   |                                 The transition `Input`s, which can be a `constant`, `public`, `private`, or `inputRecord`                                 |
|    `outputs`    |  array of `Output`s  |                                The transition `Output`s, which can be a `constant`, `public`, `private`, or `outputRecord`                                |
|   `finalize`    |        array         |                                                                  The inputs for finalize                                                                  |
|     `proof`     |    group element     | The transition proof, used to verify the correctness of the program execution associated to `function_name` within the program associated to `program_id` |
|      `tpk`      |    group element     |                    The transition public key, which is used to verify the digital signature provided by the `owner` in a `transaction`                    |
|      `tcm`      | finite field element |                                                                 The transition commitment                                                                 |
|      `fee`      |         i64          |                                                       The network fee associated to the transition.                                                       |

#### Input Record
An `inputRecord` is a tuple consisting of a serial number and a `tag`. Recall that serial numbers are posted onto the ledger to announce that previously unspent records have now been spent. Each record has an associated `tag` which
is used to keep track of records which are spendable by the user.

#### Output Record
An `outputRecord` consists of a record commitment, checksum, an a record ciphertext. 