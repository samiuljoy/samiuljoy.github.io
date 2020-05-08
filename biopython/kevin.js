function toggle() {
  var body = document.getElementById('body')
  var currentClass = body.className
  var newClass = body.className == 'D' ? 'L' : 'D'
  body.className = newClass
  document.cookie = 'theme=' + (newClass == 'L' ? 'light' : 'dark')
  console.log('Cookies are now: ' + document.cookie)
}

function isDarkThemeSelected() {
  return document.cookie.match(/theme=dark/i) != null
}

function setThemeFromCookie() {
  var body = document.getElementById('body')
  body.className = isDarkThemeSelected() ? 'D' : 'L'
}

(function() {
  setThemeFromCookie()
})();
