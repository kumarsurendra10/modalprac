const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};


// reversed string;

const str1 = "surendra";
function reverseString(str2){
    const reversedString = str2.split("").reverse().join("");

    return reversedString ;
}
console.log(reverseString(str1));



// mulitplication of a number

function multiplication(number){
  for(let i=1; i<10; i++){
      let result = number*i;

      console.log(`${number}*${i}=${result}`);
  }
}
multiplication(2);




//summation of a numbers;
function sumOfNumbers(number) { 
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(10)); // Expected output: 55



// find comkon element;
function findCommonElement(arr1, arr2){
  let commonElement =[];

  for(let i=0; i<arr1.length; i++){
      if(arr2.includes(arr1[i])){
          if(!commonElement.includes(arr1[i])){
              
          
          commonElement.push(arr1[i]);
          }
      }
  }
  commonElement.sort((a, b)=>a-b);
  return  commonElement;
}
const arr1 = [1,2,3,4,5,6];
const arr2 = [1,3,8,9,4,5];
const ans = findCommonElement(arr1, arr2);
console.log(ans);



//assignement


function greet(name) { 
  console.log(`Hello ${name}! How are you doing today?`);
}
greet("Pranay");


//getsquare 
function getSquare(number) {
  const square = number ** 2;  
  return square;
}
const result = getSquare(5);
console.log(result); // Output: 25


// count letters
function countLetters(str) { 
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];   
    if (counts[char]) {      
      counts[char]++;
    } else {    
      counts[char] = 1;
    }
  } 
  return counts;
}
// Example usage:
const letterCounts = countLetters("WebDevelopment");
console.log(letterCounts); // Output: { W: 1, e: 4, b: 1, D: 1, v: 1, l: 1, o: 1, p: 1, m: 1, n: 1, t: 1 }




// create counter;
function createCounter() {
  let count = 0;  
  return function () {
    count++; // increment count by 1
    return count; // return the new value of count
  };
}
const counter = createCounter();
console.log(counter()); // prints 1
console.log(counter()); // prints 2
console.log(counter()); // prints 3




//even and odd numbers;
function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {  
    if (numbers[i] % 2 === 0) {
      sum += numbers[i]; 
    }
  }
  return sum; 
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); // prints 12



//sum of an arrays;



// Function to calculate the sum of all numbers in an array
function sumArrayNumbers(arr) {
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) {
    // Loop through the array
    sum += arr[i]; 
  }
  return sum;
}

// Test cases
const numbers1 = [1, 2, 3, 4, 5];
console.log(sumArrayNumbers(numbers1)); // Output: 15

const numbers2 = [10, 20, 30];
console.log(sumArrayNumbers(numbers2)); // Output: 60

const numbers3 = [-1, 2, -3, 4, -5];
console.log(sumArrayNumbers(numbers3)); // Output: -3





// filter a strings;
function filterLongStrings(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {   
    if (arr[i].length > 5) {     
      filteredArr.push(arr[i]);
    }
  }  
  return filteredArr;
}

// Test cases
console.log(filterLongStrings(["apple", "banana", "kiwi", "watermelon", "orange"])); // ['watermelon', 'orange']
console.log(filterLongStrings(["cat", "dog", "elephant", "giraffe"])); // ['elephant', 'giraffe']
console.log(filterLongStrings(["car", "bike", "bus", "train"])); // []

console.log(filterLongStrings(["123456", "123", "123456789"])); // ["123456", "123456789"]

console.log(filterLongStrings([])); // []




// inportant questions


// Function to change the text of a button on click event
function changeButtonText() {
  // Select the button element
  const button = document.querySelector("button");

  // Check if the button is currently showing "Click Me!"
  if (button.textContent === "Click Me!") {
    // If it is, change the text to "Clicked!"
    button.textContent = "Clicked!";
  } else {
    // If it is not, change the text back to "Click Me!"
    button.textContent = "Click Me!";
  }
}

// Add a click event listener to the button
const button = document.querySelector("button");
button.addEventListener("click", changeButtonText);



