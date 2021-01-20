"use strict";

(() => {
  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".burger");
  const menuItems = menu.querySelectorAll(".menu__link");

  const changeBurger = () => {
    let expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !expanded);
  };

  const toggleMenu = () => {
    changeBurger();
    burger.classList.toggle("burger--open");
    menu.classList.toggle("menu--close");
  };

  const onMenuItemClick = () => {
    if (!menu.classList.contains("menu--close")) {
      toggleMenu();
    }
  };

  menu.classList.remove("menu--no-js");
  menu.classList.toggle("menu--close");

  burger.addEventListener("click", () => {
    toggleMenu();
  });

  for (const menuItem of menuItems) {
    menuItem.addEventListener("click", onMenuItemClick);
  }
})();
