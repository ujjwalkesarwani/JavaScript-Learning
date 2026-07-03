// const user = {
//     name: 'John',
//     price: 100,

//     welcome: function() {
//         console.log(`Welcome ${this.name}`);
//         console.log(this);
//     }
// };

// user.welcome(); 
// user.name = 'Jane';
// user.welcome();

// console.log(this);

// function samosa(){
//     let user = "john";
//     console.log(this.user);
// }

// samosa();

// const samosa = function () {
//       let user = "john";
//     console.log(this.user);
// }
// samosa();

const samosa = () => {
    let user = "john";
    console.log(this.user);
}
// samosa();

const addTwo = (a, b) => {
    return a + b;           //explicit return
}
// console.log(addTwo(2, 3));

const addTwo2 = (a, b) => (a + b);     //implicit return

console.log(addTwo2(2, 3));
