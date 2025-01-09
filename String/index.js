const name = "abc"
const count = 10
const username = ' acbsj'

console.log(name + count + username + " Password");

// using string interpolation
console.log(`This is a modern way to concatenate string: ${name} ${count} ${username} Password`);
console.log(name[0]);
console.log(name.length);
console.log(name.__proto__);
console.log(typeof name); // string
console.log(name.toUpperCase());
console.log(name); // abc

const user = new String("abcd") // this is an another way of declaring string but it's type is object and key value pair m data aayega mtlb
// index key and char's of string values ban jaayenge
console.log(user[0]); // a
console.log(typeof user); // object
console.log(user.substring(0,3)); // abc
console.log(user.slice(0,3)); // abc
console.log(user.slice(-4,-2)); // ab (-ve indexing m d=-1, c=-2, b=-3 and so on. To is case m 'a' se chaalu krega aur 'b' pe rok dega kyu ki -2 
// vaala include nhi hoga)
console.log(user.trim()); // remove extra spaces from front as well as end
console.log(user.split('b')); // returns an array -> ['a', 'cd']


// Numbers in JavaScript
const num = 300
console.log(num);
console.log(typeof num); // number

const num1 = new Number(400)
console.log(num1);
console.log(typeof num1); // object
console.log(num1.toFixed(2)); // 400.00 -> precision h basically

const num2 = 1000000
console.log(num2.toLocaleString('en-IN')); // 10,00,000


// Math in JavaScript
console.log(Math.abs(-1)); //1
console.log(Math.round(3.2)); //3
console.log(Math.round(3.7)); //4
console.log(Math.ceil(3.1)); //4 (ceil mtlb top)
console.log(Math.floor(3.7)); //3 (floor mtlb down)
console.log(Math.random()); // 0 se 1 k beech m decimal values return krta h
console.log((Math.random()*10) + 1); // value will be always > 1
console.log(Math.floor(Math.random()*10) + 1); // Number value aayegi and > 1 aayegi, decimal nhi aayegi

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max-min+1)) + min); // isse values 1 se 6 k beech m aayegi