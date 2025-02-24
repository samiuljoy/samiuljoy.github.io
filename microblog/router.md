+++++++++++++++++head
.title: Concerns about router
.author: Samiul Joy
.description: This article describes some of my concerns regarding the router and its behavior
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: concerns about the router
.canonical-link: https://samiuljoy.github.io/microblog/router.html
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
.ce header2: Router Concerns

So, I bought a new router. The old phone that I was using as a DNS based ad blocking access point just died. This lead me to buy a new router. We already had a router, but it didn't have native simcard support. The new one supports it, and it also supports open-wrt which is just golden for me.

So the first thing I did after setting everything up was running a nmap port scan. I thought okay probably port 80 and 443 and 1 or 2 more ports for other services should be open. But no, this router had even a telnet daemon running in the background. Which is very suspicious, considering the fact that there was no default way for me to change the telnet settings from the router admin page. The telnet option was hidden. It also has some remote access services enabled by default, and can not be disabled from the routers login page, even from the telnet session I was unable to disable the ACS service on the router. I tried downloading the config file of the router, which surprisingly saves configs in json format, with password and everything in just clear text. From there, I tried disabling the ACS service, making changes to the json file and pushing it back in, however after reboot, this thing just changes the whole config to default. Which leaves me with one option that I'd have to telnet into the router and manually kill the process with `kill $PID` command.

I did some internet digging for this issue, but sadly was unable to find a proper solution for this. All routers with same vendor and model names had web features to turn it off/on from the admin panel. It is quite suspicious that telnet feature, even though was accessible from the admin panel, it was hidden from the default web panel.

So, rest of the ports were open like port 81? I did `http://$router.ip:81` and it's just weirdly loads a bar and after a while says, no conncetion to the internet, even though it was clearly connected to the internet. There's also some more arbitary ports open, I ran `nmap -sV` for service checking on specific ports, and nmap was unable to detect a proper service on those ports except for telnetd on port 23.

Having open ports is a major security hole on any device. If the device doesn't necessarily need any services to run/no service is running, it's just meaningless to keep ports open. That's just stupid. On the contrary, hiding basic admin features from the web panel is not a good thing to do, specially telnet and ACS remote access, which are enabled by default. I might contact the vendors for real reason behind this, and update this article based on the response.

.hr

.ce header3: Update as of 11 September, 2022

Okay, I figured out a way to stop the ACS service on the router. This option was accessible from the web interface and like telnet, it was hidden. Had to scrape couple of google pages in order to get to the correct url. Also, on earlier version of the firmware, these options were not hidden. Very weird indeed.

Also I reached out to the vendor people, but got no reply.


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

