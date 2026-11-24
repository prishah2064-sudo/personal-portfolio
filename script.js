
// Welcome message
console.log("Welcome to Priyanka's Portfolio!");

// Show a message when the page loads
window.addEventListener("load", function() {
    console.log("Portfolio loaded successfully!");
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
