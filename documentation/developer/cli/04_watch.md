---
id: watch
title: Auto-Compile a Program
sidebar_label: leo watch
---

### `leo watch`

To recompile have Leo recompile your program on the fly, run:
```leo_console
leo watch
```
```leo_console title="console output:"
  Watching Leo source code
```
Leo will monitor the source file tree starting from **main.leo**.
Changes to files imported by **main.leo** will also trigger a recompile.