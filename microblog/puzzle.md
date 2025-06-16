+++++++++++++++++head
.title: Neighbor didn't know how to set up a fake access point
.author: Samiul Joy
.description: This neighbor knew how to set up an accesspoint, but didn't bother to set up a proper dhcp configuration, making it impossible to connect with a dynamic ip, only a static ip would work
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Fake recon
.canonical-link: https://samiuljoy.github.io/microblog/puzzle.html
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
.ce header2: Crazy Pandemic

It was during the pandemic. I was searching for wifi with weak psks and without even realizing, I got myself into a honeypot.

This ugly guy lived on the south-west side of our building, I knew it was his wifi, and he probably knew I was using his wifi as well. I even at some point saw him running ettercap on his pc. Anyways, he had set up a fake access point with probably some cheap wifi dongle and routed traffic through there, and couldn't figure out how to set up dhcp on the access point. The fact that I'm saying this is because, everytime I had to establish a connection to that access point, I had to set a static ip. He probably used something like `airbase-ng` to set up a fake access point with password like 12345678. I was such a fool at that time, even though I realized that he was monitoring my traffic, it completely escaped my mind that he was using a fake access point with poorly set up dhcp configuration.

I've had crazy experiences during the pandemic, really crazy and this guy was a part of it.

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

