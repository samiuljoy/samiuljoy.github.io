+++++++++++++++++head
.title: Making the router less hot
.author: Samiul Ahmed Joy
.description: This articles describes about different ways to make the router less hot when running and making it more efficient and faster
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Making the router less hot and more efficient
.canonical-link: https://samiuljoy.github.io/microblog/routere.html
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
.ce header2: Router Experimentation

I have this cheap Dlink router that I bought as an alternative router for my home. It's a pretty decent router, but it tends to get hot quickly. At first I thought, okay there's only 2/3 people using the internet on our home and the router runs at only 5V dc, it shouldn't be getting that hot. It gets up to 40 degree Celsius under high load, which is absurd. At one point I even thought adding an external fan to it. Well anyway the router had air-vents beneath it, but for some reason, I completely blocked the vents by hard mounting it to the wall, which lead to less air flow and consequently it being overheated. I quickly resolved this issue by adding erasers between the router and the wall so that air flow can be more easy. This drastically improved the heating issue, however it did heat up quite often whenever my ceiling fan was not running. Although not quite as hot as before but it was hot. So I did some research on the internals of the router and came to these 3 points that could improve the heating issue of the router;


#. Stopping services that are not needed by the router/halting extra processes running on the router

#. Finding a way to turn off the router led lights because they are hard coded onto the router board

#. Hiding the ssid of the WiFi because constant ssid broadcast heats up the router pretty quickly

#. Disabling DHCP server


## # Halting processes on the router

Luckily the router has a telnet service which allows me to get shell access to the router. From there I can kill processes that are quite unnecessary and not frequently needed/low priority processes. This helped with the heating issue, since processes were not running constantly on the router and because of that memory was not consumed by extra processes which also led to an increase in performance on the router.

## # Turning off led lights

This router has led lights hard coded onto its board. Due to constant blinking of the led lights, they made the whole motherboard of the router hot. So there were two ways to turn off the led lights, one was through the shell which turned off WiFi and Internet led lights but not the power led light. The other option I had was to physically take the led lights off the board. I initially turned off the led lights through the CLI which led to the power light being on constantly, and after a few hours, the board became hot as usual, especially around the led region of the board. So I took a wire cutter and took off the router led lights and that helped with the heating issue by quite a lot. It doesn't heat up that much even when the ceiling fan is turned off.

## # Hiding WiFi ssid

I was experimenting with an old Samsung phone and the phone for some reason couldn't connect to the WiFi because the ssid of the WiFi was hidden, so I made it visible and the phone could connect nicely. But the thing I found out was that after about an hour or so, the router got hot pretty quickly around 40 degree Celsius even after halting processes and turning off the led lights. Apparently, broadcasting the ssid of the WiFi consumes a good amount of power regardless of setting long beacon intervals/DTIM periods. Thus hiding the ssid of the WiFi made it less hot.

## # Disabling DHCP server

I'm not completely sure about this but DHCP server helped to lower temperatures by about 5 degrees on my router. It's probably because this router has a low ram and it couldn't handle the processes or services, hence turning it off improves performance and heating issues perhaps? Maybe. DHCP server on the router helps a device to obtain an ip address. Hence turning that off means I have to manually set static ip addresses on all my devices connected to the router.

## # End Result

These steps made my router quite fast and helped me to reduce heating issues. Benefits of this could potentially include increasing longevity of the router.

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

