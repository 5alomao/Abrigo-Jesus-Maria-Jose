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

$(document).ready(function () {
    $('.product-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$('#customPrev').on('click', function () {
    $('.product-carousel').slick('slickPrev');
});

$('#customNext').on('click', function () {
    $('.product-carousel').slick('slickNext');
});
