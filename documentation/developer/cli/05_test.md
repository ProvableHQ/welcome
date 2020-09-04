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
        Test Running 2 tests
        Test ${NAME}::${TEST-NAME-1} ... ok

        Test ${NAME}::${TEST-NAME-2} ... ok

    Finished Tests passed in 10 milliseconds. 2 passed; 0 failed;
```

A new circuit is generated for each test. Inputs from the [**test context annotation**](../language/12_tests.md#test-context-annotation)
are loaded after the test circuit builds successfully.