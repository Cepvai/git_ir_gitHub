const buttons = document.querySelectorAll(".button");
const closeButtons = document.querySelectorAll(".close-button");
const initialView = document.querySelector(".initial-view");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab");
        const tabContent = document.getElementById(tabId);
        initialView.style.display = "none";
        tabContent.style.display = "block";
    });
});

closeButtons.forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        const tabContent = closeButton.parentElement;
        tabContent.style.display = "none";
        initialView.style.display = "flex";
    });
});
