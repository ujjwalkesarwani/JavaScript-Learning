// function sayHello() {
//    console.log("Hello!");
// }
// sayHello();

// function addNumbers(num1, num2) {
//    return num1 + num2;
// }

// const result = addNumbers(5, 10);
// console.log(result);

// function loginUserMessage(username = "Guest") {
//    return `Welcome back, ${username}!`;
// }

// const loginMessage = loginUserMessage("Alice");

// console.log(loginMessage);

function calculateCartPrice(...prices) {
   return prices;
}

console.log(calculateCartPrice(10, 20, 30, 40, 50));

const user = {
   username: "john_doe",
   email: "john.doe@example.com"
};

function displayUserInfo(anyobject){
   console.log(`Username: ${anyobject.username}, Email: ${anyobject.email}`);
}

// displayUserInfo(user);
displayUserInfo({ 
   username: "jane_doe", 
   email: "jane.doe@example.com"
});

const myNewArray = [1, 2, 3, 4, 5];

function sumArrayElements(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}

// const totalSum = sumArrayElements(myNewArray);
const totalSum = sumArrayElements([10, 20, 30, 40, 50]);

console.log(totalSum);
