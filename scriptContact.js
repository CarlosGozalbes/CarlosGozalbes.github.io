(() => {
  emailjs.init("o1O4wgE-LvridzLpa");

  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-formulario");
  const spinner = document.getElementById("lds-dual-ring");
  const errorMessage = document.getElementById("error-message");
  const thankYouMessage = document.getElementById("thank-you-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitButton.style.display = "none";
    spinner.style.display = "inline-block";

    const fields = form.elements;
    emailjs.send("service_3r6uhsl", "template_8q13b58", {
      name: fields.nombre.value,
      email: fields.emailmensaje.value,
      message: fields.mensaje.value,
    }).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        form.style.display = "none";
        thankYouMessage.style.display = "flex";
      },
      (error) => {
        submitButton.style.display = "";
        spinner.style.display = "none";
        errorMessage.style.display = "";
        console.log("FAILED...", error);
      }
    );
  });
})();
