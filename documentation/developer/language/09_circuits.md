---
id: circuits
title: Circuits
---

Circuits are a powerful complex data type in Leo. 
Circuit names should be CamelCase.
Circuits can have one or more members. 
Circuits are initialized by their defined name followed by their members in curly braces `{ }`.
Circuit types with the same members but different names are different types.

## Circuit member variables
Circuit members can be defined as variables with any type.  
They can be accessed using dot syntax `.`.

```leo
circuit Point {
    x: u32
    y: u32
}
function main() -> u32 {
    let p = Point {x: 1u32, y: 0u32};
    return p.x
}
```

### Mutability

Circuit member variables can be made mutable with the `mut` keyword.

```leo
circuit Foo {
    mut a: u32,
    b: u32,
}

function main() {
    let mut f = Foo { a: 1u32, b: 2u32 };

    f.a = 0u32;
    // f.b = 0u32; // Errors because circuit variable `b` is immutable
}
```

## Circuit member functions
Members can also be defined as functions.  
They can also be accessed using dot syntax `.`. 

```leo
circuit Foo {
    function echo(x: u32) -> u32 {
        return x
    }
}

function main() -> u32 {
    let c = Foo { };
    return c.echo(1u32)
}
```

## Circuit member static functions
Circuit functions can be made static, enabling them to be called without instantiation.  
They can be accessed using double colon syntax `::`.

```leo
circuit Foo {
    static function echo(x: u32) -> u32 {
        return x
    }
}

function main() -> u32 {
    return Foo::echo(1u32)
}
```
:::note
Circuit member functions, both normal and static, are immutable.
:::

## `Self` and `self`
The `Self` keyword references the circuit's definition.
```leo
circuit Circ {
    b: bool

    static function new() -> Self { // Self resolves to Foo
        return Self { b: true }
    }
}

function main() -> bool {
    let c = Foo::new();
    return c.b
}
```

The `self` keyword references the circuit's members.
```leo
circuit Foo {
    b: bool
  
    function bar() -> bool {
        return self.b 
    }
    
    function baz() -> bool {
        return self.bar()
    }
}

function main() -> bool {
    let c = Foo { b: true };

    return c.baz() 
}
```