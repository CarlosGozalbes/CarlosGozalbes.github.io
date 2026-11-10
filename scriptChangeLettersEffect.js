(() => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const email = document.getElementById("myEmailEffect");
  let interval;

  email.addEventListener("mouseover", () => {
    const original = email.dataset.value;
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      email.innerText = email.innerText
        .split("")
        .map((_, index) => index < iteration
          ? original[index]
          : letters[Math.floor(Math.random() * letters.length)])
        .join("");

      if (iteration >= original.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  });
})();
