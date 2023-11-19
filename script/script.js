const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

const navItems = document.querySelectorAll('.nav-menu .nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    });
});