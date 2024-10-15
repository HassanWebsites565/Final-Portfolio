const slides = document.querySelectorAll(".car1");
let count = 0;

const goPrev = () => {
    count--;
    if (count < 0) {
        count = slides.length - 1; // Wrap around to the last slide
    }
    slideImg();
}

const goNext = () => {
    count++;
    if (count >= slides.length) {
        count = 0; // Wrap around to the first slide
    }
    slideImg();
}

const slideImg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`; // Adjusted to 100% for full slide width
        }
    )
}

document.addEventListener('DOMContentLoaded', () => {
    slideImg(); // Initialize the first slide
});

// Open Menu 
const men = document.querySelector(".nav-list");
const close = document.querySelector(".nav1");
const bar = document.querySelector(".nav2");

function toggle() {
    if (close.style.display === 'none') {
        close.style.display = 'block';
        bar.style.display = 'none';
    } else {
        close.style.display = 'none';
        bar.style.display = 'block';
    }
}

const menu = () => {
    men.style.transform = 'translateX(220px)'; // Show the menu
    toggle();
}

const closeIt = () => {
    men.style.transform = 'translateX(-220px)'; // Hide the menu
    toggle();
}


