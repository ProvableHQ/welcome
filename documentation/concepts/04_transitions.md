---
id: transitions
title: Transitions
sidebar_label: Transitions
---

## Components of a Transition
An Aleo transition is serialized in the following format:

|    Parameter    |  Type  |        Description        |
|:---------------:|:------:|:-------------------------:|
|      `id`       | string |     The transition id     |
|  `program_id`   | string |      The program id       |
| `function_name` | string |     The function name     |
|    `inputs`     | array  |   The transition inputs   |
|    `outputs`    | array  |  The transition outputs   |
|   `finalize`    | array  |  The inputs for finalize  |
|     `proof`     | string |   The transition proof    |
|      `tpk`      | string | The transition public key |
|      `tcm`      | string | The transition commitment |
|      `fee`      |  i64   |      The network fee      |
