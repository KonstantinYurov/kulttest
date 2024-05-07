// Фиксирование прокрутки окна при появлении поп-ап окон и мобильного выпадаюшего меню START

document.addEventListener("DOMContentLoaded", () => {
  const fixScroll = () => {
    const loginActive = document.querySelector(".popup--login-active");
    const menuActive = document.querySelector(".menu__items--active");
    const body = document.body;

    body.style.overflow = loginActive || menuActive ? "hidden" : "auto";
	
  };

  fixScroll();

  const observer = new MutationObserver(fixScroll);
  observer.observe(document.body, { attributes: true, subtree: true });

  window.addEventListener("resize", fixScroll);
});

// Фиксирование прокрутки окна при появлении поп-ап окон и мобильного выпадаюшего меню END

// Появление кнопки "назад" START

window.addEventListener('scroll', () => {
    const backLink = document.querySelector('.back-link');

    if (backLink) {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 100) {
            backLink.classList.add('back-link--active');
        } else {
            backLink.classList.remove('back-link--active');
        }
    }
});

// Появление кнопки "назад" END
