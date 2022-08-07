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

The first page had too many articles..

++++++++++++++++++card

.date: September 7, 2022
.article: [Debian netinstall problems](netinst.html)
.describe: This article describes some difficulties I faced while installing debian with netinst iso

.date: September 22, 2022
.article: [Solving a puzzle](puzzle.html)
.describe: Very bad neighborhood

.date: September 25, 2022
.article: [Captive Portal on Apache](captive.html)
.describe: Learn to create captive portal pages on Apache web server


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
