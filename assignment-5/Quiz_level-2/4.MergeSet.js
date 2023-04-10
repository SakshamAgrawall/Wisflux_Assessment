// Declare two sets
const a = new Set([1,2,3]);
const b = new Set([4,5,6]);

b.forEach(a.add, a);
console.log(a);