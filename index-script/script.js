let menuMobile = document.querySelector('#menu-mobile')

function toggleMenu() {
    let nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

menuMobile.addEventListener('click', toggleMenu)