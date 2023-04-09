//forEach
   const arr1 = [1, 2, 3, 4, 5]
   
   arr1.forEach(item => console.log(item))

//map
   const arr2 = [1, 2, 3, 4, 5]
   
   console.log(arr2.map(num => num * 2))

// filter
   const arr3 = [1, 2, 3, 4, 5]
   
   console.log(arr3.filter(num => ((num % 2) == 0)))

// reduce
   const arr4 = [1, 2, 3, 4, 5]
   
   console.log(arr4.reduce((prev, initial) => prev+initial, 0))
   

// includes
   const arr5 = [1, 2, 3, 4, 5]
   
   console.log(arr5.includes(2))
 
//some
   const arr6 = [1, 2, 3, 4, 5]
   console.log(arr6.some(element => element % 2 === 0))
//  every
   const arr = [1, 2, 3, 4, 5]  
   console.log(arr.every(element => element % 2 === 0))

