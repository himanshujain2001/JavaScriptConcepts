let score = '123'

let valueScore = Number(score)

console.log(typeof score); // string
console.log(typeof valueScore); // number
console.log(score); // 123
console.log(valueScore); // 123

let id = '123av'

let valueId = Number(id)

console.log(typeof id); // string
console.log(typeof valueId); // number
console.log(id); // 123av
console.log(valueId); // NaN -> Not a number

let scores = null

console.log(typeof scores); // object

let scoreValue = Number(scores)
console.log(scoreValue); // 0

let ids = undefined

console.log(typeof ids); // undefined

let idValue = Number(ids)
console.log(typeof idValue); // number
console.log(idValue); // NaN






