---
id: circuits
title: Circuits
---

Circuits are a powerful complex data type in Leo - they share syntax with structs in object-oriented languages.  

### Defining circuits

Circuit names should be CamelCase.  
Circuits can have one or more members.  
Circuit types with the same members but different names are different types.

```leo
circuit Rectangle {
    width: u32;
    height: u32;

    function area(self) -> u32 {
        return self.width * self.height;
    }
}

function main() {
    let rect1 = Rectangle {
        width: 25u32,
        height: 50u32,
    };

    let area = rect1.area();

    console.log("Rectangle area: {} square pixels", area);
}
```

### Initializing circuits

Circuits are initialized by their defined name followed by their member variables in curly braces `{ }`.  
Leo supports implied member variable names when initializing a circuit.
```leo
circuit Rectangle {
    width: u32;
    height: u32;
}

function main() {
    let width: u32 = 25;
    let height: u32 = 50;

    let r = Rectangle {
        width: width,
        height: height,
    };

    let r_implied = Rectangle {
        width, // Defined as 25 above.
        height, // Defined as 50 above.
    };

    console.log("Equal: {} == {}", r, r_implied);
}
```

## Circuit member variables
Circuit member variables define the name and type of pieces of data grouped by the circuit.  
Circuit member variables can be any type including other circuits.  
They can be accessed using dot syntax `.`.  

```leo
circuit Point {
    x: u32;
    y: u32;
}
function main() -> u32 {
    let p = Point {x: 1u32, y: 0u32};
    return p.x; // Access the circuit member variable `x`
}
```

## Circuit member functions
Circuit member functions define pieces of code that are run in the context of a circuit.

```leo
circuit Foo {
    x: u32;  

    function echo(self) -> u32 {
        return self.x;
    }
}

function main() -> u32 {
    let c = Foo { x: 1u32 };
    return c.echo();
}
```

## Circuit member static functions
Circuit functions that do not have a `self` argument are considered static, 
enabling them to be called without instantiating the circuit.  
They can be accessed using double colon syntax `::`.

```leo
circuit Foo {
    function echo(x: u32) -> u32 {
        return x;
    }
}

function main() -> u32 {
    return Foo::echo(1u32);
}
```
:::note
Circuit member functions, both normal and static, are immutable.
:::


### `Self` type
The `Self` type references the circuit's definition.

```leo
circuit Foo {
    a: u32;

    // Instantiates a new Foo circuit with a = 0u32.
    function new() -> Self { // Self resolves to circuit type Foo
        return Self { a: 0u32 };
    }
}

function main() {
    let f = Foo::new(); // new is a static function.
}
```

### `self` keyword
The `self` keyword provides view access to instantiated circuit members.
It must be included as an argument in the circuit function signature.

The circuit function must be called using dot `.` syntax. (Similar to rust syntax)

```leo
circuit Foo {
    a: u32;

    // Instantiates a new Foo circuit with a = 0u32.
    function new() -> Self { // Self resolves to circuit type Foo
        return Self { a: 0u32 };
    }

    // Logs the self circuit variable to console.
    function log(self) {
        console.log("{}", self.a); // Errors if "self" keyword is not present.
    }
}

function main() {
    let f = Foo::new();

    f.log(); // Prints "0"
}
```


### `mut self` keyword
The `mut self` keyword provides mutable access to instantiated circuit member variables.
It must be included as an argument in the circuit function signature.

The circuit function must be called using dot `.` syntax (similar to Rust syntax).
The instantiated circuit variable must be defined using a `let` declaration.

All functions which do not contain the `self`, `mut self`, or `const self` keyword are considered static. They must be called using double colon `::` syntax.

```leo
circuit Foo {
    a: u32;

    // Instantiates a new Foo circuit with a = 0u32.
    function new() -> Self { // Self resolves to circuit type Foo
        return Self { a: 0u32 };
    }

    // Logs the self circuit variable to console.
    function log(self) {
        console.log("{}", self.a); // Errors if "self" keyword is not present.
    }

    // Mutates the self circuit variable a = 1u32.
    function mutate(mut self) {
        self.a = 1u32; // Errors if "mut self" keyword is not present.
    }
}

function main() {
    let f = Foo::new(); 

    f.mutate(); // Errors if "f" is not mutable.
    f.log(); // Prints "1"
}
```


### `const self` keyword
The `const self` keyword provides access to the instantiated constant circuit member variables.
It must be included as an argument in the circuit function signature.

The circuit function must be called using dot `.` syntax (similar to Rust syntax).
The instantiated circuit variable must be defined using a `const` declaration.

All functions which do not contain the `self`, `mut self`, or `const self` keyword are considered static. They must be called using double colon `::` syntax.

```leo
circuit Foo {
    a: u32;

    // Logs the self circuit variable to console.
    function log_constant(const self) {
        console.log("{}", self.a); // Errors if "self" keyword is not present.
    }
}

function main() {
    const f = Foo { a: 0u32 }; 
    f.log_constant(); // Ok - "f" is constant.
    
    let g = Foo { a: 0u32 };
    g.log_constant(); // Error - "g" is not constant.
}
```
