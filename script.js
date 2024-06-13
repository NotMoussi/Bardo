// Parallax effect
document.addEventListener('scroll', function() {
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  let scrollPosition = window.pageYOffset;

  parallaxLayers.forEach(layer => {
    let speed = layer.dataset.speed || 1;
    let y = (scrollPosition * speed) / 100;
    layer.style.transform = `translate(-50%, -${y}%)`;
  });
});

// Swiper initialization
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// ScrollReveal.js initialization
ScrollReveal().reveal('.container', {
  delay: 300,
  duration: 800,
  origin: 'bottom',
  distance: '50px',
  Reset: true,
  viewFactor: 0.2,
});
