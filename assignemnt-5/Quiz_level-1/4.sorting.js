// // For Ascending
const num = [3,2,139,32,30];
for (i = 0; i < num.length; i++) {
  for (j = 0; j < num.length; j++) {
    if (num[j] >= num[j + 1]) {
      let temp = num[j];
      num[j] = num[j + 1];
      num[j + 1] = temp;
    }
  }
}
console.log(num);



// For Descending
const num1 = [3,2,139,32,30];
for (i=0; i<num1.length; i++) {
  for (j=0; j<num1.length; j++) {
    if (num1[j] <= num1[j + 1]) {
      let temp1 = num1[j];
      num1[j] = num1[j + 1];
      num1[j + 1] = temp1;
    }
  }
}
console.log(num1);
