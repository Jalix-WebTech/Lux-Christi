"use strict";

/*
=========================================
Lux Christi Theme Controller
=========================================
*/

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

/* Load saved theme */

if(savedTheme){

    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );

}

/* Update icon */

function updateThemeIcon(){

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    themeButton.innerHTML =
        currentTheme === "dark"
            ? '<i data-lucide="sun"></i>'
            : '<i data-lucide="moon"></i>';

    lucide.createIcons();

}

/* Initialize */

updateThemeIcon();

/* Toggle */

themeButton.addEventListener("click",()=>{

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const nextTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    document.documentElement.setAttribute(
        "data-theme",
        nextTheme
    );

    localStorage.setItem(
        "theme",
        nextTheme
    );

    updateThemeIcon();

});