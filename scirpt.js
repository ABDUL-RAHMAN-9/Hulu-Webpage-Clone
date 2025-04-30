const modal = document.querySelector(".modal");
const loginButton = document.querySelector(".login-btn");
const closeButton = document.querySelector(".close");

const openModal = () => {
    modal.style.display = "block";
};

const closeModal = () => {
    modal.style.display = "none";
};

const outsideClick = e => {
    if (e.target == modal) {
        closeModal();
    }
};

loginButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Tabs toggle with initial active tab setup
document.addEventListener("DOMContentLoaded", () => {
    // Set the first tab as active by default (or customize which tab to activate)
    const firstButton = document.querySelector(".tab-button");
    const firstContent = document.querySelector(".tab-content");

    if (firstButton && firstContent) {
        firstButton.classList.add("active");
        firstContent.classList.add("active");
    }

    // Add click event listeners to handle tab toggling
    document.querySelectorAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            document
                .querySelectorAll(".tab-button")
                .forEach(btn => btn.classList.remove("active"));

            // Add active class to the clicked button
            button.classList.add("active");

            // Hide all tab contents
            document
                .querySelectorAll(".tab-content")
                .forEach(content => content.classList.remove("active"));

            // Show the corresponding tab content
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });
});

// Implement tab-based background image switching

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const liveSportsDiv = document.querySelector(".live-sports");

    // Define background images for each tab
    const backgrounds = {
        "live-sports":
            "url('https://cnbl-cdn.bamgrid.com/assets/3ab6ce86baaf4225b072c58fa9497ec949c0c9e284b3958ecda1429b7f3744f9/original')",
        "breaking-news":
            "url('https://cnbl-cdn.bamgrid.com/assets/3ae51fbf415e6f39001cb8ce4220f7d72bcc6cfe06f4390ada0f2c539a61499d/original ')",
        "biggest-events":
            "url('https://cnbl-cdn.bamgrid.com/assets/7ddcdaab76b1bb9c72195532c7ebc10d5d0c3450fc1b2d3675eb7341c12f7e91/original')"
    };
    // Set initial background for default active tab
    const defaultTabId = "live-sports"; // Customize your default tab ID
    liveSportsDiv.style.backgroundImage = backgrounds[defaultTabId];

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            button.classList.add("active");

            // Update the background image of the live-sports div
            const tabId = button.getAttribute("data-tab");
            liveSportsDiv.style.backgroundImage = backgrounds[tabId];
        });
    });
});
