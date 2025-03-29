const words = ["Data", "Product", "Sports"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    let displayText = currentWord.substring(0, j);
    document.getElementById("changing-text").textContent = displayText;

    if (!isDeleting && j <= words[i].length) {
        j++;
        setTimeout(typeEffect, 100); // Typing speed
    } else if (isDeleting && j >= 0) {
        j--;
        setTimeout(typeEffect, 50); // Erasing speed
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            i = (i + 1) % words.length; // Switch to the next word
            currentWord = words[i];
        }
        setTimeout(typeEffect, 500);
    }
}

// Start the effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    currentWord = words[i];
    typeEffect();
});

function showSummary(type) {
    let profSummary = document.getElementById("professional-summary");
    let persSummary = document.getElementById("personal-summary");
    let buttons = document.querySelectorAll(".tab-btn");

    if (type === "professional") {
        profSummary.style.display = "block";
        persSummary.style.display = "none";
    } else {
        profSummary.style.display = "none";
        persSummary.style.display = "block";
    }

    // Update active tab
    buttons.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.tab-btn[onclick="showSummary('${type}')"]`).classList.add("active");
}
