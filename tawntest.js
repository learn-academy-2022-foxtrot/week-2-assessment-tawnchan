const vowelTester1 = "learn"

describe("indexOfVowel", () => {
  it("returns the index of the first vowel", () => {
    expect(indexOfVowel(vowelTester1)).toEqual(1)
  })
})
const indexOfVowel = (string) => {
  for (let i = 0; i < string.length; i++) {
    if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
      return i }
  }
  }


    // Create a function called greeter that returns a string that says Hi, Foxtrot 2022!!!

  // Input: none
  // Output: "Hi, Foxtrot 2022!!!"

  // describe method lists the name of function and is passed an anonymous function
  describe("greeter", () => {
    // it method nested inside describe block describes what the function does
    it("returns a string that says Hi, Foxtrot 2022!!!", () => {
      // expect will invoke the function and compare the result to a predetermined expected output using .toEqual matcher
      expect(greeter()).toEqual("Hi, Foxtrot 2022!!!")
    })
  })

  // console.log(greeter()) === "Hi, Foxtrot 2022!!!"

  // To run your test $ yarn jest

  // Good Failed test - ReferenceError: greeter is not defined 

const greeter = () => {
  return "Hi, Foxtrot 2022!!!"
}

// Passed!!

describe("The name of your function", () => {
  it(`Describe what this function will do (for YOUR reference)`, () => {
    expect(invoking the function).toEqual(your expected output)
  })
})

-------------- OR

describe("functionName", () => {
  it(`The function will do this`, () => {
    expect(functionName(argument)).toEqual(Expected Result)
  })
})