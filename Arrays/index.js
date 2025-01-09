const arr = [1,2,3,4,5, 'a']
const arr1 = new Array(1,2,4,4,6)
const arr2 = arr // since array non-primitive h to ref copy honge to kisi ek array m change krenge to doosri m bhi change ho jaayenge. This is
// k/w as shallow copy

console.log(arr);
console.log(arr1);
console.log(arr2);

arr.push(6) // push to end of array
arr.pop() // remove from end
arr.unshift(2) // push at starting
arr.shift() // remove from starting

console.log(arr);
arr2[1]='b'
console.log(arr);
console.log(arr2);

console.log(arr1.includes(5)); // false

const newarr = arr.join()

console.log(arr);
console.log(newarr); // 1,b,3,4,5,a -> join n array ko string bana diya to values , separated reh k without [] k aayi
console.log(typeof newarr); // string

const arr3 = [1,2,3,4,5,6,7]

const arr4 = arr3.slice(1,3)
console.log(arr3);
console.log(arr4); // 1st index se 2nd index tk ki values dega but original array same rhegi

const arr5 = arr3.splice(1,3) // 1st index se 3rd index tk ki values ko original array m se hi nikal lega
console.log(arr3); // [1,5,6,7]
console.log(arr5);