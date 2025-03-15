+++++++++++++++++head
.title: Forwarding tun0 traffic through access point on Android
.author: Samiul Joy
.description: Escalating privilege and working my way up on setting up a pseudo router like env on Android device and using it as a pseudo pi-hole
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Tethering vpn traffic on android
.canonical-link: https://samiuljoy.github.io/microblog/vpn_tether.html
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
.ce header2: Tethering stuffs

I happened to have my friends Android phone that he gave me couple months back because it had a busted touch panel/sensor. Thought this would be a great opportunity to use it as a local dns resolver, to block ads and malicious websites. To do that, I needed to set up a vpn, preferably dns over https(DoH), which had recursive block mode and didn't require actual vpn server setup. Then I had to forward all traffic from the vpn to say the access point interface, and vice versa. The only downside being, I needed to have administrative privilege over the device, which I didn't.

This phone had very poor binary code implementation as it showed several flaws even compared to the spare phone I had which is probably even cheaper than this one. For example, while experimenting with `iptables` some of the features didn't work with it even though it had a fairly newer kernel version. This phone has a vulnerable chipset, and was vulnerable to an exploit which helped me to get administrative privilege on the phone. This made my work much easier, as I was able to pull the boot.img from the /dev/block/\*/boot partition and patch it with magisk and flash it on the phone which allowed me to gain root access with magisk daemon running in the background. It is very hard to work with a phone with a busted touch panel. I had to use an external mouse and keyboard to get it working.

I initially thought that, since I was root, it would be much easier to set up a forwarding tunnel connection to and from the access point and set up a hotspot and vpn setup, since I had done it previously on my other Android phone. As much as I would like to settle things over the terminal, I couldn't set up a proper forwarding rule on the device, hence I had to rely on an Android application to do the work for me which is a shame.

I wasn't inclined to use an actual vpn service, rather a local dns resolver that had recursive blocking features. DnsCrypt proxy is a great tool for that. It is written in Go language and is very fast. And the vpn-tether application made it much easier to set up an actual forwarding connection. Now I'm using this device as a temporary home router that blocks malware sites, advertisements, gambling, fake news and porn sites. I'm planning on getting an actual router soon though.

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
