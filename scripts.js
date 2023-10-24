//placement of pixels
const canvas = document.querySelector('.canvas');

const userNum = 2;

let totalPixels = userNum * userNum;

let flexBasisCalc = (userNum * 100) / totalPixels;

for (let i = 0; i < totalPixels; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.style.flexBasis = `${flexBasisCalc}%`;
  pixel.style.opacity = 0;
  pixel.addEventListener('mouseover', setOpacity);
  pixel.addEventListener('mouseover', randomizeColor);
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

//randomize pixel color event
function randomizeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.style.background = `rgb(${red} ${blue} ${green})`;
}
