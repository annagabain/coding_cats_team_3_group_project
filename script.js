const hamburgermenu = document.getElementById("menu_hamburger")
const mobileNavContainer = document.getElementById("mobile-nav-container")
const close = document.getElementById("close")
const openhours = document.getElementById("openhours")

// Open the mobile menu when the hamburger icon is tapped on
hamburgermenu.addEventListener("click", function() {
        mobileNavContainer.style.display = 'flex'
        hamburgermenu.style.display = 'none'
    }
)
// Close the mobile menu when the X button is tapped on
close.addEventListener("click", function() {
        mobileNavContainer.style.display = 'none'
        hamburgermenu.style.display = 'flex'
    }
)

openhours.addEventListener("click", function() {
        mobileNavContainer.style.display = 'none'
        hamburgermenu.style.display = 'flex'
    }
)
