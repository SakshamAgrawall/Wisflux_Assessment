function largestInteger(a, b, c){
 let maxValue = 0;
  if (a > b){
    maxValue = a;
  } 
  else{
    maxValue = b; }
  if (c > maxValue) {
    maxValue = c;
  }
  return maxValue;
}
console.log(`Largest integer is: ${largestInteger(-100,300,50)}`);