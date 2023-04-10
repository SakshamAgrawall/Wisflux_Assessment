function randomInTwoRange(min1,max1,min2, max2) {
    const randomNumber = Math.random();
    if (randomNumber <0.5) {
      return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    } else {
      return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    }
}

const randomNumber = randomInTwoRange(-100, 0, 800, 900);
console.log(randomNumber); 