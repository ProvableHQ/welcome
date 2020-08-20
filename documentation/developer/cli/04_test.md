---
id: test
title: Test a Package
sidebar_label: leo test
---

### `leo test`

To execute unit tests on your program, run:
```bash
leo test
```

The results of the test compilation and the constraint system will be printed:
```bash
leo  Running 2 tests
leo  test language::expect_pass compiled. Constraint system satisfied: true
leo  test language::expect_fail errored: Assertion 1u8 == 0u8 failed
```
