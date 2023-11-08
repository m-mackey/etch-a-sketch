//placement of pixels
const canvas = document.querySelector('.canvas');

let defaultPixels = 2;

function placePixels(pixelPerSide) {
  let totalPixels = pixelPerSide * pixelPerSide;

  let flexBasisCalc = (pixelPerSide * 100) / totalPixels;

  for (let i = 0; i < totalPixels; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.flexBasis = `${flexBasisCalc}%`;
    pixel.style.opacity = 0;
    pixel.addEventListener('mouseover', setOpacity);
    pixel.addEventListener('mouseover', randomizeColor);
    canvas.appendChild(pixel);
  }
}

//remove the randomcolor from the event listener and only add it when that class is 
//toggled to on button click. will need to make sure it gets removed with the toggle. 
//and to see what this will do to the color if changed while drawing. 

placePixels(defaultPixels);

//prompt user for canvas size
const sizeBtn = document.querySelector('.size-btn');
sizeBtn.addEventListener('click', setCanvasSize);

function setCanvasSize() {
  let canvasSize = Number(prompt('Enter pixels per side, up to 100'));

  while (canvasSize === 0 || isNaN(canvasSize) || canvasSize > 100) {
    canvasSize = Number(prompt('Please only enter numbers up to 100'));
  }

  canvas.innerHTML = '';

  placePixels(canvasSize);
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

//reset
const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', resetOpacity);

function resetOpacity () {
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach((pixel) => pixel.style.opacity = 0);
}