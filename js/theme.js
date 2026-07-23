"use strict";

/*
=========================================
Lux Christi Theme Controller
=========================================
*/

const themeButton = document.getElementById("theme-toggle");
const themeLabel = themeButton?.querySelector(".theme-toggle-label");
const themeIcon = themeButton?.querySelector("i[data-lucide]");
const themeStatusDot = themeButton?.querySelector(".theme-status-dot");
const savedTheme = localStorage.getItem("theme");

/* Load saved theme */

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

/* Update icon and label */

function updateThemeButton() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const isDarkMode = currentTheme === "dark";

    if (!themeButton) {
        return;
    }

    if (themeLabel) {
        themeLabel.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }

    if (themeIcon) {
        themeIcon.setAttribute("data-lucide", isDarkMode ? "moon" : "sun");
    }

    if (themeStatusDot) {
        themeStatusDot.classList.toggle("active", isDarkMode);
    }

    themeButton.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );
    themeButton.setAttribute(
        "title",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );

    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons();
    }
}

/* Initialize */

updateThemeButton();

/* Toggle */

themeButton?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeButton();
});