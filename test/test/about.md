+++++++++++++++++head
.title: sssssss
.author: sssssssss
.description: asdasdasdad
.style: ./css/maind.css
.style: ./css/main.css
.name-generator: adadad
.canonical-link: adadad
-------------------head

++++navigation
.homepage: [home](./index.html)
.navmenu: roam
.backpage: [about](./about.html)
.navpage: [demo](./demo/base.html)
----------navigation

++++++++++++++++main
.ce header2: This is a header

This is some text and this is some more text
----------------main

++++++++++++++++footer
.class: footer
.message: Made with <3 by [samiuljoy](https://github.com/samiuljoy)
------------------footer

+++++++script
mode = document.getElementById('switch');

if (! navigator.cookieEnabled) {
	mode.style.display = 'none';
}
else if(! localStorage) {
	mode.style.display = 'none';
}
else {
	mode.style.display = 'inline';
}
------script

+++++++++add
.script: ./js/toggle.js
-----------add

