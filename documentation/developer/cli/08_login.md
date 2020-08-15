---
id: login
title: Login to Aleo Package Manager
sidebar_label: leo login
---

:::caution
This feature is not standardized and currently unstable.
:::

To use private packages and publish to Aleo Package Manager, start by authenticating with:
```
leo login {username} {password}
```

If remote compilation is enabled, Leo will sync your workspace when
you run `leo build`, `leo test`, `leo setup` and `leo prove`, your program will run the program setup
and execution on remote machines.

<!-- This feature helps to speed up the testing cycle and helps the developer to iterate significantly faster. -->
