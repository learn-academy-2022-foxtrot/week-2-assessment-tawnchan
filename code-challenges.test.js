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
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// describe the name of the function and structure the the test.
describe("mult3", () => {
    // describe what the function will do
    it(`takes in an array and returns the array mulitplied by 3`, () => {
    //expect the function and pass in the argument .toEqual the output we are looking for.
      expect(mult3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
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



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// // // Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// describe the name of the function and structure the the test.
describe("divideBy3", () => {
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// // // Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

    // describe what the function will do
    it(`takes in an object and returns if it is divisible by 3 or not`, () => {
    //expect the function and pass in the argument .toEqual the output we are looking for.
      expect(divideBy3(object1)).toEqual(`${object1.number} is divisible by three`)
      expect(divideBy3(object2)).toEqual(`${object2.number} is divisible by three`)
      expect(divideBy3(object3)).toEqual(`${object3.number} is NOT divisible by three`)
    })
  })
// output: ReferenceError: divideBy3 is not defined, which is a good error, so now we just have to declare the function divideBy3 and pass in the given objects.


// b) Create the function that makes the test pass.

// Declare the function, const, and name it divideBy3 that takes in an object.
// intput: object
// output: "is divisible by three" or "is NOT divisible by three"
const divideBy3 = (object) => {
  // if statement in the function targeting the number key in the object and dividing it by 3 and we want the answer to be true or false so we compare it to === 0.
    if (object.number % 3 === 0) {
      // if the return is strictly 0 we will return the output string with the preloaded object key. If the return does not strictly equal to 0 then we will return the corresponding string pointing to the object key, which is in this case, again, number is NOT divisible by three.
      return `${object.number} is divisible by three`
    } else if (object.number % 3 !== 0) {
      return `${object.number} is NOT divisible by three`
      // we also include another else statement as a kind of catch all just incase something goes amiss with out syntax and formatting. 
    } else {
      return "Something went wrong..."
    }
}


// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe the name of the function and structure the the test.
describe("capitalizeArray", () => {
  // describe what the function will do
  it(`takes in an array of strings and returns an array with the words capitalized`, () => {
  //expect the function and pass in the argument .toEqual the output we are looking for.
    expect(capitalizeArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalizeArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

// b) Create the function that makes the test pass.

// declare the name of the function using const and structure its proper syntax using (array) as the parameter.
const capitalizeArray = (array) => {
  //use .map built-in function to iterate through the given array
  return array.map((value) => {
    // return a new array targeting the first character of each values inputing it into another built in function that only works on strings .toUpperCase and then .slice it back together the rest of the string along with .toLowerCase.  This isn't my code, I needed a lot of help with this, but I understand it now... I think. 
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  });
};

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// describe the function, name it "indexOfVowel" and build th structure of the test including the "it" statement.
describe("indexOfVowel", () => {
  // it statement and describe what the function does.
  it("returns the index of the first vowel", () => {
    // put in our expect which is calling the function on the given variables. and add the expected output into the .toEqual().
    expect(indexOfVowel(vowelTester1)).toEqual(1)
    expect(indexOfVowel(vowelTester2)).toEqual(0)
    expect(indexOfVowel(vowelTester3)).toEqual(2)
  })
})

// Results: ReferenceError: indexOfVowel is not defined, which is a GOOD Fail. Now we just have to dclare the function "indexOfVowel" and write out the code.

// // b) Create the function that makes the test pass.

// Declare function with const and name the function "indexOfVowel" which takes in a (string)..
const indexOfVowel = (string) => {
  // Using a For Loop we will iterate through the variable and from index[0] to the length of the string, counting every iteration.
  for (let i = 0; i < string.length; i++) {
    //create conditional statements for each iteration and pass on the conditions that were met, logging which index position the vowel it finds is placed in.
    if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
      //return the index of the first vowel.
      return i }
  }
  }

  console.log(indexOfVowel(vowelTester1)) //Output: 1
  console.log(indexOfVowel(vowelTester2)) //Output: 0
  console.log(indexOfVowel(vowelTester3)) //Output: 2

  //Success!

  // This was a very challenging assessment for me, everyday, things are moving so fast and how everything builds on the last.. I had to keep all the weeks' prior notes and syllabus open and really try to solve everything little piece one by one as I am not accustomed to it.. like, writing functions, the proper syntaxes.. etc. my mind isn't used to reading code yet.. but, i can tell that its beginning, slowly, to start recognizing what it is i am looking at... also getting a better idea how to tie things, everything we've learned so far, together.

  // i just need to cycle through all the previous topics over and over again until it just clicks.  

