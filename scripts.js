const canvas = document.querySelector('.canvas');



const userNum = 2;

let totalPixels = userNum * userNum;
console.log(totalPixels);

for (let i = 0; i < totalPixels; i++) {
    console.log(i);
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
}