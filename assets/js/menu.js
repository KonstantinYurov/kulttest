// Появление меню в мобильной версии START

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelector(".menu__items");
  const iconClose = document.querySelectorAll(".icon-close");
  const burgerContainer = document.querySelector(".burger__container");

  if (menuItems) {
    burgerContainer.addEventListener("click", function () {
      menuItems.classList.add("menu__items--active");
    });

    iconClose.forEach(function (iconClose) {
      iconClose.addEventListener("click", function () {
        menuItems.classList.remove("menu__items--active");
      });
    });
  }
});

// Появление меню в мобильной версии  END

// Выпадающие списки подменю в мобильной версии START

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelector(".menu__items");
  const menuItem = document.querySelectorAll(".menu__items li");

  if (menuItems) {
    menuItem.forEach(function (menuItemDrop) {
      menuItemDrop.addEventListener("click", function () {
        if (menuItemDrop.classList.contains("menu-item--active")) {
          menuItemDrop.classList.remove("menu-item--active");
        } else {
          menuItemDrop.classList.add("menu-item--active");
        }
      });
    });
  }
});

// Выпадающие списки подменю в мобильной версии EN
