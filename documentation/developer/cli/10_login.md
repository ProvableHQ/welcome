---
id: login
title: Login to Your Aleo Account
sidebar_label: leo login
---

:::caution
Warning! This feature is still in development and is unstable.
:::

To use remote compilation features, start by authentication with:
```
leo login
```
You will proceed to authenticate using your username and password. Next, Leo will parse your `Leo.toml` file for `remote = True` to confirm whether remote compilation is enabled.

If remote compilation is enabled, Leo syncs your workspace so when you run `leo build`, `leo test`, `leo setup` and `leo prove`, your program will run the program setup and execution performantly on remote machines.

This speeds up the testing cycle and helps the developer to iterate significantly faster.
