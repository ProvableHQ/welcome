---
id: transitions
title: Transitions
sidebar_label: Transitions
---

## Components of a Transition
An Aleo transition is serialized in the following format:

|    Parameter    |         Type         |                                         Description                                         |
|:---------------:|:--------------------:|:-------------------------------------------------------------------------------------------:|
|      `id`       | finite field element |                                      The transition id                                      |
|  `program_id`   |        string        |                                       The program id                                        |
| `function_name` |        string        |                                      The function name                                      |
|    `inputs`     |  array of `Input`s   |  The transition `Input`s, which can be a `constant`, `public`, `private`, or `inputRecord`  |
|    `outputs`    |  array of `Output`s  | The transition `Output`s, which can be a `constant`, `public`, `private`, or `outputRecord` |
|   `finalize`    |        array         |                                   The inputs for finalize                                   |
|     `proof`     |    group element     |                                    The transition proof                                     |
|      `tpk`      |    group element     |                                  The transition public key                                  |
|      `tcm`      | finite field element |                                  The transition commitment                                  |
|      `fee`      |         i64          |                                       The network fee                                       |
An `inputRecord` is a tuple consisting of a serial numbera nd a `tag`, while an `outputRecord` consists of a record commitment, checksum, an a record ciphertext.