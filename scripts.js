//placement of pixels
const canvas = document.querySelector('.canvas');

const userNum = 2;

let totalPixels = userNum * userNum;
console.log(totalPixels);

let flexBasisCalc = (userNum * 100) / totalPixels;
console.log(flexBasisCalc);

for (let i = 0; i < totalPixels; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.style.flexBasis = `${flexBasisCalc}%`;
  pixel.style.opacity = 0;
  pixel.addEventListener('mouseover', setOpacity);
  canvas.appendChild(pixel);
}

//increase opacity event function
function setOpacity() {
  let currentOpacity = +this.style.opacity;

  if (currentOpacity < 1) {
    currentOpacity += 0.1;
    this.style.opacity = currentOpacity;
  }
}
