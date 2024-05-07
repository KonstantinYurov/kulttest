// Появление иконок шеринга START

document.addEventListener("DOMContentLoaded", function () {
  const shareSocialIcons = document.querySelector(".share-social-icons");
  const iconForward = document.querySelector(".icon-forward");
  const iconClose = document.querySelectorAll(".icon-close"); // Добавляем выбор иконки close
  const body = document.body;

  if (shareSocialIcons) {
    iconForward.addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращает всплытие события, чтобы оно не дошло до body
      shareSocialIcons.classList.toggle("share-social-icons--active");
    });

    shareSocialIcons.addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращает всплытие события, чтобы оно не дошло до body
    });

    body.addEventListener("click", function () {
      shareSocialIcons.classList.remove("share-social-icons--active");
    });
    if (iconClose) {
      iconClose.forEach(function (iconClose) {
        iconClose.addEventListener("click", function () {
          if (window.innerWidth < 768) {
            shareSocialIcons.classList.remove("share-social-icons--active");
          }
        });
      });
    }
  }
});

// Появление иконок шеринга END

// Копирования ссылки для шеринга START

document.addEventListener("DOMContentLoaded", () => {
  const copyLink = document.querySelector(".copy-link");

  if (copyLink) {
    copyLink.addEventListener("click", () => {
      copyLink.classList.add("copy-link--done");

      const currentLink = window.location.href;

      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = currentLink;
      tempInput.select();

      document.execCommand("copy");

      document.body.removeChild(tempInput);
    });
  }
});

// Копирования ссылки для шеринга END

// Скрывать цифру лайка, если она равно нулю START

document.addEventListener("DOMContentLoaded", () => {
  const favouriteIcon = document.querySelectorAll(".favourite__icon");

  if (favouriteIcon.length === 0) {
    return;
  }

  const numElements = document.querySelectorAll(".favourite__num");

  numElements.forEach(updateNumElement);

  favouriteIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      const numElement = icon.parentNode.querySelector(".favourite__num");
      updateNumElement(numElement);
    });
  });

  function updateNumElement(numElement) {
    const numValue = parseInt(numElement.textContent);

    numElement.parentElement.classList.toggle(
      "favourite__num--hidden",
      numValue === 0
    );
  }
});

// Скрывать цифру лайка, если она равно нулю END

// Добавление лайка по клику и его удаление по повторному клику START

const likeIcons = document.querySelectorAll(".favourite__icon");

if (likeIcons) {
  likeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const textElement = document.querySelector(".favourite__num");
      let currentCount = parseInt(textElement.textContent);

      if (icon.classList.contains("favourite__num--active")) {
        icon.classList.remove("favourite__num--active");
        textElement.textContent = currentCount - 1;
      } else {
        icon.classList.add("favourite__num--active");
        textElement.textContent = currentCount + 1;
      }
    });
  });
}

// Добавление лайка по клику и его удаление по повторному клику END
