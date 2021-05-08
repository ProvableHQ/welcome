---
id: programs
title: Programs
sidebar_label: Programs
---

A **program** is a fundamental data structure for representing application logic and application state.

Aleo introduces a new programming language called **Leo** that enables developers to write
anonymous web applications. Leo is a statically-typed, functional programming language for
writing privacy-preserving, secure programs on Aleo. By leveraging zero-knowledge proofs, Leo offers computational
integrity for real-world applications.

## Program Logic

Leo offers developers with an easy-to-use environment for writing programs on Aleo. By designing a language with 
syntax familiar to web developers and composable in features, Leo is well-suited to integrate with
existing developer frameworks to supercharge web apps with privacy and integrity.

```leo
circuit Point {
    x: u32;
    y: u32;

    function new() -> Self {
        return Self { 
            x: 0, 
            y: 0, 
        };
    }

    function add(self) -> u32 {
        return self.x + self.y;
    }
}

function main() {
    let p = Point::new();
    
    p.x = 4u32;
    p.y = 6u32;

    let sum = p.add();
    
    console.log("The sum is {}", sum);
}
```

## Program Data

### Program ID

Each program has a unique a **program ID** that is produced from the
hash of the [verifying key](#verifying-key). This program ID is used to indicate the program that was run in the
consumption or production of [records](02_records.md).

### Program Input

To run a program, user-defined inputs are provided in the form of a **program input**. This input provided by the user
is fully private and not revealed to the public network, unless the user intends for it to be public.

### Program State

Each program is run with respect to user-provided **program state** on Aleo. In order to produce a valid state transition
on Aleo, the user satisfies a series of programs encoded in [records](02_records.md), which compose a [transaction](03_transactions.md).

### Program Output

Once a program is evaluated, its **program output** is produced, along with a zero-knowledge proof attesting to the
validity of the output.


## Program Registers

A **program register** allows one program to communicate state to another program during execution.
In Aleo, program registers are used to encode intermediate program state across [records](02_records.md) in a [transaction](03_transactions.md).
These concepts are discussed in further depth in the following sections.
