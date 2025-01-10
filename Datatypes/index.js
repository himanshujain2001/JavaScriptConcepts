/*

 number
 string
 boolean
 bigint
 null
 undefined
 symbol
 object

*/

let username = 'abcd'
let id = 123

console.log(typeof(username)); // string
console.log(typeof(id)); // number
console.log(typeof(null)); // object
console.log(typeof(undefined)); // undefined

// Primitive Datatypes(Call by Value) - String, Number, Boolean, null, undefined, Symbol, BigInt
// -> Symbol data ko unique banane ka kaam krta h and it's return type is Symbol

const ids = Symbol('12')
const ids1 = Symbol('12')

console.log(ids === ids1); // false

// Non-Primitive(Call by reference) - Array, Objects, Functions
// -> type of non-primitive data types is "object"
