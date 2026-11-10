(() => {
  const nav = document.querySelector("nav");
  const toggleButton = document.getElementById("nav-toggle-button");
  const toggleIcon = toggleButton.querySelector(".toggle-icon");

  toggleButton.addEventListener("click", () => {
    toggleIcon.classList.toggle("fa-bars");
    toggleIcon.classList.toggle("fa-times");
    toggleIcon.classList.toggle("rotate");
    nav.dataset.transitionable = "true";
    nav.dataset.toggled = String(nav.dataset.toggled !== "true");
  });

  window.matchMedia("(max-width: 800px)").addEventListener("change", () => {
    nav.dataset.transitionable = "false";
    nav.dataset.toggled = "false";
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  for (const link of nav.querySelectorAll("a")) {
    const linkedPage = link.getAttribute("href").split("/").pop();
    if (currentPage === linkedPage) {
      link.classList.add("active");
    }
  }
})();
