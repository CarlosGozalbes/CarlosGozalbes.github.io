const aboutSection = document.querySelector(".about-go-section");
const navBar = document.getElementById("nav");
const goAboutFirst = document.getElementById("go-about-first");
const goAboutSecond = document.getElementById("go-about-second");
const cruzAbout = document.getElementById("cruz-about");
const workTitulo = document.getElementById("workTitulo");
const iconoFlechaWork = document.getElementById("iconoFlechaWork");
const saludoContacto = document.getElementById("saludoContacto");
const goWorkFromIndex = document.getElementById("goWorkFromIndex");
const navLogoSection = document.getElementById("nav-logo-section");
const navLinkSection = document.getElementById("nav-link-section");
const navSocialSection = document.getElementById("nav-social-section");
const navContactSection = document.getElementById("nav-contact-section");

aboutSection.addEventListener("mouseenter", () => {
    navBar.style.backgroundColor = "white";
    navBar.style.borderColor = "black";
  document.body.style.backgroundColor = "white";
  aboutSection.style.borderColor = "black";
    saludoContacto.style.borderColor = "black";
     navLogoSection.style.borderColor = "black";
     goWorkFromIndex.style.borderColor = "black";
      navLinkSection.style.borderColor = "black";
       navSocialSection.style.borderColor = "black";
        navContactSection.style.borderColor = "black";
  goAboutFirst.style.color = "#9d84ff";
  goAboutSecond.style.color = "#9d84ff";
  cruzAbout.style.color = "#9d84ff";
  workTitulo.style.color = "#9d84ff";
  iconoFlechaWork.style.color = "#9d84ff";
  
});

aboutSection.addEventListener("mouseleave", () => {
    navBar.style.backgroundColor = "#060B19";
  document.body.style.backgroundColor = "";
  navBar.style.borderColor = "";
  goWorkFromIndex.style.borderColor = "";
  document.body.style.color = "";
  navLinkSection.style.borderColor = "";
  navSocialSection.style.borderColor = "";
  navContactSection.style.borderColor = "";
  navLogoSection.style.borderColor = "";
  goAboutFirst.style.color = "";
  goAboutSecond.style.color = "";
  cruzAbout.style.color = "";
  saludoContacto.style.borderColor = "";
  workTitulo.style.color = "";
  aboutSection.style.borderColor = "";
  iconoFlechaWork.style.color = "";
});
