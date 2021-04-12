---
id: lexical
title: Lexical Structure
---

## Comments
Leo supports in **line comments** using:

`//`

This will comment all text on the rest of this line.

Leo supports **block comments** using:

`/* ... */`

This will comment out all text inside `...`. Nested comments are not supported.


## Identifiers

Identifiers in Leo must start with an alphabetical character.
The first character can be followed by any number of alphanumerical or `_` characters.
These are all ASCII characters; there is no support for (non-ASCII) Unicode characters.
An identifier that is equal to a keyword will result in a syntax error.
Examples of identifiers include:

* variables
* functions
* function parameters
* circuits
* circuit members

## Keywords 

The following Leo keywords can only be used in their correct contexts.
They cannot be used as the names of identifiers.

```
address
as
bool
circuit
console
const
else
false
field
for
function
group
i8
i16
i32
i64
i128
if
import
in
input
let
mut
return
self
Self
static
string
true
u8
u16
u32
u64
u128
```

