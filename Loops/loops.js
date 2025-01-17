//// For of loop

const numbers = [1,2,3,4]

for (const num of numbers) {
    console.log(num);
}

const greetings = "Hello"

for (const greet of greetings) {
    console.log(greet);   
}

// Maps

const map = new Map();
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
map.set('c', 3)

console.log(map); // 'c' => 3 ki sirf ek hi entry aayegi kyu ki map stores unique values and order to store values will also be same

for (const mp of map) {
    console.log(mp); // prints array, each array contain key values
}

// but if we want key values separately then we need to use below syntax
// [] likhne ka mtlb h destructuring of array
for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`); // prints array, each array contain key values
}


//// For in loop

const obj = {
    name: "abc",
    id: 1,
    email: "abc@gmail.com"
}

for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

const arr = [1,2,3,4,5]

for (const key in arr) {
    console.log(arr[key]);
}


///// ForEach Loop

const arr1 = [1,2,3,"abc"]

arr1.forEach( (element) => {
    console.log(element);
});

function func(item){
    console.log(item);
}

arr1.forEach(func) // 1 2 3 abc
// arr1.forEach(func()) // error: because we r executing func functn over here itself immediately and since it's not returning anything so by
// default undefined will be returned and then it will passed to forEach loop

// for each loop basically take upto 3 params as: element, index, array

console.log(typeof arr1);

arr1.forEach( (element, index, takenArray) => {
    console.log(element, index, takenArray);
} )

const values = arr1.forEach( (element) => {
    return element
} )

console.log(values); // undefined


////// Note: -> For of loop se object ko iterate nhi kra skte

// error: object is not iterable
// for (const key of obj) {
//     console.log(`Key: ${key}, Value: ${obj[key]}`);
// }

    //       -> foreach loop doesn't return anything so undefined aayga return m agar apan value ko store kra k return bhi krayenge to