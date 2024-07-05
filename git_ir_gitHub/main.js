const buttons = document.querySelectorAll(".button");
const closeButtons = document.querySelectorAll(".close-button");
const initialView = document.querySelector(".initial-view");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const tabId = button.getAttribute("data-tab");
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
            initialView.style.display = "none";
            tabContent.style.display = "block";
        }
    });
});

closeButtons.forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        const tabContent = closeButton.closest(".tab-content");
        tabContent.style.display = "none";
        initialView.style.display = "flex";
    });
});
