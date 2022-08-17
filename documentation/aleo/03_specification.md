---
id: specification
title: Formal Specification
sidebar_label: Formal Specification
---

# Formal Specification for Aleo Instructions

This chapter briefly describes Aleo instructions by their formal syntax.   
A more advanced language specification written in ABNF format is currently in development.

```
program = *import title 1*definition
import = "import" program-id ";"
title = "program" program-id ";"
program-id = identifier [ "." identifier ]
definition = interface / record / function / closure
interface = "interface" identifier ":" 1*interface-component
interface-component = identifier "as" plain-type ";"
record = "record" identifier ":"
         "owner" "as" ( "address.private" / "address.public" )
         "gates" "as" ( "u64.private" / "u64.public" )
         *record-entry
record-entry = identifier "as" entry-type ";"
function = "function" identifier ":" 1*input 1*instruction *output
closure = "closure" identifier ":" 1*input 1*instruction *output
input = "input" base-register "as" in-out-type ";"
output = "output" register "as" in-out-type ";"
instruction = unary / binary / ternary / assert / cast / call
unary = unary-op operand "into" register ";"
binary = binary-op 2operand "into" register ";"
ternary = ternary-op 3operand "into" register ";"
assert = assert-op 2operand ";"
unary-op = "abs" / "abs.w" / "double" / "inv"
         / "neg" / "not" / "square" / "sqrt"
         / "hash.bhp" ( "256" / "512" / "768" / "1024" )
         / "hash.ped" ( "64" / "128" )
         / "hash.psd" ( "2" / "4" / "8" )
binary-op = "add" / "add.w" / "sub" / "sub.w" / "mul" / "mul.w"
          / "div" / "div.w" / "rem" / "rem.w" / "pow" / "pow.w"
          / "shl" / "shl.w" / "shr" / "shr.w"
          / "and" / "or" / "xor" / "nand" / "nor"
          / "gt" / "gte" / "lt" / "lte" / "is.eq" / "is.neq"
          / "commit.bhp" ( "256" / "512" / "768" / "1024" )
          / "commit.ped" ( "64" / "128" )
ternary-op = "ternary"
assert-op = "assert.eq" / "assert.neq"
cast = "cast" 1*operand "into" register "as" register-type ";"
call = "call" callee *operand "into" *registers ";"
callee = identifier / external
operand = literal / register
literal = "aleo1" 58( lowercase / digit )   ; address
        / "true" / "false"                  ; boolean
        / %x22 *string-element %x22         ; string "..."
        / [ "-" ] numeral arithmetic-type   ; arithmetic
string-element = %x0-21 / #x23-5b / %x5d-10ffff ; anything but " or \
               / %x5c.22 ; escape for "
               / %x5c.5c ; escape for \
register = base-register *( "." identifier )
base-register = %"r" numeral
arithmetic-type = "field" / "group" / "scalar"
                / "u8" / "u16" / "u32" / "u64" / "u128"
                / "i8" / "i16" / "i32" / "i64" / "i128"
primitive-type = arithmetic-type / "address" / "bool" / "string"
plain-type = primitive-type / identifier
entry-type = plain-type ( ".constant" / ".public" / ".private" )
record-type = ( identifier / external ) ".record"
register-type = plain-type / record-type
in-out-type = entry-type / record-type
external = program-id "/" identifier
digit = "0"-"9"
numeral = 1*digit
uppercase = "A"-"Z"
lowercase = "a"-"z"
letter = uppercase / lowercase
identifier = (letter / "_") *( letter / digit / "_" ) ; but not a keyword
```