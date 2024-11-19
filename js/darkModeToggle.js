//darkModeToggle.js

const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonMobile = document.querySelector("#toggle-mobile");

/* make sure always remove dark mode in each recharging */
htmlElement.classList.remove("dark")

/* Dark mode toggle feature */
const toggleDarkMode = () => {
    //add o remove the dark class
    htmlElement.classList.toggle("dark");
};

/* Assign click events only if buttons exist */
if (toggleButton) {
    toggleButton.addEventListener("click", toggleDarkMode);
}
if (toggleButtonMobile) {
    toggleButtonMobile.addEventListener("click", toggleDarkMode);
}

/* Assign click events */
toggleButton?.addEventListener("click", toggleDarkMode);
toggleButtonMobile?.addEventListener("click", toggleDarkMode);

export {toggleDarkMode};