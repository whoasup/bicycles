'use strict';

(function () {
  var menu = document.querySelector('.menu');
  var burger = document.querySelector('.burger');
  var menuItems = menu.querySelectorAll('.menu__link');

  var changeBurger = function () {
    var expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
  };

  var toggleMenu = function () {
    changeBurger();
    burger.classList.toggle('burger--open');
    menu.classList.toggle('menu--close');
  };

  var onMenuItemClick = function () {
    if (!menu.classList.contains('menu--close')) {
      toggleMenu();
    }
  };

  menu.classList.remove('menu--no-js');
  menu.classList.toggle('menu--close');

  burger.addEventListener('click', function () {
    toggleMenu();
  });

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', onMenuItemClick);
  }
})();
