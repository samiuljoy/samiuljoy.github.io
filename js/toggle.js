// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#switch');
var word1 = document.getElementById("mode");
var word2 = document.getElementById("sword");
// changes the meta tab color for chrome based browsers on mobile devices
var meta = document.querySelector("meta[name=theme-color]");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('D');
  meta.setAttribute("content", "#10101c");
  word1.innerHTML = "Dark";
	word2.innerHTML = "🐭";
  //word.innerHTML = "^-^";
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('D');
  meta.setAttribute("content", "#002f30");
  word1.innerHTML = "Light"
	word2.innerHTML = "🐼";
  // word.innerHTML = "-.-";
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
