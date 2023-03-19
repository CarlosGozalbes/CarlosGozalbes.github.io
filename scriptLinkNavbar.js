// Get the current page's filename
const currentPage = window.location.pathname.split("/").pop();
console.log(currentPage)
// Get all the navigation links
const navLinks = document.querySelectorAll("nav a");
console.log(navLinks)
// Loop through each navigation link
navLinks.forEach((link) => {
  // Get the linked page's filename
  const linkedPage = link.getAttribute("href").split("/").pop();
  
  // If the current page matches the linked page, add the 'active' class to the link
  if (currentPage === linkedPage) {
    link.classList.add("active");
  }
});