// This function takes an element ID and a class name as arguments
// It adds the class name to the element on mouseover event
function addClassOnMouseOver(elementID, className) {
  // Get the element by ID
  const element = document.getElementById(elementID);

  // Add an event listener to the element for the "mouseover" event
  element.addEventListener("mouseover", () => {
    // Add the class name to the element
    element.classList.add(className);
  });
}

// Test case
// Add the "active" class to the "button" element on mouseover
addClassOnMouseOver("button", "active");



// Function to remove a CSS class from an element on scroll event
function removeClassOnScroll(element, className) {
  // Add scroll event listener to the window object
  window.addEventListener("scroll", function() {
    // Check if the element has the specified class name
    if (element.classList.contains(className)) {
      // Remove the class name from the element
      element.classList.remove(className);
    }
  });
}

// Test case 1
const box1 = document.querySelector("#box1");
removeClassOnScroll(box1, "highlight");

// Test case 2
const box2 = document.querySelector("#box2");
removeClassOnScroll(box2, "active");




function toggleDivDisplayOnClick(divId) {
  const div = document.getElementById(divId);
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

// Test case
// HTML:
// <button onclick="toggleDivDisplayOnClick('myDiv')">Toggle Div Display</button>
// <div id="myDiv" style="display:none;">This is the content of the div</div>



function validateForm(event) {
  event.preventDefault(); // prevent the form from submitting
  const form = event.target; // get the form element
  let isValid = true; // initialize a flag for validation
  
  // loop through the form elements
  for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];
    const value = input.value.trim(); // trim the input value
    
    // if input is required and empty
    if (input.hasAttribute("required") && value === "") {
      isValid = false; // mark validation as failed
      input.classList.add("invalid"); // add invalid class to input
    } else {
      input.classList.remove("invalid"); // remove invalid class from input
    }
  }
  
  // show success or error message based on validation
  const message = document.getElementById("message");
  if (isValid) {
    message.classList.remove("error");
    message.innerText = "Form submitted successfully!";
  } else {
    message.classList.add("error");
    message.innerText = "Please fill out all required fields.";
  }
}

// Test case: attach the validateForm function to the submit event of a form element
const form = document.getElementById("myForm");
form.addEventListener("submit", validateForm);



function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

