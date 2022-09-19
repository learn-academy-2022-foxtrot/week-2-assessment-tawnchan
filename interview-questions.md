# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: 
    Parameters are placeholders when writing out function code. they are used to reference what argument will be passed in when the function is invoked. in the structure of a function, they are written in parentheses before the arrow notation. when called upon by the function, the function uses the arguments that are passed through in place of the parameters to log the result.

    Arguments are values that are passed through a function, in replace of the parameter when the function is invoked.  the function will use the arguments inplace of the parameter and logic out the results. 

    example: const hello = (name) => {
        return `Hello there ${name}`
    }

    console.log(hello("Tawn"))

    In this example, the function called "hello" takes in a *parameter* called     "name" and it returns the string 'Hello there ${name}',.
    
    when we console log... "Tawn" is the *argument* and we will pass it through the function in replace of the *parameter* we called earlier "name".
    
    The result will be 'Hello there Tawn'.

Researched answer:  A parameter is a placeholder variable in a function expression.  when a function is invoked, the argument is the variable that will be passed through the function in place of the parameter. I think, its about the same as what I have answered. 


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:
    I'm not exactly sure of the wording... but with the built in method .map iterates through an array and returns back another array with the applied function.  It needs a starting point.. an ending point and how to iterate through, for example.. iterate every two indexes.. or every one index.. which index to start and to which index to end the iteration. it also needs a new variable to input the new array. 

Researched answer:
    .map takes in these parameters: the current value, the index, and the array the higher-order function is called on. map takes in an array as input and iterates through, returning a new array with the same length. 

    an example of this:
        const Array = [1, 2, 3, 4, 5]     // the given array

        const tripleUp = Array.map((value) => {     //name the function and structure the function using .map taking in Array and returning Array * 3. 
        return value * 3
        })

        console.log(tripleUp)
        output: [ 3, 6, 9, 12, 15 ]

3. What is the difference between .map and .filter?

Your answer: Essentially they do th same things, but .filter brings back the values that met the criteria through the iterations and returns those values only, whereas .map returns a new array with the same amount of variables.  

Researched answer:
    Correction, .map returns a new array with the *updated* values with the same amount of variables. .filter returns an array with only the variables that met the criteria of the condition. 
    
    example of .map:
        const myArray = [1, 2, 3, 4, 5, 6]

        const multiplier = myArray.map((value) => value * 3)

    console.log(multiplier)
    output: [3, 6, 9, 12, 15, 18]
    

    example of .filter:
        const numbersArray = [1, 2, 3, 4, 5, 6, 7]

        const onlyEven = (array) => {
        return array.filter((value) => value % 2 === 0)
        }

    console.log(onlyEven(numbersArray))
    output: [ 2, 4, 6 ]


4. What is iteration?

Your answer: iteration is the number of times a function loops through the index variables of an array until the given conditions are met. 

Researched answer:  Iteration is a loop that cycles through an array applying the given functions and returning the results. 

5. What is the difference between a class and an object?

Your answer: 
    Classes are a kind of function that is used to create objects that contain specfic kinds of data called keys and values. objects are variables that contain keys and values. Classes uses specfic keywords to create and access the data of the objects it creates. objects, again, contain these values that are inputted when and after its creation. by using classes, we can quickly stamp out objects by inputing the values to their corresponding keys.


Researched answer:  - The keywords when using classes are: 
                        constructor: a special method for creating and initializing objects
                    -   this: a keyword that refers to the object it belongs to (the object it is in)
                    -   new: used when creating a new object
Here's an example: 
// we name the class, it has to be Capital letters and PascalCased
    class Car {
// the constructor is like a method that adds they keys and values to the object of class.
    constructor() {
// We use "this" to refer to the key and values of the object it is in.
    this.engine = "The engine is broken, it does not drive"
    }
// we can add functions to this to change the values of any given key.
    fixed() {
    this.engine = "The engine is fixed, we can drive it now."
    }
}

    const red = new Car()

    console.log(red.engine)
    output: The engine is broken, it does not drive

    red.fixed()
    console.log(red.engine)
    output: The engine is fixed, we can drive it now.


6. STRETCH: What is hoisting in JavaScript?

Your answer: 
    I have no idea what hoisting is.. but maybe its a way to replace a variable or an element? bringing it from one place to another.. maybe taking it from one object to another or moving things around?

Researched answer:
     Okay.. its similar to what my answer was.. it is moving things around.. but specific, its declaring a function before definging it.  it allows us to use the function before the function has been declared... the only thing is that it will return an error that it is not yet defined. but its pretty neat, i think.. once i put it into practice. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: 
    User stories are informal explanations of a software abilities from the end users perspective. It's purpose is to add clarity and depth of understanding for developers to see things from the user end of the scope and to reach a desired outcome. By having user stories, developers can better gage the experience of the users.  

2. Spread operator:
    Spread operators are represented by three dots ... placed before an iterable object, such as an array to unpack its contents, for example to add into another array. for example;

    const odd = [ 1, 3, 5 ]

    const combined = [...odd, 2, 4, 6]

    console.log(combined)
    output: [ 1, 3, 5, 2, 4, 6 ]

3. React:

4. React props:

5. DOM events:
