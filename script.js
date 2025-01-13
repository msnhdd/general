const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slide.length - 1;
    } else if (index >= slide.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Auto-slide every 5 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);