// Example usage
fetchData('https://jsonplaceholder.typicode.com/todos/1', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
// The Fetch API is built into modern web browsers and allows developers to make HTTP requests to servers using JavaScript.





// Write a function to read a file using the Node.js File System module and handle the contents with a callback.
const fs = require('fs');

function readFileContents(filepath, callback) {
  // Use the readFile method of the fs module to read the contents of the file
  fs.readFile(filepath, 'utf8', (error, contents) => {
    if (error) {
      // If an error occurs, call the callback with the error as the first argument
      callback(error);
    } else {
      // If the file is read successfully, call the callback with the contents as the second argument
      callback(null, contents);
    }
  });
}

// Example usage
readFileContents('example.txt', (error, contents) => {
  if (error) {
    console.error(error);
  } else {
    console.log(contents);
  }
});





// Write a function to load an image asynchronously and handle the load event with a callback.

function loadImageAsync(url, callback) {
  const img = new Image();

  // Set up event listener for when the image has loaded
  img.addEventListener('load', () => {
    callback(null, img);
  });

  // Set up event listener for when there's an error loading the image
  img.addEventListener('error', () => {
    callback(new Error(`Failed to load image at ${url}`));
  });

  // Start loading the image
  img.src = url;
}

// Example usage:
loadImageAsync('https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', (error, img) => {
  if (error) {
    console.error(error);
  } else {
    // Add the loaded image to the page
    document.body.appendChild(img);
  }
});


// Write a function to simulate an asynchronous delay using a callback.
// Solution
function simulateDelay(delay, callback) {
  setTimeout(callback, delay);
}

// Example usage:
console.log("Before delay");

simulateDelay(2000, () => {
  console.log("After delay");
});

console.log("Function finished executing");

// Output:
// Before delay
// Function finished executing
// After delay (after a 2 second delay)



// Write a function to download a file asynchronously and handle the progress and completion events with callbacks.
function downloadFile(url, progressCallback, completionCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob"; // Specify the response type as blob

  xhr.addEventListener("progress", (event) => {
    // Calculate the progress percentage and invoke the progress callback
    const progress = Math.round((event.loaded / event.total) * 100);
    progressCallback(progress);
  });

  xhr.addEventListener("load", () => {
    // Invoke the completion callback with the downloaded blob object
    completionCallback(xhr.response);
  });

  xhr.send();
}

// Test case
const url = "https://dot-batch-project-assets.vercel.app/devdetective-images.zip";
downloadFile(
  url,
  (progress) => console.log(`Download progress: ${progress}%`), // progress callback logs the progress percentage
  (blob) => console.log(`File downloaded. Blob size: ${blob.size} bytes`) // completion callback logs the size of the downloaded blob
);



// - The `downloadFile` function takes three arguments: `url`, `progressCallback`, and `completionCallback`.
// - It creates an instance of the XMLHttpRequest object to make the download request to the given `url`.
// - The `responseType` property of the XHR object is set to `"blob"` to indicate that the response should be treated as a binary object.
// - Two event listeners are added to the XHR object:
//     - The `progress` event listener is triggered as the download progresses. It calculates the progress percentage and invokes the `progressCallback` with the progress percentage.
//     - The `load` event listener is triggered when the download is complete. It invokes the `completionCallback` with the downloaded blob object.
// - Finally, the XHR object sends the download request to the server.

// Note: This function uses the XMLHttpRequest object to download the file asynchronously. It can be used in a browser environment, but not in a Node.js environment. In Node.js, the `fs` module should be used to read and write files asynchronously.






// Write a function that returns a promise which resolves after a specified number of milliseconds.
function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

// Test case 1
console.log("start");
delay(2000).then(() => {
  console.log("2 seconds elapsed");
});
console.log("end");

// Output:
// start
// end
// 2 seconds elapsed


// Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds.
// Solution
/**
 * Returns a promise which rejects with a specified error message after a specified number of milliseconds.
 */
function rejectWithDelay(errorMessage, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(errorMessage));
    }, delay);
  });
}

// Example usage:
rejectWithDelay("Oops! Something went wrong.", 2000).catch((error) => {
  console.error(error.message); // Output: Oops! Something went wrong.
});


// Write a function that returns a promise which resolves with an array of random numbers after a specified number of milliseconds.
Solution
function getRandomNumbersArray(length, delay) {
  return new Promise((resolve, reject) => {
    // Using setTimeout to simulate delay
    setTimeout(() => {
      // Creating an array of random numbers of specified length
      const numbersArray = Array.from({ length }, () => Math.floor(Math.random() * 100));
      // Resolving the promise with the generated array
      resolve(numbersArray);
    }, delay);
  });
}





// Testing the function with delay of 2 seconds and array length of 5
getRandomNumbersArray(5, 2000)
  .then((result) => {
    console.log(result); // Output: [23, 74, 48, 52, 63]
  })
  .catch((error) => {
    console.error(error);
  });

// Testing the function with delay of 3 seconds and array length of 10
getRandomNumbersArray(10, 3000)
  .then((result) => {
    console.log(result); // Output: [79, 5, 64, 46, 2, 55, 33, 71, 28, 38]
  })
  .catch((error) => {
    console.error(error);
  });


  // Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.
// Solution
// Function that uses async/await to make an API call and returns a promise with the response
async function fetchData(url) {
  try {
    const response = await fetch(url); // Wait for the response from the server
    const data = await response.json(); // Wait for the JSON data from the response
    return data; // Return the data as a resolved promise
  } catch (error) {
    return Promise.reject(error); // Return the error as a rejected promise
  }
}

// Example usage of the function
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => {
    console.log(data); // Log the fetched data
  })
  .catch((error) => {
    console.error(error); // Log any errors
  });



  // Write a function that uses async/await to make multiple API calls in parallel and returns a promise with an array of responses.
