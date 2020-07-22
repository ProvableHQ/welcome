---
id: new
title: Create a Package
sidebar_label: leo new / init
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


## `leo init`

To initialize a project in an existing directory, run:
```bash
leo init
```
This will initialize the current directory with the same package directory setup.

### Optional Flags
`leo init` supports the same flags as `leo new`
```bash
leo init --bin
```
```bash
leo init --lib
```