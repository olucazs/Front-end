let index = 0;

const pai = document.getElementById("pai");
const slides = document.querySelectorAll(".slide");

function trocarSlide() {
    index++;

    if(index >= slides.length){
        index = 0;
    }

    pai.style.transform = `translateX(-${index * 1150}px)`;
}

setInterval(trocarSlide, 3000);