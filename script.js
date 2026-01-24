document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menuLinks = document.querySelector(".menu-links");

  if (!hamburgerIcon || !menuLinks) return;

  hamburgerIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
  });

  // Close menu when any link is clicked
  const links = menuLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.classList.remove("open");
      hamburgerIcon.classList.remove("open");
    });
  });
});