// Solution
// This function makes multiple API calls in parallel using async/await
async function fetchMultipleData(urls) {
  try {
    // Use Promise.all to make multiple API calls and wait for all of them to resolve
    const responses = await Promise.all(urls.map(url => fetch(url)));

    // Extract the response data from each API call and return as an array
    const data = await Promise.all(responses.map(response => response.json()));
    return data;
  } catch (error) {
    // Return the error message if any of the API calls fail
    return error.message;
  }
}

// Example usage
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/comments/1",
  "https://jsonplaceholder.typicode.com/albums/1"
];

// Call the function with the URLs and log the array of responses
fetchMultipleData(urls)
  .then(responses => console.log(responses))
  .catch(error => console.log(error));





  // Write a function that throws an error if the parameter is not a number, and handles the error with a custom error message.
// Solution
// Function that throws an error if the parameter is not a number
function validateNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject(new Error("Invalid input. Expected a number."));
    } else {
      resolve(num);
    }
  });
}

// Testing the function
validateNumber(5)
  .then(num => console.log(num)) // Output: 5
  .catch(err => console.error(err.message));

validateNumber("not a number")
  .then(num => console.log(num))
  .catch(err => console.error(err.message)); // Output: "Invalid input. Expected a number.




  // Write a try-catch block that catches any errors a function throws and logs them to the console with a custom error message.
Solution
function myFunction(num) {
  if (typeof num !== "number") {
    throw new Error("Parameter must be a number");
  }

  return num * 2;
}

try {
  const result = myFunction("hello");
  console.log(result);
} catch (error) {
  console.log("Error caught:", error.message);
}




// Write a function that uses console.assert to check whether a variable is equal to a certain value, and throws an error if the assertion fails.
// Solution
function assertEqual(actual, expected, message) {
  console.assert(actual === expected, message || `Expected ${expected}, but got ${actual}`);
}


// Explanation:
// This function takes in three parameters:

// - `actual`: the actual value that needs to be checked.
// - `expected`: the expected value that `actual` should be equal to.
// - `message` (optional): a custom error message to be displayed if the assertion fails.

// The function uses the `console.assert()` method to check whether `actual` is equal to `expected`. If the assertion fails, it throws an error with a default error message that includes the expected and actual values. If a custom error message is provided, that message will be displayed instead of the default error message.

// Note:

// - This function can be used for simple value equality assertions in JavaScript.
// - It is recommended to use a testing framework like Mocha or Jest for more complex tests.




// Write a function that logs an error message to the console if a certain condition is not met.
Solution
function logErrorIf(condition, message) {
  if (!condition) {
    console.error(message);
  }
}



// Write a function that catches and handles any errors thrown by a Promise, and logs a custom error message to the console.
Solution
function handlePromiseError(promise, errorMessage) {
  promise.catch(error => {
    console.error(errorMessage, error);
  });
}





// ## Topics covered:

// - **Regular expressions**
// - **ES6 and modern JavaScript features**



// Write a function that takes a string as input and returns true if the string contains only alphabets, and false otherwise.
// Solution
function containsOnlyAlphabets(str) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(str);
}

console.log(containsOnlyAlphabets("abcDEF")); // true
console.log(containsOnlyAlphabets("123")); // false
console.log(containsOnlyAlphabets("a b c")); // false
console.log(containsOnlyAlphabets("")); // false




// Write a function that takes a string as input and returns true if the string contains at least one digit, false otherwise.
// Solution
function containsDigit(str) {
  const regex = /\d/;
  return regex.test(str);
}

console.log(containsDigit("abc123")); // true
console.log(containsDigit("abc")); // false
console.log(containsDigit("123")); // true
console.log(containsDigit("a1b2c3")); // true



// Write a function that takes a string as input and replaces all occurrences of "cat" with "dog".
// Solution
function replaceCatWithDog(str) {
  const regex = /cat/g;
  return str.replace(regex, "dog");
}

