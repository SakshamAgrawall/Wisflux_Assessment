# JavaScript Quiz Basic Level 2

### Theory

Q1. Why do we use functions in JavaScript?

ans. function are use in javascript is for a block of code written one time and calling it use it again an again function has ability to use it again.

Q2. What is Function Invocation?

ans. calling a function is call invocation like we made a sum function for adding two integer so we write a logic one time and call it again and again it call as sum();

Q3. Does a function behave like an object in Javascript? Prove it by an example.

ans. yes function behave like an object we all know in javascript all are objects

   ```js
   function greet() {
       console.log("Hello")
   }
   
   console.log(greet) // Output :- [Function: sayHello]
   
   greet.number = 2
   
   console.log(greet) // Output :- [Function: sayHello] { number: 10 }
   ```

Q4. What are Events in Javascript

ans. events are just happening something in the DOM due to javascript for example click, hover.

Q5. What is a string?
ans. string are the primitive data type which is store the zero or more value in a quotes.

```js
let name = "saksham"
console.log(typeof name) // output:- string
```


Q6. What is an array? Is it static or dynamic in Javascript?

ans. An array is an collection of data,store data in big bracket. JavaScript arrays are dynamic in nature. because there is no pre-defined length of the array.



Q7. Difference between Map and Set?

ans. A set is collection of dataset that needs to be composed of unique values and map is collection hashed key value pair data.


Q8. Difference between Array and Map?

ans. An array is a collection of elements of the same data type. and map is a hashed structure of key value pairs.


Q9. What are array methods? List a few names?

ans. Array methods are different functions that we can call on an array to perform different tasks like sorting the array or iterating through the items of the array.
   * methods of an array are `map()`, `filter()`, `reduce()`, `sort()`, `reverse()`, etc.

Q10. In how many ways can we traverse through an array in Javascript?
ans.
   ```js
   const arr = [1, 2, 3, 4, 5, 6]
   
   for(let i = 0; i < arr.length; i ++) {
       console.log(arr[i])
   }
   
   for (let num of arr) {
       console.log(num)
   }
   
   for (let num in arr) {
       console.log(num)
   }
   
   arr.forEach((item) => console.log(item))
   
   arr.map(num => console.log(num))
   ```
