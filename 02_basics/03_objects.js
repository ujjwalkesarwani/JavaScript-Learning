// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "John",
    "full name": "John Doe",
    [mySym]: "key1",
    age: 30,
    location: "New York",
    email: "john@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["age"]);
// console.log(jsUser[mySym]);

// jsUser.isLoggedIn = false;
// // Object.freeze(jsUser);
// jsUser.age = 35;
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello there!"); 
}

// console.log(jsUser.greeting);  
console.log(jsUser.greeting());

jsUser.greetingTwo = function() {
    console.log(`Hello there!, I am ${this.name}`); 
}

console.log(jsUser.greetingTwo());