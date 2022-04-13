// const burger = document.querySelector('.burger'),
//       menu = document.querySelector('.menu'),
//       closeElem = document.querySelector('.menu__close');

// burger.addEventListener('click', () => {
//    menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//    menu.classList.remove('active');
// });

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
			burger.classList.toggle('burgerr_active');
			menu.classList.toggle('menu_active');
		});
	});
});