+++++++++++++++++head
.title: Microblogs
.author: samiuljoy
.description: this are some small microblogs
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: microblog
.canonical-link: https://samiuljoy.github.io/microblog/base2.html
-------------------head

++++navigation
.homepage: [home](..//index.html)
.navmenu: roam
.navpage: [demo](..//demo/base.html)
.navpage: [microblog](..//microblog/base.html)
.navpage: [theology](..//theology/base.html)
.navpage: [academics](..//academics/base.html)
.backpage: [base](base.html)
----------navigation

++++++++++++++++main
.ce header2: microblogs page2

The first page had too many articles..so continuing from here

++++++++++++++++++card

.date: September 4, 2021
.article: [Chemical structures with groff chem](gchem.html)
.describe: Learn how to draw chemical structures with groff chem

.date: February 13, 2020
.article: [guess.sh](guess.html)
.describe: A simple number guessing game where you get to guess 2 digit random numbers

.date: February 20, 2020
.article: [login.sh + username.sh](login.html)
.describe: Emulating Linux login mechanism using bash scripts

.date: November 1, 2020
.article: [Emulating user interactions using adb](emulate.html)
.describe: Title is pretty much self explanatory. We use adb and input keyevents to handle keystrokes to emulate a real user interaction to browse the internet with chrome browser on android

-----------card

.hr

----------------main

++++++++++++++++footer
.message: Made with <3 by [samiuljoy](https://github.com/samiuljoy)
.message: [rss](/rss.xml) | [about](/about.html) | [go to top](#)
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
-----------------script

+++++++++add
.script: ..//js/toggle.js
-----------add
