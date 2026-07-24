let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

function showSlide() {
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  showSlide();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlide();
}

// Auto slide every 3 seconds
setInterval(() => { moveSlide(1); }, 2000);
