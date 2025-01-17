const mySym = Symbol('key1')

// symbol ko [] k saath likhenge tabhi vo symbol ki tarah treat hoga
// object m jaise name, age vagerah ye likhe h to internally object inko "name", "age" means string hi leta h

// object declaration using literal syntax:
const obj = {
    name: "abcd",
    "last name": "abc",
    age: 18,
    fullname: ['ab','cd'],
    [mySym]: "mySymValue"
}

console.log(obj.name); // abcd
console.log(obj["name"]); // abcd -> name ko string likha h kyu ki object usko internally string hi consider krta h
//console.log(obj."last name"); // not valid
console.log(obj["last name"]); // abc
console.log(obj[mySym]); // mySymValue
console.log(typeof obj[mySym]); // string
console.log(typeof mySym); // symbol
console.log(obj); // sab same aayega bas ye symbol vaala aise aayega -> [Symbol(key1)] : 'mySymValue'

// Object.freeze(obj)
obj.name = "kjav" // change nhi hoga because object freeze ho gya h

obj.greeting = () => {
    console.log("This is a function");  
}

obj.anotherGreeting = () => {
    console.log(`This is a function, ${this.name}`); // this jaroori h to store the address of current contaxt, direct name nhi likh skte 
}

const anotherGreeting = () => {
    console.log(`This is a function, ${this.name}`); // isme undefined dega 'this.name' value because kaunse obj ko ref maan na h vo pta hi nhi h
}

console.log(obj.greeting); // print function defination itself
console.log(obj.greeting()); // print This is a function followed by undefined because function isn't returning anything so by default
// it will return undefined
console.log(anotherGreeting);
console.log(anotherGreeting());


// object declaration using singleton(constructor) syntax:

const user = new Object();
user.name = "abc"
user.id = 123
user.email = "abc@gmail.com"

console.log(user);

const userobj = {
    name: "avc",
    fullname: {
        username: {
            firstname: "av",
            lastname: "c"
        }
    }
}

console.log(userobj.fullname.username);

const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    c: 3,
    d: 4
}
const obj3 = {
    e: 5,
    f: 6
}

const obj4 = {obj1, obj2, obj3} // isme in saare obj's ko as it is utha k copy kr dega

// const obj4 = Object.assign({}, obj1, obj2, obj3) // {} is an optional param and it's destination obj means obj1, obj2, obj3 are source
console.log(obj4);
console.log(obj1);

const obj5 = Object.assign(obj1, obj2, obj3) // after this obj1 and obj5 will be equal as obj1 is target here 
console.log(obj5);
console.log(obj1);

// Assign bhi use krne ki jaroorat nhi h sabse best h array ki tarah kr lo
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);

console.log(user);
console.log(Object.keys(user)); // array m aayengi saari keys
console.log(Object.values(user)); // array m aayengi
console.log(Object.entries(user)); // ek array aayegi aur usme har ele apne aap m ek array hoga and us array m phla ele key and doosra value hoga


// Object destructuring

const course = {
    coursename: "JavaScript",
    courseid: 1234,
    conceptname: "Objects"
}

const {coursename} = course
const {coursename: name} = course // both are same isme bas apan custom name de rhe h taaki bada naam nhi likhna pde baar baar

console.log(coursename);
console.log(name);
