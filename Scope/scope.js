/// This is global scope

let a = 10
const b = 20
var c = 30
let d= 40

/// This is block scope

if(true){
    let a = 20
    const b = 10
    var c = 40
    console.log(d);
}

console.log(a); // 10
console.log(b); // 20
console.log(c); // 40 -> This is the reason why var shouldn't be used because it don't care for scope


//////// Note: -> Global scope ki cheeze block scope m access kr skte while vice versa isn't true.