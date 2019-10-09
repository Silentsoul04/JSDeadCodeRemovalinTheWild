import { FbsCarouselComponent } from '@forbes/fbs-carousel';

customElements.define('fbs-carousel', FbsCarouselComponent);
document.addEventListener('DOMContentLoaded', () => {
	const featuredSliderClass = '.featured__carousel';
	const slideBgImgClass = '.featured__slide-bg';
	const backgroundImageCurrentClass = 'featured__bg-image--current';
	const backgroundImageNextClass = 'featured__bg-image--next';
	const backgroundImageFadeClass = 'featured__bg-image--fade';
	const currentSlideClass = 'fbs-slider__slide--current';
	const featuredSlider = document.querySelector(featuredSliderClass);
	let currentFocusedSlide;

	if (!featuredSlider) {
		return;
	}

	featuredSlider.addEventListener('slideChangeStart', (e) => {
		currentFocusedSlide.domNode.classList.remove(currentSlideClass);
		currentFocusedSlide = e.detail.targetSlide;
		currentFocusedSlide.domNode.classList.add(currentSlideClass);

		const currentSliderBgImg = document.querySelector(`.${backgroundImageCurrentClass}`);
		const nextSliderBgImg = document.querySelector(`.${backgroundImageNextClass}`);
		const slideBgImg = currentFocusedSlide.domNode.querySelector(slideBgImgClass);
		nextSliderBgImg.style.backgroundImage = `url(${slideBgImg.dataset.bgImage})`;
		nextSliderBgImg.style.display = 'block';
		currentSliderBgImg.classList.add(backgroundImageFadeClass);
		setTimeout(() => {
			nextSliderBgImg.classList.remove(backgroundImageNextClass);
			nextSliderBgImg.classList.add(backgroundImageCurrentClass);
			currentSliderBgImg.style.display = 'none';
			currentSliderBgImg.classList.remove(backgroundImageFadeClass);
			currentSliderBgImg.classList.add(backgroundImageNextClass);
			currentSliderBgImg.classList.remove(backgroundImageCurrentClass);
		}, 500);
	});

	featuredSlider.addEventListener('sliderResized', (e) => {
		const { currentSlide } = e.detail;

		if (currentSlide !== currentFocusedSlide) {
			featuredSlider.nextSlide();
		}
	});

	function initSlider() {
		if (!featuredSlider.activeSlides.length) {
			return;
		}

		const fbsSliderControls = featuredSlider.querySelector('.fbs-slider__controls');
		fbsSliderControls.classList.add('fs-content');

		currentFocusedSlide = featuredSlider.currentSlide;

		const slideBgImg = currentFocusedSlide.domNode.querySelector(slideBgImgClass);
		const currentBgImage = document.querySelector(`.${backgroundImageCurrentClass}`);

		currentFocusedSlide.domNode.classList.add(currentSlideClass);
		currentBgImage.style.backgroundImage = `url(${slideBgImg.dataset.bgImage})`;

		// largest version of slider will have 5 active slides, in this case the first slide should be in the middle
		// so trigger a previous slide to move the first slide over one
		if (featuredSlider.activeSlides.length === 5) {
			featuredSlider.prevSlide();
		}
	}

	initSlider();
});



// WEBPACK FOOTER //
// ./src/assets/js/homepage/sliders-featured.js