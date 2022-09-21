// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
console.log(cohort.split(""))

// a) Your answer: 
// Split is a built-in method that is used to split the values of the variables it is invoked upon.
// How it splits depends on the space or the value inside of the quotation marks.
// This console log will split string value of the variable cohort into individual single character variables and return an array with those variables
// returned:
// [
//   'F', 'o', 'x', 't',
//   'r', 'o', 't', ' ',
//   '2', '0', '2', '2'
// ]

// b) Verify and explain: 
//I was correct. I tested the area between the quotation marks with varying numbers and letters and some produce interesting results. but, in this point, a space inbetween the quotation mark returns an array with two variables [ 'Foxtrot', '2022' ], 
// I also did it with numbers, such as the number 2 inbetween the quotation marks and I got back an array without the number 2. [ 'Foxtrot ', '0', '', '' ]. 
// I reverified again back to the original log that was given and I got again, a return of an array containing each of the individual characters inside the cohort value string as an individual value. 



// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))



// a) Your answer:
// This code is a function called "greeter" that takes in an input of a variable, in this case a string "LEARN Student"
// and, it returns a result of a string that says 'Hello, Learn Student!' using string interpolation ${name} to call upon the inputted variable "LEARN Student"

// b) Verify and explain:
// The result came back undefined. I was wrong.  Okay.. I was wrong and right and the same time.. but the error was in syntax... where I didn't notice that there was no return before what the prompt and string interpolation. return `Hello, ${name}!`


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)

console.log(multipliedByTwo)

// a) Your answer: This code takes in an array called multipliedByTwo and uses the .map() higher-order-function to iterate through the given array and multiplies each value by 2.
  //  When console.log invoking the variable multipliedByTwo, it returns the outcome of the formula.

// b) Verify and explain: result: multipliedByTwo = [4, 5, 6, 7, 8]
  // My results were correct, I got the correct outcome, but.. although I am certain that multipliedByTwo is a variable and not a function. The code essentially used a the .map() method/logic inside of the multipliedByTwo variable, which is the input array and returned [4, 5, 6, 7, 8], which is a new array. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].map((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:
  //  this code constructs an array variable called 'onlyOdds' with the values [11, 12, 13, 14, 15].
  //  This array variable utilizes the higher-order-function .filter() method to iterate through the values inside of the array, and bringing back the values that are odd, only.
  // Results: [ 11, 13, 15 ]

// b) Verify and explain: The higher-order-functions .filter() and .map() are similar in that they iterate through an object, but the key difference is that .filter() function returns a subset after making decision through each iteration, and .map() function will do something to each one and return a new array. 
    // using the same variable, but changing to .map() from .filter(), the results are: [ true, false, true, false, true ].


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:
    // myCodingSkills is an object that contains these keys and values:
    // {
    //   languages: ["JavaScript", "Ruby"],
    //   frameworks: ["React", "Ruby on Rails"],
    //   databases: "PostgreSQL",
    //   versionControl: "GitHub"
    // }

    // the console.log(myCodingSkills.languages[0]) is printing the [0] index of the language key of the object myCodingSkills.  The results should be "JavaScript"

// b) Verify and explain: 
    // the Results: JavaScript, and I was correct. Every object has a name, a key, and a value, each has 'addresses' or syntax that can be used to access them. In this case, we pointed the console log to the object myCodingSkills, we gave it a key to go into .languages and then we told it which index we wanted [0] in the array that was there.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")

console.log(learnStudent)

// a) Your answer:
  //  There is a class called Learn with the keys: student, cohort, year. and the values: name, "Foxtrot", and 2022.
  // Essentially, we just built a new object using the class Learn to construct it, passing in the value of "George" into the key of student in the new object.  
  // So when we console log learnStudent.. it prints the information about the object we named 'learnStudent'.

// b) Verify and explain:
// output: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }

// I was correct in this.. since we created teh class.. we can always reuse it to stamp out similar objects using it's blueprint of keys and values. we can continually stamp out as much objects as we want using the same class.. as long as we use the proper syntax.. especially calling on the class making sure its Capitalized! 
