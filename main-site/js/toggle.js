let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#switch');
var word2 = document.getElementById("sword");
var meta = document.querySelector("meta[name=theme-color]");

const enableDarkMode = () => {
	document.body.classList.add('D');
	meta.setAttribute("content", "#000000");
	word2.innerHTML = '🌙';
	localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
	document.body.classList.remove('D');
	meta.setAttribute("content", "#002f30");
	word2.innerHTML = '🔆';
	localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
	enableDarkMode();
}
darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
