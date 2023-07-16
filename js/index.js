const headerNav = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', () => {
	headerNav.classList.toggle('header__nav-active')
});


// header fixed...........

window.onscroll = function showHeader() {
	let header = document.querySelector('.header');
	if (window.scrollY >0) {
		header.classList.add('header__fixed');
	} else {
		header.classList.remove('header__fixed')
	}
}