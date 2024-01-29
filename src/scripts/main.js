document.addEventListener('DOMContentLoaded', function() {
    const itens = document.querySelectorAll('[data-list-item]');

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    const hamburger = document.querySelector('.header__hamburger');
    const links = document.querySelector('.header__links');

    hamburger.addEventListener('click', function() {
        links.classList.toggle('show-menu');
    });

    const menuItems = document.querySelectorAll('.header__links__item a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            links.classList.remove('show-menu');
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.header__hamburger') && !event.target.matches('.header__links') && !event.target.closest('.header__links')) {
            links.classList.remove('show-menu');
        }
    });

    window.addEventListener('scroll', function() {
        const positionAtt = window.scrollY;

        if (positionAtt < heightHero) {
            hiddenLogoHeader();
        } else {
            showLogoHeader();
        }
    });

    for (let i = 0; i < itens.length; i++) {
        itens[i].addEventListener('click', openCloseBio);
    }
})

function hiddenLogoHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function showLogoHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}

function openCloseBio(element) {
    const classe = 'cast__list__item--is-open';
    const elementFather = element.target.parentNode;

    elementFather.classList.toggle(classe);
}
