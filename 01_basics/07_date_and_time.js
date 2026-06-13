// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// let myCreatedDate = new Date(2020, 11, 25);
let myCreatedDate = new Date("2023-06-01");

console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now() - myCreatedDate.getTime());

console.log(Math.floor((Date.now()/1000))); 
 
let newDate =  new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})