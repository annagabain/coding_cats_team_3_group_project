const hamburgerMenu = document.getElementById("menu_hamburger")
const mobileNavContainer = document.getElementById("mobile-nav-container")
const close = document.getElementById("close")
const openHours = document.getElementById("open_hours")

// Open the mobile menu when the hamburger icon is tapped on
hamburgerMenu.addEventListener("click", toggleNav)

// Close the mobile menu when the X button is tapped on
close.addEventListener("click", toggleNav)

// When you click Open hours the menu closes 
openHours.addEventListener("click", toggleNav)

//Shared function
 function toggleNav () {
    mobileNavContainer.classList.toggle("open")
    console.log('hi')
}




