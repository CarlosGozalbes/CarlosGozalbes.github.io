(() => {
  const eyes = document.querySelectorAll(".eye");

  document.body.addEventListener("mousemove", (event) => {
    for (const eye of eyes) {
      const bounds = eye.getBoundingClientRect();
      const x = bounds.left + eye.clientWidth / 2;
      const y = bounds.top + eye.clientHeight / 2;
      const angle = Math.atan2(event.pageX - x, event.pageY - y);
      eye.style.transform = `rotate(${angle * (-180 / Math.PI)}deg)`;
    }
  });
})();
