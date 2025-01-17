const arr = [1,2,3,4,5]

// filter function : it expects a callback function as parameter and returns value

const values = arr.filter( (element) => element > 3) // implicit return krvaa rhe h to ya to koi brace mat lagao ya () lagao

// agar explicit return (mtlb jab {} use krenge) krvaana hota to: 

// const values = arr.filter( (element) => {
// return element > 3
// }) 

console.log(values);


const numbers = [1,2,3,4,5]

// map function : it also expects callback functn

const newArray = numbers.map( (num) => num*2)

console.log(newArray);


// Chaining : means using multiple methods

const chainingArray = numbers
                      .filter( (num) => num > 3)
                      .map( (ele) => ele*ele)

console.log(chainingArray);


//// Reduce Function: 

const arrNum = [1,2,3,4]

// in this syntax 0 is initial value which is assigned to accumulator initially and currentValue is basically ele of array
const sum = arrNum.reduce( (accumulator, currentValue) => accumulator + currentValue , 0) 

console.log(sum);

const shoppingCart = [
    {
        itemName: "abc",
        price: 100
    },

    {
        itemName: "ac",
        price: 200
    },

    {
        itemName: "ab",
        price: 300
    }
]

const priceSum = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(priceSum);
