---
id: specification
title: Aleo Instruction Formal Specification
sidebar_label: Formal Specification
---

# Formal Specification for Aleo Instructions Syntax

This chapter describes Aleo instructions by their formal syntax.
The specification of the grammar is derived from the current implementation of
the nom parser of Aleo instructions in snarkVM.

The grammar should recognize exactly the same language as the parser.
The formulation of the rules for some constructs may not correspond
to the parser implementation exactly;
this is to highlight more structure to facilitate future changes,
or because of inherent differences between
the declarative nature of the grammar
and the operational nature of the parser.

This grammar currently consists of one level,
as opposed to two levels (lexical and syntactic).
While two levels are typical for higher-level languages like Leo,
one level are workable for lower-level languages like Aleo instructions.
By not throwing away whitespace and comment
when moving between the two levels,
we can (as the current rules do) enforce requirements
on where comments and whitespace may occur.
The parser also is written according to a single level.
All of this may be revisited in the future, if needed.

The grammar should be unambiguous
if we take into account the extra-grammatical requirement
that the longest match is used,
which is a common extra-grammatical requirement,
at least in lexical grammars of two-level grammars,
but should also work for this one-level grammar.
We plan to formally prove this eventually.

The rules below are separated into sections delimited by 40 semicolons.
The sections do not have a very deep significance,
but are meant to group related rules.
For instance, the first section gives names to characters
that could not be otherwise denoted in ABNF strings;
the second section categorizes the allowed characters;
and so on.


--------

###### horizontal tab
```abnf
ht = %x9 ;
```

###### line feed
```abnf
lf = %xA ;
```

###### carriage return
```abnf
cr = %xD ;
```

###### space
```abnf
sp = %x20 ;
```

###### double quotes
```abnf
dq = %x22 ;
```


--------


###### visible ascii
```abnf
visible-ascii = %x21-7E
```

###### other ascii
```abnf
other-ascii = %x0-8 / %xB-C / %xE-1F / %x7F
```

###### ascii
```abnf
ascii = visible-ascii / ht / sp / lf / cr / other-ascii
```

