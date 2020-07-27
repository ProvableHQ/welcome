---
id: imports
title: Imports
---

Leo supports importing functions and circuits by name into the current file with the following syntax:

```leo
import [package].[name];
```

### Import Aliases
Import a name using an alias:
```leo
import [package].[name] as [alias];
```

### Import Multiple
Import multiple names from the same package:
```leo
import [package].(
    [name_1],
    [name_2] as [alias],
);
```

### Import Star
Import all symbols from a package or file:

#### Package
Import all symbols from the package library `lib.leo` file.
```leo
import [package].*;
```
#### File
Import all symbols from a file.
```leo
import [package].[file].*;
```

## Local
You can import from a local file in the same package using its direct path.
`src/` directory by using its `[file].leo` as the `[package]` name.

```leo
import [file].[name];
```

### Example: 
```leo title="src/bar.leo"
circuit Bar {
    b: u32
}

function baz() -> u32 {
    return 1u32
}
```


```leo title="src/main.leo"
import bar.(
    Bar,
    baz
);

function main() {
    const bar = Bar { b: 1u32};
    const z = baz();
}
```

## Foreign
You can import from a foreign package in the `imports/` directory using its `[package]` name.
```leo
import [package].[name];
```

### Example:
```leo title="imports/bar/src/lib.leo"
circuit Bar {
    b: u32
}
```

```leo title="src/main.leo"
import bar.Bar;

function main() {
    const bar = Bar { b: 1u32 };
}
```

## Package Paths
Nested import paths can be accessed using dot `.` syntax.
```leo
import [package].[directory].[file].[name]
```

### Example:
We wish to import the `Baz` circuit from the `baz.leo` file in the `bar` directory in the `foo` package


```leo title="imports/foo/src/bar/baz.leo"
circuit Baz {
    b: u32
}
```

```leo title="src/main.leo"
import foo.bar.baz.Baz;

function main() {
    const baz = Baz { b: 1u32 };
}
```
