const output = (num1, num2) => {
    console.log(num1+num2);   
}

output(2,true); // 3 because true ko 1 maan lega
output(2,"3") // 23
output("2","3") // 23
output("2",null) // 2null
output("2",undefined) // 2undefined
output(2,null) // 2 -> 2+0
output(2,undefined) // NaN -> 2+NaN
output(2,) // NaN

const funcOutput = (name) => {
    return `${name} logged in`
}

console.log(funcOutput("abc"));
console.log(funcOutput(""));
console.log(funcOutput()); // undefined logged in

const funcOutput1 = (name) => {
    if(!name){
        console.log("Please enter name");
        return
    }
    return `${name} logged in`
}

console.log(funcOutput1()); // Please enter name followed by undefined
console.log(funcOutput1("")); // Please enter name followed by undefined

// We can also defined default params in JavaScript so that if we don't pass anything then it will take that value and if we pass value then it
// will override

const funcOutput2 = (name = "abc") => {
    if(!name){
        console.log("Please enter name");
        return
    }
    return `${name} logged in`
}

console.log(funcOutput2()); // abc logged in
console.log(funcOutput2("")); // Please enter name followed by undefined

/// Rest Operator(...)
const func1 = (...num) => {
    return num
}

const func2 = (val1, val2, ...num) => {
    return num
}

console.log(func1(100, 200, 300, 400, 500)); // [100,200,300,400,500]
console.log(func2(100, 200, 300, 400, 500)); // [300, 400, 500] -> because 100,200 to val1 and val2 m chali gyi

const user = {
    name: "abc",
    password: 123
}

const user1 = {
    name: "abc",
    passwords: 123
}

const func3 = (anyobject) => {
    return `Username: ${anyobject.name} and Password: ${anyobject.password}` 
}

console.log(func3(user));
console.log(func3(user1)); // Username: abc and Password: undefined
console.log(func3("abc")); // dono undefined aayenge