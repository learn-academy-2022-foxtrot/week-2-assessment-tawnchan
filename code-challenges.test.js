// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]

// describe the name of the function and structure the the test.
describe("mult3", () => {
    // describe what the function will do
    it(`takes in an array and returns the array mulitplied by 3`, () => {
    //expect the function and pass in the argument .toEqual the output we are looking for.
      expect(mult3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    })
  })

  const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("mult3", () => {
    // describe what the function will do
    it(`takes in an array and returns the array mulitplied by 3`, () => {
    //expect the function and pass in the argument .toEqual the output we are looking for.
      expect(mult3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })

 // output:  ReferenceError: mult3 is not defined --> this is a good error because it tells us that the syntax and inputs and outputs of the test are correct and what is missing now is only for us to declare the function 'mult3'

//  b) Create the function that makes the test pass.

  // declare the name of the function using const and structure its proper syntax using (array) as the parameter.
  const mult3 = (array) => {
    // declare a new empty array for the function to push the new variables into.
    let newArray = []
    // create a for loop to iterate through the indexes of the array and add the conditions for it to iterate through
    // in this case its to multiply the given argument(array) by three and push that new variable to the newArray.
    for(let i=0; i<array.length; i++) {
        newArray.push(array[i] * 3)
    }
    // once the iteration is done, we want the function to return the newArray.
    return newArray  
}

console.log(mult3(numbersArray1)) 
// output: [ 18, 21, 24, 27, 30 ]
console.log(mult3(numbersArray2)) 
// output: [ 72, 81, 90, 99, 108 ]



// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

const tens = [10, 20, 30, 40, 50, 60]
// output: [no, no, yes, no, no, yes]


const divisibleBy3 = (array) => {
    return array.map(value => {
      if(value % 3 === 0) {
        return "yes"
      } else if(value % 3 !== 0) {
        return "no"
      } else {
        return "Ooops, something went wrong here"
      }
    })
  }

console.log(divisibleBy3(tens))
// output: [ 'no', 'no', 'yes', 'no', 'no', 'yes' ]


// <--  stuck from here.  We are now working with Objects, and I am uncertain of how to access the key and values to perform this test...    -->

// // a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"

// describe the name of the function and structure the the test.
describe("divisableBy3", () => {
    // describe what the function will do
    it(`takes in an object and returns "yes" if the value is divisable by 3, and "no" if it is not divisible by 3`, () => {
    //expect the function and pass in the argument .toEqual the output we are looking for.
      expect(divisibleBy3(object1)).toEqual(`${number} is divisible by three`)
    })
  })





// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"

// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.





// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// // b) Create the function that makes the test pass.

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

// // b) Create the function that makes the test pass.
