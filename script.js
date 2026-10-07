const hamburgerMenu = document.getElementById("menu_hamburger");
const mobileNavContainer = document.getElementById("mobile-nav-container");
const close = document.getElementById("close");
const openHours = document.getElementById("open_hours");

// Open the mobile menu when the hamburger icon is tapped on
hamburgerMenu.addEventListener("click", toggleNav);

// Close the mobile menu when the X button is tapped on
close.addEventListener("click", toggleNav);

// When you click Open hours the menu closes
openHours.addEventListener("click", toggleNav);

//Shared function
function toggleNav() {
  mobileNavContainer.classList.toggle("open");
}

const backToTopBtn = document.getElementById("backToTop");
// 1. Show or hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// 2. Smooth scroll back to top on click
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