console.log(replaceCatWithDog("The cat sat on the mat.")); // The dog sat on the mat.
console.log(replaceCatWithDog("The cats sat on the mats.")); // The dogs sat on the mats.
console.log(replaceCatWithDog("Caterpillar")); // Dogerpillar
console.log(replaceCatWithDog("Cats are cool.")); // Dogs are cool.



// Write a function that takes a string as input and returns the number of vowels in the string.
// Solution
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Pranay")); // expected output: 2
console.log(countVowels("hello")); // expected output: 2
console.log(countVowels("abcdefghijklmnopqrstuvwxyz")); // expected output: 5
console.log(countVowels("aeiou")); // expected output: 5
console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // expected output: 0
console.log(countVowels("The quick brown fox jumps over the lazy dog")); // expected output: 11
console.log(countVowels("12345")); // expected output: 0



// Write a function that takes a string as input and returns true if the string is a valid email address, false otherwise.
// Solution
function isValidEmail(email) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

console.log(isValidEmail("pgupta@duck.com")); // false
console.log(isValidEmail("example@example.com")); // true
console.log(isValidEmail("example.example@example.com")); // true
console.log(isValidEmail("example-example@example.com")); // true
console.log(isValidEmail("example@example.co.in")); // true
console.log(isValidEmail("example123@example.com")); // true
console.log(isValidEmail("example@.com")); // false
console.log(isValidEmail("example@example.")); // false
console.log(isValidEmail("example@examplecom")); // false
console.log(isValidEmail("example@examplecom.")); // false
console.log(isValidEmail("example@.com.")); // false




// Write a function that uses arrow function syntax to add two numbers and return the result.
// Solution
const add = (a, b) => {
  // arrow function syntax used to define the function
  // takes two parameters a and b and returns their sum
  return a + b;
}

// testing the function
console.log(add(3, 4)); // expected output: 7
console.log(add(5, -2)); // expected output: 3




// Write a function that takes an array of numbers and uses the spread operator to find the maximum value.
// Solution
const findMax = (numbers) => {
  // spread operator used to pass the array elements as arguments to Math.max()
  return Math.max(...numbers);
}

// testing the function
console.log(findMax([5, 3, 9, 1, 7])); // expected output: 9
console.log(findMax([0, -2, 10, 4])); // expected output: 10





// Write a function that takes an array of strings and returns a new array with all the strings in uppercase.
// Solution
const toUpperCase = (strings) => {
  // use Array.map() to create a new array with the uppercase versions of the strings
  return strings.map((string) => string.toUpperCase());
};

// testing the function
console.log(toUpperCase(["Pranay", "Gupta"])); // expected output: ['PRANAY', 'GUPTA']
console.log(toUpperCase(["hello", "world"])); // expected output: ['HELLO', 'WORLD']
console.log(toUpperCase(["abc", "DEF", "gHi"])); // expected output: ['ABC', 'DEF', 'GHI']



// Write a function that takes an object and uses destructuring to extract the values of its properties and return them as an array.
// Solution
const objectToArray = (obj) => {
  // use object destructuring to extract the values of the object properties
  const { prop1, prop2, prop3 } = obj;

  // return an array with the extracted values
  return [prop1, prop2, prop3];
};

// testing the function
console.log(objectToArray({ prop1: 5, prop2: "hello", prop3: true })); // expected output: [5, 'hello', true]
console.log(objectToArray({ prop1: "abc", prop2: 123, prop3: null })); // expected output: ['abc', 123, null]




// Write a function that takes a string and uses template literals to create a new string with the input string and a variable inserted into it.
// Solution
const createString = (inputString, variable) => {
  // use template literals to create a new string with the input string and variable
  return `${inputString} ${variable}`;
};

// testing the function
console.log(createString("My name is", "Pranay")); // expected output: 'My name is Pranay'
console.log(createString("Hello", "world!")); // expected output: 'Hello world!'
console.log(createString("The value is:", 123)); // expected output: 'The value is: 123'




