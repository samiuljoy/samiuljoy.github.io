+++++++++++++++++head
.title: Debian netinstall problems
.author: Samiul Joy
.description: This article describes some difficulties I faced while installing debian with netinst iso
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Problems while installing Debian netinstall with unetbootin
.canonical-link: https://samiuljoy.github.io/microblog/netinst.md
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
.ce header2: debian installation problems

The most easies way to write an iso from a Linux terminal is through the `dd` command, as in

```no
	dd if=file.iso of=/dev/sdx bs=x status=progress
```

And in most cases, this works just fine. However in case of debian netisntall image, writing with disk dump doesn't particularly does the job for me. One cause could be that the iso could be invoking codes that are probably unknown to the motherboard bios that I have since it's quite old, and it does infact work on other devices. So, I had to find an alternative. I can not just ditch my motherboard now can I?

There's this usb tool called rufus which nicely writes iso files onto usb drives, however rufus is platform specific, it does not work on Linux. So I did google search, and came across this indian website that suggested unetbootin was the best alternative. Apparently, Unetbootin uses some weird method to write data to disk, and weirdly enough, the disk needs to be mounted while it's writing the iso.

So while installing debian with unetbootin, after a while, the installation halts and complains that the installation media isn't properly configured or something like that. So stack exchange says that I needed to mount the installation media as a cdrom after migrating to terminal like so;

```no
	mount /dev/sdx /cdrom/
```

Then the installation continued normally, until some point where it says that the installation media couldn't configure grub. At that point you'd have to unmount /cdrom/ and the installation would continue normally.

Not sure if these problems are with debian(highly unlikely) or with unetbootin. Well at least now I know how to install debian with unetbootin.

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

