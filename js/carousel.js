document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const autoplayBtn = document.querySelector(".autoplay-btn");

  let autoplayInterval;

  function prevSlide() {
    carousel.prepend(carousel.lastElementChild);
  }

  function nextSlide() {
    carousel.appendChild(carousel.firstElementChild);
  }

  function toggleAutoplay() {
    if (!autoplayInterval) {
      autoplayInterval = setInterval(nextSlide, 5000);
      autoplayBtn.classList.add("active");
    } else {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
      autoplayBtn.classList.remove("active");
    }
  }
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  autoplayBtn.addEventListener("click", toggleAutoplay);
  toggleAutoplay();
});
