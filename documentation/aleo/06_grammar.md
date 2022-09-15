---
id: grammar
title: Aleo Instructions Grammar
sidebar_label: Grammar
---

This chapter briefly describes the Aleo instructions grammar.
A more advanced language specification written in ABNF format can be found [here](07_abnf.md).

```
program = *import title 1*definition
import = "import" program-id ";"
title = "program" program-id ";"
program-id = identifier [ "." identifier ]
definition = mapping / interface / record / function / closure
mapping = "mapping" identifier ":" mapping-key mapping-value
mapping-key = "key" identifier "as" finalize-type ";"
mapping-value = "value" identifier "as" finalize-type ";"
interface = "interface" identifier ":" 1*interface-component
interface-component = identifier "as" plain-type ";"
record = "record" identifier ":"
         "owner" "as" ( "address.private" / "address.public" )
         "gates" "as" ( "u64.private" / "u64.public" )
         *record-entry
record-entry = identifier "as" entry-type ";"
closure = "closure" identifier ":" *input 1*instruction *output
function = "function" identifier ":" *input *instruction *output [ finalize-command finalize ]
finalize = "finalize" identifier ":" *finalize-input 1*command *finalize-output
finalize-command = "finalize" *operand ";"
input = "input" base-register "as" in-out-type ";"
output = "output" register "as" in-out-type ";"
finalize-input = "input" register "as" finalize-type ";"
finalize-output = "output" register "as" finalize-type ";"
command = decrement / increment / instruction
decrement = "decrement" identifier "[" operand "]" "by" operand ";"
increment = "increment" identifier "[" operand "]" "by" operand ";"
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
finalize-type = ( plain-type ".public" ) / record-type
external = program-id "/" identifier
digit = "0"-"9"
numeral = 1*digit
uppercase = "A"-"Z"
lowercase = "a"-"z"
letter = uppercase / lowercase
identifier = (letter / "_") *( letter / digit / "_" ) ; but not a keyword
```
