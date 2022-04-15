+++++++++++++++++head
.title: Microblogs
.author: samiuljoy
.description: this are some small microblogs
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: microblog
.canonical-link: https://samiuljoy.github.io/microblog/base.html
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
.ce header1: Microblogs

This is where my micro thoughts resides. Hopefully these articles comes to be of use.

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
.describe: Title is pretty much self explanatory. We use adb and input keyevents to handle keystrokes to emulate a real user interaction to browse the internet with chrome browser

.date: October 15, 2021
.article: [Turtle fractal tree](turtle.html)
.describe: About the tree on the index page

.date: March  4, 2022
.article: [Plans on future projects](future_projects.html)
.describe: This article sums up my plans for future projects

.date: April 12, 2022
.article: [Setup ibus avro on non Gnome platforms](avro.html)
.describe: This is a short tutorial on how to get started ibus-avro on Gnu/Linux platforms without Gnome desktop environment

.date: April 14, 2022
.article: [Going mouseless](mouseless.html)
.describe: Control mouse in a more convenient and fast way

----------------card

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

