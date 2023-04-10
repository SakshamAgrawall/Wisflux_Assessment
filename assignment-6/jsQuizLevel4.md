# Javascript quiz  (Basic Level - 1) :

### Theory Questions

Q1. What are anonymous functions in javascript ?

ans. anonymous function in javaScript is a function which have no name they are only associated with function ().

example

```javaScript

function (){
   console.log("hello")
}
```

Q2. Explain strict comparison and Abstract comparison in javascript?

ans. strict comparison and abstract comparison in js is the operators can be used to check the equality of two operands

```javaScript
let a=5;
b="5";

a==b//true its not check data type  abstract comparison- in this is convert the string into number before comparison
a===b// false its check data type strict comparison- in this it data type of operands

```

Q3. Difference b/w arrow functions and regular functions ?

ans. arrow functions and regular functions work are as similar but the difference is the syntax

```javaScript
// arrow function
const greet=()=>{

}
//normal function 
function greet(){

}

```

Q4. What is Hoisting in Javascript ?

ans. hoisting in javascript is the process where interpreter appears to move the calling function variable or classes to the top of there scope

Q5. JavaScript is a garbage collected programming language. explain how ?

ans. Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

Q6. Explain Shallow copy vs Deep copy in javaScript ?

ans.
* When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. 
* In simple words, a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. 
* Means both the old and new reference variable point to the same object in memory. 


Q7. What is Object freeze.

ans. object Freeze is a method to freezing an object prevents extension and make existing properties non- writable and non-configurable.