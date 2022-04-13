window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
			menuItem = document.querySelectorAll('.menu__item'),
			burger = document.querySelector('.burger'),

			// Чтобы меню закрывалось при нажатии на пустое пространство
			container = document.querySelector('.container');

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

	// Чтобы меню закрывалось при нажатии на пустое пространство
	container.addEventListener('click', () => {
		menu.classList.remove('menu_active');
	});
});