//lengths of the triangle
const a = 5;
const b = 6;
const c = 7;

//semi-perimeter of the triangle
const d = (a + b + c) / 2;

// Calculate the area of the triangle using Heron's formula
const areaOfTriangle = Math.sqrt(d * (d - a) * (d - b) * (d - c));

console.log(`The area of the triangle is ${areaOfTriangle}.`);