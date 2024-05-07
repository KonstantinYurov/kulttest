// Работа выпадающего меню с подкатегорими в разделах сайта START

document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.querySelector(".sidebar__container");

  if (sidebarContainer) {
    const spanElements = sidebarContainer.querySelectorAll("span");

    spanElements.forEach((spanElement) => {
      spanElement.addEventListener("click", () => {
        const liElement = spanElement.parentNode;

        if (liElement && liElement.tagName === "LI") {
          liElement.classList.toggle("filter-item--active");
        }
      });
    });
  }
});

// Работа выпадающего меню с подкатегорими в разделах сайта END

// Появление меню с подкатегориями в разделах сайта START

document.addEventListener("DOMContentLoaded", function () {
  const moreOption = document.querySelector(".sidebar--category");
  const iconClose = document.querySelectorAll(".icon-close");
  const moreVert = document.querySelector(".icon-more-option");

  if (moreOption) {
    moreVert.addEventListener("click", function () {
      moreOption.classList.add("more-option--active");
    });

    iconClose.forEach(function (iconClose) {
      iconClose.addEventListener("click", function () {
        moreOption.classList.remove("more-option--active");
      });
    });

    const secondLevelItems = document.querySelectorAll(
      ".sidebar--category li ul li"
    );
    secondLevelItems.forEach(function (item) {
      item.addEventListener("click", function () {
        moreOption.classList.remove("more-option--active");
      });
    });
  }
});

// Появление меню с подкатегорими в разделах сайта END

// Подсветка выбранного пунка меню с подкатегорими в разделах сайта START

const sidebarContainer = document.querySelector(".sidebar__container");

if (sidebarContainer) {
  const moreOptionItems =
    sidebarContainer.querySelectorAll("ul > li > ul > li");

  moreOptionItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains(
        "sidebar__container--item-active"
      );

      moreOptionItems.forEach((item) =>
        item.classList.remove("sidebar__container--item-active")
      );

      if (!isActive) {
        item.classList.add("sidebar__container--item-active");
      }
    });
  });
}

// Подсветка выбранного пунка меню с подкатегорими в разделах сайта END

// Появление кнопки фильтрации в категориях START

window.addEventListener("scroll", () => {
  const moreOption = document.querySelector(".more-option");

  if (moreOption) {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
      moreOption.classList.add("more-option--show");
    } else {
      moreOption.classList.remove("more-option--show");
    }
  }
});

// Появление кнопки фильтрации в категориях END
