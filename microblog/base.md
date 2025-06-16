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
.navpage: [projects](..//projects/base.html)
.navpage: [academics](..//academics/base.html)
.navpage: [theology](../theology/base.html)
.backpage: [base](base.html)
----------navigation

++++++++++++++++main
.ce header1: Microblogs

This is where my micro thoughts resides. Hopefully these articles comes to be of use.

++++++++++++++++++card
 
.date: April 13, 2025
.article: [My experience with bsd os](bsdexperience.html)
.describe: Article is about my experience with bsd (open/free) operating systems

 
.date: March 11, 2025
.article: [About the importance of RSS feeds](rss.html)
.describe: Its about importance of rss and how rss makes things easy and organized for reading

.date: February  1, 2025
.article: [Minimizing resource utilization while coding in an IoT environment](arduinocli.html)
.describe: This post is about minimizing resource utilization/maximizing power efficiency while coding for IoT devices instead of using a full-fledged ide.

.date: January 21, 2025
.article: [Change keycodes](customkeys.html)
.describe: Changing key parameters and re-assignment of keys on a Linux machine

.date: September 23, 2024
.article: [Accessing raspberry pi 2w through micro-usb](raspberry2ether.html)
.describe: A short tut on accessing raspberry pi 2w through micro-usb, that way it becomes easier to access it through ssh on a pc and can connect to wifi at the same time

.date: October 21, 2023
.article: [Making the router less hot](routere.html)
.describe: This article describes about different ways to make the router less hot when running and making it more efficient and fast

.date: August 23, 2023
.article: [BirdFeeding](bird.html)
.describe: This is about feeding birds

.date: January 16, 2023
.article: [Adding Applications Manually](webview.html)
.describe: Adding applications manually on an unlocked android device

.date: September 25, 2022
.article: [Captive Portal on Apache](captive.html)
.describe: Learn to create captive portal pages on Apache web server

.date: September 22, 2022
.article: [Solving a puzzle](puzzle.html)
.describe: Very bad neighborhood

.date: September 7, 2022
.article: [Debian netinstall problems](netinst.html)
.describe: This article describes some difficulties I faced while installing debian with netinst iso

.date: September 3, 2022
.article: [Concerns about router](router.html)
.describe: This article describes some of my concerns regarding the router and its behavior

.date: August 22, 2022
.article: [Forwarding tun0 traffic through access point on Android](vpn_tether.html)
.describe: Escalating privilege and working my way up on setting up a pseudo router like env on Android device and using it as a pseudo pi-hole

.date: April 14, 2022
.article: [Going mouseless](mouseless.html)
.describe: Control mouse in a more convenient and fast way

.date: April 12, 2022
.article: [Setup ibus avro on non Gnome platforms](avro.html)
.describe: This is a short tutorial on how to get started ibus-avro on Gnu/Linux platforms without Gnome desktop environment

.date: March  4, 2022
.article: [Plans on future projects](future_projects.html)
.describe: This article sums up my plans for future projects

.date: November 1, 2020
.article: [Emulating user interactions using adb](emulate.html)
.describe: Title is pretty much self explanatory. We use adb and input keyevents to handle keystrokes to emulate a real user interaction to browse the internet with chrome browser on android

.date: October 15, 2021
.article: [Turtle fractal tree](turtle.html)
.describe: About the tree on the index page

.date: September 4, 2021
.article: [Chemical structures with groff chem](gchem.html)
.describe: Learn how to draw chemical structures with groff chem

.date: February 20, 2020
.article: [login.sh + username.sh](login.html)
.describe: Emulating Linux login mechanism using bash scripts

.date: February 13, 2020
.article: [guess.sh](guess.html)
.describe: A simple number guessing game where you get to guess 2 digit random numbers

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
