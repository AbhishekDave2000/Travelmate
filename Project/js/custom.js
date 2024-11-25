function onScrollAnimations() {
    const element = document.getElementById('navbar-list');
    const navbar = document.getElementById('navigation-bar');
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {
        navbar.setAttribute("style", "background-color: #0e3959 !important;");
        if ( window.getComputedStyle(element).display != 'none' && window.getComputedStyle(menu).display != 'none') {
            navbar.setAttribute("style", "min-height: 100% !important; background-color: #0e3959 !important;");   
        } else if (window.getComputedStyle(element).display != 'none' && window.getComputedStyle(menu).display == 'none') {
            navbar.setAttribute("style", "background-color: #0e3959 !important;");
        }
        document.getElementById('dropdown-content-background').setAttribute("style", "background-color: #0e3959 !important;");
        document.getElementById('auth-dropdown-content-background').setAttribute("style", "background-color: #0e3959 !important;");
    } else {
        navbar.setAttribute("style", "background-color: '';");
        document.getElementById('dropdown-content-background').setAttribute("style", "background-color: '';");
        document.getElementById('auth-dropdown-content-background').setAttribute("style", "background-color: '';");
    }

    if (window.scrollY > 400) {
        document.getElementById('top-scroll-button').setAttribute("style", "display: block;")
    } else {
        document.getElementById('top-scroll-button').setAttribute("style", "display: '';")
    }
}

function toggleMenu() {
    const element = document.getElementById('navbar-list');

    if ( window.getComputedStyle(element).display === 'none') {
        document.getElementById("navigation-bar").setAttribute("style", "min-height: 100% !important; background-color: #0e3959;");
        element.setAttribute('style', 'display: flex !important; flex-direction: column;');
        document.getElementById("humberger-second-div").style.display = 'none';
        document.getElementById("humberger-first-div").setAttribute('style', 'transform: rotate(45deg); position: relative; top: 6px; transition: transform 0.2s ease-in;');
        document.getElementById("humberger-third-div").setAttribute('style', 'transform: rotate(-45deg); position: relative; top: -4px; transition: transform 0.2s ease-in;');
    } else {
        element.setAttribute('style', 'display: "";');
        document.getElementById("humberger-second-div").style.display = '';
        document.getElementById("navigation-bar").setAttribute("style", 'min-height: 40px; background-color: #0e3959;');
        document.getElementById("humberger-first-div").setAttribute('style', 'transform: rotate(0deg); position: ""; top: "";  transition: transform 0.2s ease-out;');
        document.getElementById("humberger-third-div").setAttribute('style', 'transform: rotate(0deg); position: ""; bottom: "";  transition: transform 0.2s ease-out;');
    }
}
