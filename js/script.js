// Activating focus in Safari
document.addEventListener('click', event => {
	if (event.target.matches('button')) {
		event.target.focus();
	}
})

// Menu-burger
const menu = document.querySelector('.menu-btn');

if (menu) {
	menu.addEventListener('click', function(e) {
		menu.classList.toggle('menu-btn_active');
	});
}