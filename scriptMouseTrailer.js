const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 500,
    fill: "forwards",
  });
};

const getTrailerClass = (type) => {
  switch (type) {
    case "work":
      return trailer.innerHTML = "WORK";
    case "":
       return (trailer.innerHTML = "");
    default:
      return (trailer.innerHTML = "");
  }
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

  const icon = document.getElementById("trailer-icon");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (!interacting) {
    trailer.innerHTML = "";
  }
};
