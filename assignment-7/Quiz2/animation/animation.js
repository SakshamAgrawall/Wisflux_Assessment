const animation = [
    { transform: 'rotate(360deg) scale(1)' }
];
  
  
const animationConfig = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards',
}

const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");


image1.animate(animation, animationConfig).finished
  .then(() => image2.animate(animation, animationConfig).finished)
  .then(() => image3.animate(animation, animationConfig).finished)
  .catch(error => console.log(`Error:  ${error}`));