var typed = new Typed(".text-animation",
    {
        strings: [
            "Web Developer",
            "WordPress Developer",
            "Designer"

        ],
        typeSpeed: 120,
        backSpeed: 90,
        loop:true
        
    }
)

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.querySelector('.navbar');

// Function to reset the menu for desktop view
function handleResize() {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active'); // Close the mobile menu
        closeIcon.style.display = 'none';  // Hide the close icon
        menuIcon.style.display = 'none';   // Hide the burger menu icon on desktop
    } else {
        menuIcon.style.display = 'block';  // Show the burger menu on mobile
    }
}

// Event listeners for opening and closing the menu
menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});

// Add the resize event listener
window.addEventListener('resize', handleResize);

// Call the function once when the script loads to set the initial state
handleResize();
