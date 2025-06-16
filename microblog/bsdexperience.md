+++++++++++++++++head
.title: My experience with bsd os
.author: Samiul Ahmed Joy
.description: Article is about my experience with bsd (open/free) operating systems
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: This articls is about my experience with bsd operating systems
.canonical-link: https://samiuljoy.github.io/microblog/bsdexperience.html
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
.ce header2: Bsd experience

Recently I got myself into tinkering with bsd operating systems. I knew about netbsd, openbsd and freebsd. So thought this would be a good idea to get started with open and freebsd. So, I did some basic googling on the internet, and found out that openbsd puts more effort into creating a by-default secure os, thus consuming more system-resources. Freebsd on the other hand is more optimized for performance, and is considerably much much faster compared to openbsd and security can be enhanced on freebsd as well post installation. So, I thought why not try both of them

### # Experience with Openbsd

The openbsd download image file was comparatively small compared to freebsd. It was about 650MB or so. I had a an old motherboard that I used as a desktop, and thought running openbsd on that wouldn't be a problem since it was already supported on that platform. However, booting from usb was a hassle on the old platform, since it only had support for legacy bootloaders. But anyway, I managed to install openbsd on that hardware and the installation process was very easy and straightforward. Thankfully there was a MBR partition mode during installation instead of GPT, because of that I was able to install it on a legacy platform. I was surprised at how much efficient Openbsd was in terms of system utilization, it only used 30MB of RAM when idle and when running Xorg with dwm(window manager) it used upto 60-80MB or rams, which is surprising and brilliant to say the least. Then installing chromium on it, and watching youtube boosted the ram upto 1.4GB which was fine considering I was watching a ray tracing 60FPS video at 720P on a pentium dual core cpu from 2010. Everything seemed to work fine, until I ran fw_update. Running fw_update downloaded a file on my local $HOME directory called intel-drm.tar.gz which when I uzipped and untar, completely crashed my computer and the entire motherboard ended up being dead. So yeah. I mean I wouldn't even be surprised since US/Canada/Europe + friends have been targeting third world Muslim/Islamic countries since the birth of technology, so no surprise there. I even reached out to the openbsd devs and asked them why would running tar -xzf inside of an operating system entirely kill my PC, their logic was, "Oh you're hardware is old that's why, get rid of it.". Even though I have been running Linux on my system since 2020 or even before that and had no problems before, and openbsd just randomly destroys my PC, completely.

It's fine I guess. I guess I was at fault for even trying out their OS. Anyways, that's my experience with openbsd

### # Experience with Freebsd

My journey with freebsd has been good so far. It's very fast, responsive. Has good support for raspberry PI dev boards. I couldn't even get Openbsd to boot properly on my Raspberry pi board, but anyway, yeah freebsd has been good and nothing has broken(yet).
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

