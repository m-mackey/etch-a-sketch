const canvas = document.querySelector('.canvas');



const userNum = 2;

let end = userNum * userNum;
console.log(end);

for (let i = 0; i < end; i++) {
    console.log(i);
    const pixel = document.createElement('div');
    canvas.appendChild(pixel);
}