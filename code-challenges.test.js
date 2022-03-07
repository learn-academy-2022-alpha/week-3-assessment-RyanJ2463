// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("fib", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// got 2 failed

// b) Create the function that makes the test pass.

// create a function named fib 
// takes in a number in parameter
// create an array [1,1]
// create a for loop
// use Fibonacci sequence to get correct output 
// return the function into an array

function fib(number) {
  const fibs = [1, 1];
  for (let i = 2; i < number; i++) {
      fibs.push(fibs[i - 1] + fibs[i - 2]);
  }
  return fibs;
}




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("sortOdd", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(sortOdd(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(sortOdd(fullArr2)).toEqual([-823, 7, 23])
    })
  })

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// create a function names sortOdd
// the function will take in an array 
// filter through the array finding odd numbers 
// sort through array of odd numbers 
// return array

const sortOdd = (array) => {
    let result = 
    array.filter(value => {
       return typeof value === "number" && value % 2 !== 0
       
    })

    return result.sort((a,b) => a-b)
}
    
   



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("addArray", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(addArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(addArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(addArray(numbersToAdd3)).toEqual([])
    })
  })

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// // b) Create the function that makes the test pass.

// create a function named addArray 
// function will take in an array
// set a variable equal to 0
// map through the array adding the array together


const addArray = (array) => {
    let sum = 0
    return array.map(value => sum += value)
}