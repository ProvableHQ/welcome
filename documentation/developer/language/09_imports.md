---
id: imports
title: Imports
---



Import functions and circuits by name into the current file:

> import [package].[name];

```leo
import foo.Bar;
```

### Import Aliases
Import a name using an alias:
> import [package].[name] as [alias];

```leo
import foo.Bar as Baz
```

### Import Multiple
Import multiple names from the same package:

>import [package].(
    [name_1],
    [name_2]
);

```leo
import foo.(
    Bar as Baz,
    qux,
);
```

### Import Star
Import all symbols from a package or file:

#### Package
Import all symbols from the package library `lib.leo` file.
> import [package].*;

```leo
import foo.*;
```
#### File
Import all symbols from a file.

> import [package].[file].*;

```leo
import foo.waldo.*;
```

## Local
You can import from a local file in the same package `src/` directory by using its `[file].leo` as the `[package]` name.

> import [file].[name];

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
>import [package].[name];

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
>import [package].[directory].[file].[name]

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
