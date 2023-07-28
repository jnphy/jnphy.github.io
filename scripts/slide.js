document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carouselInner = document.querySelector(".carousel-inner");
  let slideIndex = 0;

  prevButton.addEventListener("click", () => {
    slideIndex = Math.max(slideIndex - 1, 0);
    updateSlidePosition();
  });

  nextButton.addEventListener("click", () => {
    slideIndex = Math.min(slideIndex + 1, carouselInner.children.length - 1);
    updateSlidePosition();
  });

  function updateSlidePosition() {
    const slideWidth = carouselInner.offsetWidth;
    const offset = -slideIndex * slideWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
  }
});
