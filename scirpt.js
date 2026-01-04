const modal = document.querySelector(".modal");
const loginButton = document.querySelector(".login-btn");
const closeButton = document.querySelector(".close");

const openModal = () => {
    modal.style.display = "flex"; // Changed from block to flex for centering
};
const closeModal = () => {
    modal.style.display = "none";
};
const outsideClick = (e) => {
    if (e.target == modal) closeModal();
};

if (loginButton) loginButton.addEventListener("click", openModal);
if (closeButton) closeButton.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// --- AUTO-TOGGLE TABS LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    const liveSportsSection = document.querySelector(".live-sports");

    let currentIndex = 0;
    let tabInterval;

    // Backgrounds mapped to the 'data-tab' attribute in your HTML
    const backgrounds = {
        "live-sports":
            "url('https://cnbl-cdn.bamgrid.com/assets/3ab6ce86baaf4225b072c58fa9497ec949c0c9e284b3958ecda1429b7f3744f9/original')",
        "breaking-news":
            "url('https://cnbl-cdn.bamgrid.com/assets/3ae51fbf415e6f39001cb8ce4220f7d72bcc6cfe06f4390ada0f2c539a61499d/original')",
        "biggest-events":
            "url('https://cnbl-cdn.bamgrid.com/assets/7ddcdaab76b1bb9c72195532c7ebc10d5d0c3450fc1b2d3675eb7341c12f7e91/original')",
    };

    function switchTab(index) {
        const targetBtn = buttons[index];
        if (!targetBtn) return; // Safety check

        const tabId = targetBtn.getAttribute("data-tab");
        const targetContent = document.getElementById(tabId);

        // 1. Remove "active" from all buttons and contents
        buttons.forEach((btn) => btn.classList.remove("active"));
        contents.forEach((content) => content.classList.remove("active"));

        // 2. Add "active" to the selected elements
        // This triggers the CSS underline (.active::after) and visibility (.tab-content.active)
        targetBtn.classList.add("active");
        if (targetContent) targetContent.classList.add("active");

        // 3. Update the background image of the main section
        if (liveSportsSection && backgrounds[tabId]) {
            liveSportsSection.style.backgroundImage = backgrounds[tabId];
        }

        // 4. Update the index tracker
        currentIndex = index;
    }

    function startAutoSlide() {
        // Clear any existing interval to prevent double-speed sliding
        clearInterval(tabInterval);

        tabInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % buttons.length;
            switchTab(currentIndex);
        }, 3000); // 3 Seconds
    }

    // Manual Click Handler
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            switchTab(index);
            // Restart the timer so the user has a full 3 seconds to look at what they clicked
            startAutoSlide();
        });
    });

    // Initialize the first tab and start the timer
    switchTab(0);
    startAutoSlide();
});
