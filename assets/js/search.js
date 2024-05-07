// Появление блока с поиском START

document.addEventListener("DOMContentLoaded", function () {
  const iconSearch = document.querySelector(".icon-search");
  const iconClose = document.querySelectorAll(".icon-close");
  const searchBlock = document.querySelector(".search__block");

  if (searchBlock) {
    iconSearch.addEventListener("click", function () {
      searchBlock.classList.add("search__block--active");
    });

    iconClose.forEach(function (iconClose) {
      iconClose.addEventListener("click", function () {
        searchBlock.classList.remove("search__block--active");
      });
    });
  }
});

// Появление блока с поиском END

// Смена цвета границы формы, если инпут в фокусе START

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelectorAll(".search__bar");

  searchBar.forEach((searchBar) => {
    const searchInput = searchBar.querySelector("input");

    if (searchBar) {
      document.addEventListener("click", (event) => {
        const isSearchInputClicked = event.target === searchInput;
        searchBar.classList.toggle("search__bar--focus", isSearchInputClicked);
      });
    }
  });
});

// Смена цвета границы формы, если инпут в фокусе END

// Появление в поисковой строке кнопки «Найти» и кнопки «Отмена» START

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelectorAll(".search__bar");

  searchBar.forEach((searchBar) => {
    searchBar.addEventListener("input", () => {
      const inputValue = searchBar.querySelector("input").value.trim();

      if (searchBar) {
        if (inputValue.length > 0) {
          searchBar.classList.add("search__bar--active");
        } else {
          searchBar.classList.remove("search__bar--active");
        }
      }
    });
  });
});

// Появление в поисковой строке кнопки «Найти» и кнопки «Отмена» END

// Очиска инпута по клику на текст или иконку отмены START

document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelectorAll(".search__bar");

  searchBar.forEach(searchBar => {
    if (searchBar) {
      const searchInput = searchBar.querySelector(".search__input");
      const textCancel = searchBar.querySelector(".text-cancel");
      const iconCancel = searchBar.querySelector(".icon-cancel");

      // Функция для очистки input и удаления класса search__bar--active
      function clearSearchInput() {
        searchInput.value = "";
        searchBar.classList.remove("search__bar--active");
      }

      // Обработчики событий для клика по кнопкам text-cancel и icon-cancel
      textCancel.addEventListener("click", clearSearchInput);
      iconCancel.addEventListener("click", clearSearchInput);
    }
  });
});


// Очиска инпута по клику на текст и иконку отмены END
