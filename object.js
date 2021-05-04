// # Objects: Part 1

// Please print each of your answers to the console.

// ** 1. Object Person.**
//     Create an object named person.Loop through the object and print both the property and value of the object. 

const person = {
    fName: "Khushal",
    lName: "Totakhail",
    age: 35,

}
for (fName in person) {
    console.log(Object.keys(person), Object.values(person));
}

console.log("==========================================");


// ** 2. Get Values.**
//     Create a function that returns an array of all ** values ** of an object's properties. 
//         * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
//     * Expected output:
// ```javascript
// ["tea", "coffee", "milk"] 
// ```



const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
};

Object.keys(getObjectValues);





console.log("===================================================");
//==========================================================================================
//     ** 3. Add A Method.**
//         Create an object and add a method to that object which prints the values of the objects in a string. 

// * Example
//```javascript

// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }
// ```
//             * Example of Expected Output
// "Michael Smith is a 20 year old driver in Paris".

let persons = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",

    // method one 
    print: function () {
        console.log(`${this.firstName} is a ${this.age} year old ${this.job} in ${this.city}`);
    }
};
persons.print()
// method two
// console.log(`${persons.firstName} is a ${persons.age} year old ${persons.job} in ${persons.city}`);




console.log("===========================================");
// ## Bonus Questions

//     ** 1. Convert keys and values into an array.**
//         Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// ```
//     * Expected output:
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

const objectToArray = {
    A: 1,
    B: 2,
    C: 3
};
console.log(objectToArray);

const info = (parameter) => {
    const array = Object.values(parameter);
    return array;
}
console.log(info(objectToArray));

/* const info = Object.values(objectToArray);
console.log(info); */



console.log("================================================");


//=========================================================================


//     ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// ```
//     * Expected output:
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// ```

const objectToArrayy = {
    cats: 1,
    dogs: 2,
    turtles: 4
};
// console.log(objectToArrayy);
const entries = Object.entries(objectToArrayy);
console.log(entries);



console.log("========================================");


//=====================================================================================
//     ** 2. List Properties.**
//         Create a function that returns an array of ** properties ** of a javascript object. 
// * Example
//                 ```javascript
let student = {
    name: "Mike",
    class: "4A",
    course: "English"
}
// console.log(student);

const keys = Object.keys(student);
console.log(keys);

// ```
//* Expected output:
// ```javascript
// ["name", "class", "course"]
// ```

console.log("=============================================");



//=====================================================================================
//** 3. Merge.**
//Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
//```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
//* Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
//** Extra Credit:** What happens if you merge two objects with the same property values ? In merging these two objects, do you expect to change either or both of the original objects ? Why or why not ? Comment your answers.

let first = { firstName: "john" }
let last = { lastName: "Smith", job: 'developer' }

const merge = (objectOne, objectTwo) => {
    let mergedObject = objectOne;
    let keys = Object.keys(objectTwo);
    for (let i = 0; i < keys.length; i++) {
        mergedObject[keys[i]] = objectTwo[keys[i]];
    }
    return mergedObject;
}
console.log('bonus 3:', merge(first, last));

// for (let prop in first) {
//     console.log(prop, first[prop]);
//     console.log(prop, last[prop]);
// }






//=====================================================================================
// ** 4. Switch Keys and Values.**
//     Create a function to get a copy of an object.The copy must switch the keys and values.
// * Example:
// ```javascript
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// ```
//* Expected Output:
// ```javascript
// {"John": name, "teacher": job} 
// ```





//=====================================================================================
//** 5. Return Keys and Values.**
//Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```