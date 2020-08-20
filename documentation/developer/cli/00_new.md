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
This command will create a new directory with the given package name.

The new package will have a directory structure as follows:
```bash
package_name/
├── Leo.toml # Your program manifest
├── inputs/ 
│ └── package_name.in # Your program inputs
└── src/    
  └── main.leo # Your program file
```

### Optional Flags
```bash
leo new {$Name} --bin
```
This will create a new directory with a given package name. The new package will have a directory structure as above.

```bash
leo new {$Name} --lib
```
This will create a new directory with a given package name. The new package will have a directory structure as follows:
```
package_name/
├── Leo.toml # Your program manifest
└── src/    
  └── lib.leo # Your program library
```
