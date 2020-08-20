---
id: publish
title: Publish a Package to Aleo Package Manager
sidebar_label: leo publish
---

:::caution
This feature is pending standardization.
:::

To package your program as a gadget and publish it online, run:
```
leo publish
```
Leo will proceed to snapshot your directory and upload your directory to the circuit manager. 
Leo will verify that `leo build` succeeds and that `leo test` passes without error.

By default, all files in the `inputs/` and `outputs/` directory are excluded.

If your project name has already been taken, `leo publish` will fail.

