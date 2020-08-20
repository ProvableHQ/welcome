---
id: test
title: Test a Program
sidebar_label: leo test
---

### `leo test`

To execute tests on your program, run:
```
leo test
```

The results of the test compilation and the constraint system will be printed:
```bash title="console output:"
leo  Running 2 tests
leo  test language::expect_pass compiled. Constraint system satisfied: true
leo  test language::expect_fail errored: Assertion 1u8 == 0u8 failed
```

A new circuit is generated for each test. Inputs from the [**test context annotation**](../language/12_tests.md#test-context-annotation)
are loaded after the test circuit builds successfully.