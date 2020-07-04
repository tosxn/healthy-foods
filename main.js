// DOM MANIPULATION FOR IMAGES
const slideshow = document.getElementById('slideshow');
const slides = slideshow.getElementsByTagName('img');
let index = 0;

const nextSlide = ()=> {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

const prevSlide = ()=> {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// DOM MANIPULATION FOR TEXT GROUPS

const slideshowText = document.getElementById('slideshowText');
const slidesText = slideshowText.getElementsByTagName('div');
let i = 0;

const nextSlideText = ()=> {
    slidesText[i].classList.remove('active');
    i = (i + 1) % slidesText.length;
    slidesText[i].classList.add('active');
}

const prevSlideText = ()=> {
    slidesText[i].classList.remove('active');
    i = (i - 1 + slidesText.length) % slidesText.length;
    slidesText[i].classList.add('active');
}