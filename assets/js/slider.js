// Реализация работы слайдера START

document.addEventListener("DOMContentLoaded", () => {
	const sliders = document.querySelectorAll(".slider");
  
	sliders.forEach((slider) => {
	  const slides = slider.querySelectorAll(".slide");
  
	  if (slides.length > 0) {
		let maxMultiplier;
		let slideWidth;
  
		if (window.innerWidth > 1200) {
		  maxMultiplier = Math.ceil(slides.length - 4);
		  slideWidth = `calc(267px + (448 - 267) * ((100vw - 1201px) / (1920 - 1201)))`;
		} else if (window.innerWidth >= 993 && window.innerWidth <= 1200) {
		  maxMultiplier = Math.ceil(slides.length - 3);
		  slideWidth = `calc(287px + (356 - 287) * ((100vw - 993px) / (1200 - 993)))`;
		} else if (window.innerWidth >= 320 && window.innerWidth <= 992) {
		  maxMultiplier = Math.ceil(slides.length - 1);
		  slideWidth = `calc(307px + (756 - 307) * ((100vw - 320px) / (768 - 320)))`;
		}
  
		let multiplier = 0;
  
		const updateSliderTransform = () => {
		  const sliderContainer = slider.querySelector(
			".slider__container-field"
		  );
		  const newMultiplier = Math.min(Math.max(multiplier, 0), maxMultiplier);
		  const translation = `calc(${slideWidth} * -${newMultiplier})`;
		  sliderContainer.style.transform = `translateX(${translation})`;
		};
  
		const updateSliderNavClasses = () => {
		  const prevButton = slider.querySelector(".slider-nav--prev");
		  const nextButton = slider.querySelector(".slider-nav--next");
  
		  prevButton.classList.toggle("slider-nav--prev-active", multiplier > 0);
		  nextButton.classList.toggle(
			"slider-nav--next-hidden",
			multiplier === maxMultiplier
		  );
		};
  
		const onSliderNextClick = () => {
		  if (multiplier < maxMultiplier) {
			multiplier += 1;
			updateSliderTransform();
			updateSliderNavClasses();
		  }
		};
  
		const onSliderPrevClick = () => {
		  if (multiplier > 0) {
			multiplier -= 1;
			updateSliderTransform();
			updateSliderNavClasses();
		  }
		};
  
		const nextButton = slider.querySelector(".slider-nav--next");
		nextButton.addEventListener("click", onSliderNextClick);
  
		const prevButton = slider.querySelector(".slider-nav--prev");
		prevButton.addEventListener("click", onSliderPrevClick);
  
		updateSliderNavClasses();
	  }
	});
  });