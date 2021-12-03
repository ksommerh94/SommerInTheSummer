const carouselSlides = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

//buttons
const prevBtn = document.querySelector('PrevBtn')
const nextBtn = document.querySelector('NextBtn')

//counter to know in which image are we
let counter = 1
const size = carouselImages[0].clientWidth;

//
carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)'
