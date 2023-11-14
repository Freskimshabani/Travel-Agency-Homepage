const imgArr = [
    "1.webp",
    "2.webp",
    "3.webp"
]

const placesHeader = document.getElementById('Places--Slideshow');
const placesBackdropImage = document.getElementById('Places--Backdrop__Image');

placesHeader.style.backgroundImage = `url('./img/${imgArr[0]}')`;

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');

button1.onclick = () => {
    placesHeader.style.backgroundImage = `url('./img/${imgArr[0]}')`;
    button1.classList.toggle('selected--slideshow--button');
}

button2.onclick = () => {
    placesHeader.style.backgroundImage = `url('./img/${imgArr[1]}')`;
    button2.classList.toggle('selected--slideshow--button');
}

button3.onclick = () => {
    placesHeader.style.backgroundImage = `url('./img/${imgArr[2]}')`;
    button3.classList.toggle('selected--slideshow--button');
}

let imgCounter = 0;
