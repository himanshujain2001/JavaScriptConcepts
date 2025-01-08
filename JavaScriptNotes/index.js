Variables: 
1. var - function scoped, global scoped but not block scoped. Reassignment k saath saath redefination bhi possible h
         isiliye var ko use nhi krte ab.
         Ex: var a=10;
             var a=20;
             ye apan kr skte h var m lekin ye debugging issue create kr skta h to var ko use nhi krte ab

2. let - block scoped(mtlb kinhi 2 blocks k beech m define kiya h to unke beech m hi chalega baahar nhi)

Ex: {
    let a=10;
    console.log(a) // 10
}
console.log(a) // error
3. const

// String

// -> Concatenation, literals(``), split(), substring
// split method ki help se apan string ko specified place k acco break kr skte h alag alag and vo ek array of string return krega
// Ex: let s="This is a string"
// s.split(' ') // ['This' , 'is', 'a', 'string']
// -> string m beech m \ use krte h to uska mtlb hota h ki uske aage vaale char ko special char treat mt krna normal
// hi treat krna

// Functions

const sum = (a,b) =>{
    return a+b;
}

console.log(sum(2,3));

object m bhi functn use kr skte h

let obj = {
    name: "Abc",
    class: "4",
    func: function(){
        console.log("This is a functn is a object");
    }
}

console.log(obj);
obj.func();

for(let i in obj){
    console.log(i," ",obj[i])
}

// Array

let arr = [1,2,3]
-> slice(1,3) => 1st index se 3rd index tk ka content nikal jaayega
-> splice(1,2,"abc") => 1st index pe jaao aur vha se 2 value remove kro aur "abc" daal do
   Ex: splice(1,0,"ab") => 1st index pe jaao aur vha se kuch remove mt kro aur "ab" daal do to 1st index pe "ab" dal jaayega

-> map() => map m apan kuch functn likh k uska use kr k apan array k ele's m kuch action perform kr skte h
Ex: let square = arr.map((number) => {
      return number*number;
})

console.log(square) // 1 4 9

-> filter() => filter method m apan kuch logic likh k data filter kr skte h. Jaise hi apan logic likhenge to vo 
filter ko bta dega ki data include hoga ya exclude based on the condition satisfied or not.
Ex: let evennumber = arr.filter((number) => {
    return number%2===0;
})

console.log(evennumber) // [2]

let arr2 = [1,3,5,'abc',undefined, null]
let ans = arr2.filter((value) => {
    if(typeof(value)==='string')
        return true;
    else
        return false;
})

console.log(ans) // [abc]
if(typeof(value)==='number')
    return true;
agar ye krte to output: [1,3,5]

arr.forEach((value,index) => {
    console.log("Number: ",value, "index: ",index)
})

// Classes and objects

class Human{
    // Properties
    age=10; // By default public
    name="Abc"
    #rollno = 6; // # laga diya aage to private h

    // Behaviour
    walk() {
        console.log(" is walking")
    }
}

let obj1 = new Human();
console.log(obj1.age);

