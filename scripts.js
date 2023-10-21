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
    canvas.appendChild(pixel);
}