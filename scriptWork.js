(() => {
  const slides = document.querySelectorAll("main > article");
  let activeIndex = 0;

  function moveSlide(direction) {
    const nextIndex = (activeIndex + direction + slides.length) % slides.length;
    const nextSlide = slides[nextIndex];
    const movingLeft = direction === -1;

    slides[activeIndex].dataset.status = movingLeft ? "after" : "before";
    nextSlide.dataset.status = movingLeft
      ? "becoming-active-from-before"
      : "becoming-active-from-after";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }

  for (const slide of slides) {
    slide.querySelector(".article-nav-button-left").addEventListener("click", () => moveSlide(-1));
    slide.querySelector(".article-nav-button-right").addEventListener("click", () => moveSlide(1));
  }
})();
