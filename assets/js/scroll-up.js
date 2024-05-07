// Прокрутка "наверх" START

document.addEventListener('DOMContentLoaded', () => {
    const popupWrapper = document.querySelector(".scroll-up");

    if (popupWrapper) {
        popupWrapper.addEventListener('click', () => {
            scrollToTop();
        });

        function scrollToTop() {
            const scrollDuration = 500;
            const scrollStep = -window.scrollY / (scrollDuration / 15);

            const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        }
    }
});

// Прокрутка "наверх" END

// Реализация появления всплывающего окна для прокрутки страницы наверх START

document.addEventListener("DOMContentLoaded", () => {
	const popup = document.querySelector(".scroll-up");
  
	if (popup) {
	  window.addEventListener("scroll", function () {
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const currentScroll = window.scrollY;
		const scrollPercentage =
		  (currentScroll / (documentHeight - windowHeight)) * 100;
  
		if (scrollPercentage >= 80) {
		  popup.classList.add("scroll-up--active");
		} else {
		  popup.classList.remove("scroll-up--active");
		}
	  });
	}
  });
  
  // Реализация появления всплывающего окна с оповещением о копировании ссылки END