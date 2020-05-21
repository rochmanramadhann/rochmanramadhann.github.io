const klik = document.querySelector('.btnMenu');
const navBar = document.querySelector('.nav-bar');

klik.addEventListener ('click', () => {
    navBar.classList.toggle('active');
})

const navLinks = document.getElementsByClassName('nav-link')

let closeNav = function () {
    navBar.classList.remove('active')
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', closeNav, false)
}
