---
id: new
title: Create a Package
sidebar_label: leo new
---

## `leo new`

To create a new package, run:
```bash
leo new {$NAME}
```

Valid package names are kebab-case: lowercase letters and numbers separated by hyphens.
This command will create a new directory with the given package name.
The new package will have a directory structure as follows:

```bash
package-name/
├── Leo.toml # Your program manifest
├── README.md # Your program description
├── inputs/ 
│ ├── hello-world.in # Your program inputs
│ └── hello-world.state # Record state information
└── src/    
  └── main.leo # Your program file
```
