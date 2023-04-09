const a = 10;//change as how long sequence need
let n1 = 0, n2 = 1, nextNum;
for (let i = 0; i < a; i++){
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}