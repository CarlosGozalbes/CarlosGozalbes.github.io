(() => {
  const aboutSection = document.querySelector(".about-go-section");
  aboutSection.addEventListener("mouseenter", () => {
    document.body.classList.add("about-hover");
  });
  aboutSection.addEventListener("mouseleave", () => {
    document.body.classList.remove("about-hover");
  });
})();
