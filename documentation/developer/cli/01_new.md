---
id: new
title: Create a Package
sidebar_label: leo new
---

## `leo new`

To create a new package, run:
```leo_console
leo new {$NAME}
```

Valid package names are kebab-case: lowercase letters and numbers separated by hyphens.
This command will create a new directory with the given package name.
The new package will have a directory structure as follows:

```leo_console
package-name/
├── Leo.toml # Your program manifest
├── README.md # Your program description
├── inputs/ 
│ ├── hello-world.in # Your program inputs
│ └── hello-world.state # Record state information
└── src/    
  └── main.leo # Your program file
```

### Optional Flags
```leo_console
leo new {$Name} --bin
```
This will create a new Leo package with a **main.leo** file in the source directory. The new package will have a directory structure as above.

```leo_console
leo new {$Name} --lib
```
This will create a new Leo package with a **lib.leo** file in the source directory. The new package will have a directory structure as follows:
```leo_console
package_name/
├── Leo.toml # Your program manifest
└── src/    
  └── lib.leo # Your program library
```

:::info
For more information on **main.leo** and **lib.leo** differences, check out the [**Layout of a Leo Program**](../language/01_layout.md#binaries-vs-libraries)
:::