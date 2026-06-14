// const tinderUser = new Objects()  // singelton
const tinderUser = {}  //non singelton

tinderUser.id = '123abc';
tinderUser.name = 'John';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "john@gmail.com",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        }
    },
    age: 30
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "one",2: "two"};
const obj2 = {3: "three",4: "four"};

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2); 

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));


const course = {
    courseName: "JavaScript",
    price: 299,
    courseInstructor: "John Doe"
}

const {courseInstructor: instructor} = course;
console.log(instructor);

// {
//     name: "John",
//     course: "JavaScript",
//     price: 299
// }

[
    {},
    {},
    {}
]