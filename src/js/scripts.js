window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
			menuItem = document.querySelectorAll('.menu__item'),
			burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		menu.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			burger.classList.toggle('burger_active');
			menu.classList.toggle('menu_active');
		});
	});
});

// Инициализация Swiper
new Swiper('.slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Нумерация
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: false,
	},
	// Управление клавиатурой
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	// Управление колесом мыши
	// mousewheel: {
	// 	sensitivity: 1,
	// 	eventsTarget: ".slider"
	// },
	// Авто высота
	autoHeight: false,
	// Количество слайдов для показа
	slidesPerView: 'auto',
	// Отступ между слайдерами
	spaceBetween: 30,
	// Активный слайд по центру
	centeredSlides: true,
	// Стартовый слайд
	initialSlide: 1,
	// Бесконечный слайдер
	loop: true,
	// Свободный режим
	freeMode: false,
	// Скорость
	speed: 300,
	// Адаптив, ширина экрана
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 'auto',
	// 	},
	// 	480: {
	// 		slidesPerView: 'auto',
	// 	},
	// 	992: {
	// 		slidesPerView: 'auto',
	// 	}
	// },
	effect: 'creative',
		creativeEffect: {
		prev: {
			translate: ["-100%",0,0],
			opacity: 0.3,
			scale: 0.75
		},
		next: {
			translate: ['100%', 0, 0],
			opacity: 0.5,
			scale: 0.75
		},
		limitProgress: 2,
	},
});
// Маска
$(document).ready(function () {
	$('input[name=phone]').mask("+7 (999) 999-99-99");
});