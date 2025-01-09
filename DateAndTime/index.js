let d = new Date();

console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toJSON());
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());
console.log(d.toString());
console.log(typeof d); // object

let yesterdayDate = new Date(2025,0,8) // Wed Jan 08 2025 (JavaScript m months 0 se start hote h)
console.log(yesterdayDate.toDateString());

let todaysDate = new Date("01-07-2025") // is syntax m month 1 se start hota h
console.log(todaysDate.toLocaleString());

let timeStamp = Date.now() // it will tell time in milliseconds from 1 Jan 1970 till today
console.log(timeStamp);
console.log(todaysDate.getTime()); // it will tell time in milliseconds from 1 Jan 1970 till specified date
console.log(Math.round(timeStamp/1000)); // time ko second m convert kr diya. round ka use kiya because time decimal m aata

let newDate = new Date();
console.log(newDate.getMonth());
