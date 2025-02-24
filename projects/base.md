+++++++++++++++++head
.title: About my projects
.author: Samiul Ahmed Joy
.description: This page holds index of my different projects
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: This page is a collective placeholder of projects that I've worked in
.canonical-link: https://samiujoy.github.io/projects/base.html
-------------------head

++++navigation
.homepage: [home](..//index.html)
.navmenu: roam
.navpage: [demo](..//demo/base.html)
.navpage: [microblog](..//microblog/base.html)
.navpage: [projects](..//projects/base.html)
.navpage: [academics](..//academics/base.html)
.backpage: [base](base.html)
----------navigation

++++++++++++++++main
.ce header2: My projects

This page contains some of the projects I've worked on/will be working on.

++++++++++++++++card
 
.date: February 24, 2025
.article: [Automate email sending with esp8266 nodemcu](plantmanagement.html)
.describe: Send email automatically when sensor value goes below threshold

 
.date: February 12, 2025
.article: [Remote Control Stuff](irremote.html)
.describe: Turn relay module on or off based off of remote signal

-------------card

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
