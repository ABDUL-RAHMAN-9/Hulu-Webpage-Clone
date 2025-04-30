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

// tabs toggle
document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        document
            .querySelectorAll(".tab-button")
            .forEach(btn => btn.classList.remove("active"));

        // Add active class to clicked button
        button.classList.add("active");

        // Hide all tab contents
        document
            .querySelectorAll(".tab-content")
            .forEach(content => content.classList.remove("active"));

        // Show corresponding tab content
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});
