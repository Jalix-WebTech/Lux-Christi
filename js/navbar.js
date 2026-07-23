const menuButton = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

let _menuScrollPos = 0;

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuButton.classList.toggle("active");

    const expanded = menuButton.classList.contains("active");

    menuButton.setAttribute("aria-expanded", expanded);

    // Only lock page scroll on small screens where the mobile menu is used
    if (window.matchMedia && window.matchMedia('(max-width:850px)').matches) {
        if (expanded) {
            _menuScrollPos = window.scrollY || window.pageYOffset || 0;
            document.body.style.top = `-${_menuScrollPos}px`;
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
            document.body.style.top = '';
            window.scrollTo(0, _menuScrollPos);
        }
    }

});