Go to: _[cr](#carriage-return), [ht](#horizontal-tab), [lf](#line-feed), [other-ascii](#other-ascii), [sp](#space), [visible-ascii](#visible-ascii)_;


###### safe nonascii
```abnf
safe-nonascii = %x80-2029 / %x202F-2065 / %x206A-D7FF / %xE000-10FFFF
                ; excludes bidi embeddings/overrides/isolates
                ; and excludes high/low surrogates
```

###### bidi
```abnf
bidi = %x202A-202E / %x2066-2069
```

###### surrogate
```abnf
surrogate = %xD800-DFFF ; these are disallowed via UTF-8 decoding
```

###### nonascii
```abnf
nonascii = safe-nonascii / bidi / surrogate
```

Go to: _[bidi](#bidi), [safe-nonascii](#safe-nonascii), [surrogate](#surrogate)_;


###### character
```abnf
character = ascii / nonascii
```

Go to: _[ascii](#ascii), [nonascii](#nonascii)_;



--------


###### escaped line feed
```abnf
escaped-lf = "\" lf
```

Go to: _[lf](#line-feed)_;


###### plain whitespace
```abnf
plain-ws = ht / sp / lf / cr ; plain (i.e. without escaped-lf) whitespace
```

Go to: _[cr](#carriage-return), [ht](#horizontal-tab), [lf](#line-feed), [sp](#space)_;


###### whitespace
```abnf
ws = *( 1*plain-ws / escaped-lf ) ; whitespace
```


--------


###### comment
```abnf
comment = line-comment / block-comment
```

Go to: _[block-comment](#block-comment), [line-comment](#line-comment)_;


###### line comment
```abnf
line-comment = "//" *( not-lf-or-cr escaped-lf )
```

###### not lf or cr
```abnf
not-lf-or-cr = %x0-9 / %xB-C / %xE-10FFFF ; anything but lf or cr
```

###### block comment
```abnf
block-comment = "/*" rest-of-block-comment
```

Go to: _[rest-of-block-comment](#rest-of-block-comment)_;


###### rest of block comment
```abnf
rest-of-block-comment = "*" rest-of-block-comment-after-star
                      / not-star rest-of-block-comment
```

Go to: _[not-star](#not-star), [rest-of-block-comment-after-star](#rest-of-block-comment-after-star), [rest-of-block-comment](#rest-of-block-comment)_;


###### not star
```abnf
not-star = %x0-29 / %x2B-10FFFF ; anything but *
```

###### rest of block comment after star
```abnf
rest-of-block-comment-after-star = "/"
                                 / "*" rest-of-block-comment-after-star
                                 / not-star-or-slash rest-of-block-comment
```

Go to: _[not-star-or-slash](#not-star-or-slash), [rest-of-block-comment-after-star](#rest-of-block-comment-after-star), [rest-of-block-comment](#rest-of-block-comment)_;


###### not star or slash
```abnf
not-star-or-slash = %x0-29 / %x2B-2E / %x30-10FFFF ; anything but * or /
```


--------


###### comments or whitespace
```abnf
cws = ws *( comment / ws ) ; comments and/or whitespace
```

Go to: _[ws](#whitespace)_;



--------


###### uppercase letter
```abnf
uppercase-letter = %x41-5A ; A-Z
```

###### lowercase letter
```abnf
lowercase-letter = %x61-7A ; a-z
```

###### letter
```abnf
letter = uppercase-letter / lowercase-letter
```

Go to: _[lowercase-letter](#lowercase-letter), [uppercase-letter](#uppercase-letter)_;



--------


###### digit
```abnf
digit = %x30-39 ; 0-9
```

###### hex digit
```abnf
hex-digit = digit / "a" / "b" / "c" / "d" / "e" / "f" ; 0-9 A-F a-f
```

Go to: _[digit](#digit)_;



--------


###### identifier
```abnf
identifier = 1*letter *( letter / digit / "_" )
```

###### program id
```abnf
program-id = identifier "." identifier
```

Go to: _[identifier](#identifier)_;


###### locator
```abnf
locator = program-id "/" identifier
```

Go to: _[identifier](#identifier), [program-id](#program-id)_;



--------


###### register
```abnf
register = %s"r" 1*digit
```

###### register access
```abnf
register-access = register *( "." identifier )
```

Go to: _[register](#register)_;



--------


###### signed literal
```abnf
signed-literal = [ "-" ] 1*( digit *"_" ) signed-type
```

Go to: _[signed-type](#signed-type)_;


###### unsigned literal
```abnf
unsigned-literal = [ "-" ] 1*( digit *"_" ) unsigned-type ; remove [ "-" ]
```

Go to: _[unsigned-type](#unsigned-type)_;


###### integer literal
```abnf
integer-literal = signed-literal / unsigned-literal
```

Go to: _[signed-literal](#signed-literal), [unsigned-literal](#unsigned-literal)_;


###### field literal
```abnf
field-literal = [ "-" ] 1*( digit *"_" ) field-type
```

Go to: _[field-type](#field-type)_;


###### group literal
```abnf
group-literal = [ "-" ] 1*( digit *"_" ) group-type
```

Go to: _[group-type](#group-type)_;


###### scalar literal
```abnf
scalar-literal = [ "-" ] 1*( digit *"_" ) scalar-type
```

Go to: _[scalar-type](#scalar-type)_;


###### arithmetic literal
```abnf
arithmetic-literal = integer-literal
                   / field-literal
                   / group-literal
                   / scalar-literal
```

Go to: _[field-literal](#field-literal), [group-literal](#group-literal), [integer-literal](#integer-literal), [scalar-literal](#scalar-literal)_;



--------


###### address literal
```abnf
address-literal = %s"aleo1" 1*( address-char *"_" )
```

###### address char
```abnf
address-char = "0" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9"
             / %s"a" / %s"c" / %s"d" / %s"e" / %s"f" / %s"g" / %s"h" / %s"j"
             / %s"k" / %s"l" / %s"m" / %s"n" / %s"p" / %s"q" / %s"r" / %s"s"
             / %s"t" / %s"u" / %s"v" / %s"w" / %s"x" / %s"y" / %s"z"
```


--------


###### boolean literal
```abnf
boolean-literal = %s"true" / %s"false"
```


--------


###### string literal
```abnf
string-literal = dq *string-element dq
```

Go to: _[dq](#double-quotes)_;


###### string element
```abnf
string-element = not-dq-or-backslash
               / escaped-char
               / escaped-ws
```

Go to: _[escaped-char](#escaped-char), [escaped-ws](#escaped-whitespace), [not-dq-or-backslash](#not-dq-or-backslash)_;


###### not dq or backslash
```abnf
not-dq-or-backslash = %x0-21 / %x23-5B / %x5D-10FFFF ; anything but " or \
```

###### escaped char
```abnf
escaped-char = "\" ( dq
                   / "\"
                   / "/"
                   / %s"n"
                   / %s"r"
                   / %s"t"
                   / %s"b"
                   / %s"f"
                   / %s"u" "{" 1*6hex-digit "}" )
```

Go to: _[dq](#double-quotes)_;


###### escaped whitespace
```abnf
escaped-ws = "\" 1*plain-ws ; should the ws here start with a line terminator?
```


--------


###### literal
```abnf
literal = arithmetic-literal
        / address-literal
        / boolean-literal
        / string-literal
```

Go to: _[address-literal](#address-literal), [arithmetic-literal](#arithmetic-literal), [boolean-literal](#boolean-literal), [string-literal](#string-literal)_;



--------


###### operand
```abnf
operand = literal / register-access / %s"self.caller" / program-id
```

Go to: _[literal](#literal), [program-id](#program-id), [register-access](#register-access)_;



--------


###### unsigned type
```abnf
unsigned-type = %s"u8" / %s"u16" / %s"u32" / %s"u64" / %s"u128"
```

###### signed type
```abnf
signed-type = %s"i8" / %s"i16" / %s"i32" / %s"i64" / %s"i128"
```

###### integer type
```abnf
integer-type = unsigned-type / signed-type
```

Go to: _[signed-type](#signed-type), [unsigned-type](#unsigned-type)_;


###### field type
```abnf
field-type = %s"field"
```

###### group type
```abnf
group-type = %s"group"
```

###### scalar type
```abnf
scalar-type = %s"scalar"
```

###### arithmetic type
```abnf
arithmetic-type = integer-type / field-type / group-type / scalar-type
```

Go to: _[field-type](#field-type), [group-type](#group-type), [integer-type](#integer-type), [scalar-type](#scalar-type)_;


###### address type
```abnf
address-type = %s"address"
```

###### boolean type
```abnf
boolean-type = %s"boolean"
```

###### string type
```abnf
string-type = %s"string"
```

###### literal type
```abnf
literal-type = arithmetic-type / address-type / boolean-type / string-type
```

Go to: _[address-type](#address-type), [arithmetic-type](#arithmetic-type), [boolean-type](#boolean-type), [string-type](#string-type)_;


###### plaintext type
```abnf
plaintext-type = literal-type / identifier
```

Go to: _[identifier](#identifier), [literal-type](#literal-type)_;


###### value type
```abnf
value-type = ( plaintext-type %s".constant"
             / plaintext-type %s".public"
             / plaintext-type %s".private"
             / identifier %s".record"
             / locator %s".record" )
```

Go to: _[identifier](#identifier), [locator](#locator), [plaintext-type](#plaintext-type)_;


###### finalize type
```abnf
finalize-type = ( plaintext-type %s".public"
                / identifier %s".record"
                / locator %s".record" )
```

Go to: _[identifier](#identifier), [locator](#locator), [plaintext-type](#plaintext-type)_;


###### record entry type
```abnf
entry-type = plaintext-type ( %s".constant" / %s".public" / %s".private" )
```

Go to: _[plaintext-type](#plaintext-type)_;


###### register type
```abnf
register-type = ( locator %s".record"
                / identifier %s".record"
                / plaintext-type )
```

Go to: _[identifier](#identifier), [locator](#locator), [plaintext-type](#plaintext-type)_;



--------


###### import
```abnf
import = cws %s"import" ws program-id ws ";"
```

Go to: _[cws](#comments-or-whitespace), [program-id](#program-id), [ws](#whitespace)_;



--------


###### mapping
```abnf
mapping = cws %s"mapping" ws identifier ws ":"
          mapping-key
          mapping-value
```

Go to: _[cws](#comments-or-whitespace), [identifier](#identifier), [mapping-key](#mapping-key), [mapping-value](#mapping-value), [ws](#whitespace)_;


###### mapping key
```abnf
mapping-key = cws %s"key" ws identifier ws %s"as" ws finalize-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [finalize-type](#finalize-type), [identifier](#identifier), [ws](#whitespace)_;


###### mapping value
```abnf
mapping-value = cws %s"value" ws identifier ws %s"as" ws finalize-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [finalize-type](#finalize-type), [identifier](#identifier), [ws](#whitespace)_;



--------


###### interface
```abnf
interface = cws %s"interface"  ws identifier ws ":" 1*tuple
```

Go to: _[cws](#comments-or-whitespace), [identifier](#identifier), [ws](#whitespace)_;


###### tuple
```abnf
tuple = cws identifier ws %s"as" ws plaintext-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [identifier](#identifier), [plaintext-type](#plaintext-type), [ws](#whitespace)_;



--------


###### record
```abnf
record = cws %s"record" ws identifier ws ":"
         cws %s"owner" ws %s"as" ws
         cws ( %s"address.public" / %s"address.private" ) ws ";"
         cws %s"gates" ws %s"as" ws
         cws ( %s"u64.public" / %s"u64.private" ) ws ";"
         *entry
```

Go to: _[cws](#comments-or-whitespace), [identifier](#identifier), [ws](#whitespace)_;


###### record entry
```abnf
entry = cws identifier ws %s"as" ws entry-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [entry-type](#record-entry-type), [identifier](#identifier), [ws](#whitespace)_;



--------


###### unary operator
```abnf
unary-op = %s"abs" / %s"abs.w"
         / %s"double"
         / %s"inv"
         / %s"neg"
         / %s"not"
         / %s"square"
         / %s"sqrt"
```

###### binary operator
```abnf
binary-op = %s"add" / %s"add.w"
          / %s"sub" / %s"sub.w"
          / %s"mul" / %s"mul.w"
          / %s"div" / %s"div.w"
          / %s"rem" / %s"rem.w"
          / %s"mod"
          / %s"pow" / %s"pow.w"
          / %s"shl" / %s"shl.w"
          / %s"shr" / %s"shr.w"
          / %s"and"
          / %s"or"
          / %s"xor"
          / %s"nand"
          / %s"nor"
          / %s"gt"
          / %s"gte"
          / %s"lt"
          / %s"lte"
```

###### ternary operator
```abnf
ternary-op = %s"ternary"
```

###### is operator
```abnf
is-op = %s"is.eq" / %s"is.neq"
```

###### assert operator
```abnf
assert-op = %s"assert.eq" / %s"assert.neq"
```

###### commit operator
```abnf
commit-op = %s"commit.bhp" ( "256" / "512" / "768" / "1024" )
          / %s"commit.ped" ( "64" / "128" )
```

###### hash operator
```abnf
hash-op = %s"hash.bhp" ( "256" / "512" / "768" / "1024" )
         / %s"hash.ped" ( "64" / "128" )
         / %s"hash.psd" ( "2" / "4" / "8" )
```

<a name="unary"></a>
```abnf
unary = unary-op ws ( operand ws ) %s"into" ws register
```

Go to: _[operand](#operand), [register](#register), [unary-op](#unary-op), [ws](#whitespace)_;


<a name="binary"></a>
```abnf
binary = unary-op ws 2( operand ws ) %s"into" ws register
```

Go to: _[register](#register), [unary-op](#unary-op), [ws](#whitespace)_;


<a name="ternary"></a>
```abnf
ternary = unary-op ws 3( operand ws ) %s"into" ws register
```

Go to: _[register](#register), [unary-op](#unary-op), [ws](#whitespace)_;


<a name="is"></a>
```abnf
is = is-op ws operand ws operand %s"into" ws register
```

Go to: _[is-op](#is-op), [operand](#operand), [register](#register), [ws](#whitespace)_;


<a name="assert"></a>
```abnf
assert = assert-op ws operand ws operand
```

Go to: _[assert-op](#assert-op), [operand](#operand), [ws](#whitespace)_;


<a name="commit"></a>
```abnf
commit = commit-op ws operand ws operand ws %s"into" ws register
```

Go to: _[commit-op](#commit-op), [operand](#operand), [register](#register), [ws](#whitespace)_;


<a name="hash"></a>
```abnf
hash = hash-op ws operand ws %s"into" ws register
```

Go to: _[hash-op](#hash-op), [operand](#operand), [register](#register), [ws](#whitespace)_;


<a name="cast"></a>
```abnf
cast = %s"cast" 1*( ws operand )
       ws %s"into" ws register ws %s"as" ws register-type
```

Go to: _[register-type](#register-type), [register](#register), [ws](#whitespace)_;


<a name="call"></a>
```abnf
call = %s"call" ws ( locator / identifier ) ws 1*( ws operand )
       ws %s"into" ws 1*( ws register )
```

Go to: _[identifier](#identifier), [locator](#locator), [ws](#whitespace)_;


<a name="instruction"></a>
```abnf
instruction = cws
              ( unary
              / binary
              / ternary
              / is
              / assert
              / commit
              / hash
              / cast
              / call )
              ws ";"
```

Go to: _[assert](#assert), [binary](#binary), [call](#call), [cast](#cast), [commit](#commit), [cws](#comments-or-whitespace), [hash](#hash), [is](#is), [ternary](#ternary), [unary](#unary), [ws](#whitespace)_;


<a name="decrement"></a>
```abnf
decrement = cws %s"decrement"
            ws identifier "[" ws operand ws "]"
            ws %s"by" ws operand ws ";"
```

Go to: _[cws](#comments-or-whitespace), [identifier](#identifier), [operand](#operand), [ws](#whitespace)_;


<a name="increment"></a>
```abnf
increment = cws %s"increment"
            ws identifier "[" ws operand ws "]"
            ws %s"by" ws operand ws ";"
```

Go to: _[cws](#comments-or-whitespace), [identifier](#identifier), [operand](#operand), [ws](#whitespace)_;


<a name="command"></a>
```abnf
command = decrement / increment / instruction
```

Go to: _[decrement](#decrement), [increment](#increment), [instruction](#instruction)_;


<a name="finalize-command"></a>
```abnf
finalize-command = cws %s"finalize" *( ws operand ) cws ";"
```

Go to: _[cws](#comments-or-whitespace)_;



--------


<a name="closure"></a>
```abnf
closure = cws %s"closure" ws identifier ws ":"
          *closure-input
          1*instruction
          *closure-output
```

Go to: _[cws](#comments-or-whitespace), [identifier](#identifier), [ws](#whitespace)_;


<a name="closure-input"></a>
```abnf
closure-input = cws %s"input" ws register
                ws %s"as" ws register-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [register-type](#register-type), [register](#register), [ws](#whitespace)_;


<a name="closure-output"></a>
```abnf
closure-output = cws %s"output" ws register-access
                 ws %s"as" ws register-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [register-access](#register-access), [register-type](#register-type), [ws](#whitespace)_;



--------


<a name="function"></a>
```abnf
function = cws %s"function" ws identifier ws ":"
           *function-input
           *instruction
           *function-output
           cws [ finalize-command finalize ]
```

Go to: _[cws](#comments-or-whitespace), [finalize-command](#finalize-command), [finalize](#finalize), [identifier](#identifier), [ws](#whitespace)_;


<a name="function-input"></a>
```abnf
function-input = cws %s"input" ws register
                 ws %s"as" ws value-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [register](#register), [value-type](#value-type), [ws](#whitespace)_;


<a name="function-output"></a>
```abnf
function-output = cws %s"output" ws register-access
                  ws %s"as" ws value-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [register-access](#register-access), [value-type](#value-type), [ws](#whitespace)_;


<a name="finalize"></a>
```abnf
finalize = cws %s"finalize" ws identifier ws ":"
           *finalize-input
           1*command
           *finalize-output
```

Go to: _[cws](#comments-or-whitespace), [identifier](#identifier), [ws](#whitespace)_;


<a name="finalize-input"></a>
```abnf
finalize-input = cws %s"input" ws register
                 %s"as" ws finalize-type ws ":"
```

Go to: _[cws](#comments-or-whitespace), [finalize-type](#finalize-type), [register](#register), [ws](#whitespace)_;


<a name="finalize-output"></a>
```abnf
finalize-output = cws %s"output" ws register-access
                  ws %s"as" ws finalize-type ws ";"
```

Go to: _[cws](#comments-or-whitespace), [finalize-type](#finalize-type), [register-access](#register-access), [ws](#whitespace)_;



--------


<a name="program"></a>
```abnf
program = *import
          cws %s"program" ws program-id ws ";"
          1*( mapping / interface / record / closure / function )
          cws

