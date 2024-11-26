'use strict'

/*
**Value Types and Operators
TODO: 1byte = 8bit, and 1nibble = 4bit

Numbers: 2^x, "x is numeric whole number"

Operators: (+, -, *, /, and %),

Special Numbers: -infity, infinity, NaN

Strings: "",'',``(template literal) ${}
Unary operators: unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type)

Boolean values: true , false

Comparison:(==, !=, ===, !==, <, >, <=, >=)
    console.log(3 > 2)
    // → true
    console.log(3 < 2)
    // → false
    console.log("zxdfdfrty" < "Zoroaster")
    // → true 
    TODO: uppercase letters are always “less” than lowercase ones
    >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).
    console.log(NaN == NaN)
    // → false

    Logical operators : (&&, ||, ??)
    console.log(true && false)
    // → false
    console.log(false || true)
    // → true
    Ternary Operator or conditional operator : (?:)
    console.log(true ? 1 : 2);
    // → 1

Empty values: null(itentionally) and undefined

Automatic type conversion
    type coercion
    eg. console.log(8 * null)
    // → 0
    console.log("5" - 1)
    // → 4
    console.log("5" + 1)
    // → 51
    console.log("five" * 2)
    // → NaN
    console.log(false == 0)
    // → true
    console.log(null == undefined);
    // → true
    console.log(null == 0);
    // → false

Short-circuiting of logical operators
    False Value: 0, NaN, and the empty string ("") count as false

    The ?? operator resembles || but returns the value on the right only if the one on the left is null or undefined, not if it is some other value that can be converted to false
    console.log(0 || 100);
    // → 100
    console.log(0 ?? 100);
    // → 0
    console.log(null ?? 100);
    // → 100

    TODO:In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X. This is called short-circuit evaluation.
*/