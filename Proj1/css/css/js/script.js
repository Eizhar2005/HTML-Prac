// Smooth fade-in animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// Input focus animation
const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
    searchInput.style.transform = "scale(1.05)";
    searchInput.style.transition = "0.3s";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.transform = "scale(1)";
});

// Simple placeholder interaction
searchInput.addEventListener("keydown", () => {
    searchInput.style.boxShadow = "0 10px 25px rgba(255,43,133,0.6)";
});

// Reset shadow when empty
searchInput.addEventListener("keyup", () => {
    if (searchInput.value === "") {
        searchInput.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    }
});