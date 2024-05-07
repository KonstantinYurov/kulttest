// Загрузка постов и работа кнопки "Ещё" START

document.addEventListener("DOMContentLoaded", () => {
  const postButtonContainer = document.querySelector(".button__container");
  const postButtonUpload = document.querySelector(".button--upload");

  if (postButtonContainer) {
    const postsElements = document.querySelectorAll(".post");

    let counter = 16;

    function scrollPosition() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      let remainingHeight;

      if (window.innerWidth >= 320 && window.innerWidth <= 768) {
        remainingHeight = documentHeight - (scrollTop + windowHeight) - 1000;
      } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
        remainingHeight = documentHeight - (scrollTop + windowHeight) - 600;
      } else {
        remainingHeight = documentHeight - (scrollTop + windowHeight) - 400;
      }

      if (remainingHeight <= 0) {
        for (
          let i = counter;
          i < counter + 16 && i < postsElements.length;
          i++
        ) {
          postsElements[i].classList.add("post--active");
        }

        counter += 16;
        if (counter >= postsElements.length) {
          counter = 16;
          postButtonUpload.classList.add("button--hidden");
        }
      }
    }

    window.addEventListener("scroll", scrollPosition);

    postButtonContainer.addEventListener("click", () => {
      for (let i = counter; i < counter + 16 && i < postsElements.length; i++) {
        postsElements[i].classList.add("post--active");
      }

      counter += 16;
      if (counter >= postsElements.length) {
        counter = 16;
        postButtonUpload.classList.add("button--hidden");
      }
    });
  }
});

// Загрузка постов и работа кнопки "Ещё" END
