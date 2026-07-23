const menuButton = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuButton.classList.toggle("active");

    const expanded = menuButton.classList.contains("active");

    menuButton.setAttribute("aria-expanded", expanded);

});