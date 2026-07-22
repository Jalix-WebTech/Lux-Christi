"use strict";

/*
=================================================
Lux Christi Mobile Navigation Controller

This file makes the mobile menu work.
When the menu button is tapped, the navigation
links are shown or hidden. It also updates
an accessibility attribute so screen readers
understand whether the menu is open.
=================================================
*/

// Find the menu button by its ID.
const menuToggle = document.getElementById("menuToggle");

// Find the navigation menu container.
const navMenu = document.getElementById("navMenu");

// Add a click listener only if the button exists.
menuToggle?.addEventListener("click", () => {
    // Toggle the 'active' class to show or hide the menu.
    navMenu.classList.toggle("active");

    // Determine whether the menu is open after the click.
    const isOpen = navMenu.classList.contains("active");

    // Update aria-expanded to improve accessibility.
    menuToggle.setAttribute("aria-expanded", isOpen);
});