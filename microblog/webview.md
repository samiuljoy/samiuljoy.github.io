+++++++++++++++++head
.title: adding system application
.author: Samiul Joy
.description: This article describes how to add system applications on your android manually with an unlocked device
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: adding system application to your android manually
.canonical-link: https://samiuljoy.github.io/microblog/webview.html
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
.ce header1: webview.apk

I have a very old android, a device from 2017 which is running on stock lollipop 5.1. I use this for class communication and talking to friends and some youtube occasionally. The problem with this device is that it didn't have a webview, well it did initially, but I removed it because I didn't need it at that time. Now, while running some email applications, webview happens to be a dependency. However, it being a system application, it's not possible to install it in a conventional way. We have to hack the system to install the application as a system application.


### # Getting webview.apk

I happen to have the stock system.img file on my disk luckily. All you need is to mount the img file as ro,loop file with the following command on to a directory called `system/`;


```1
	# mount -o ro,loop system.img system/
```
.code1


Then navigate to `/system/app/` and copy the whole webview directory onto somewhere else. Then from there copy the directory to your phone.

__N.B. Do make sure to check the permission and the ownership on the webview directory, change the directory permission to 755 and the application webview.apk permission to 644__


### # You'll need administrative privilege

To copy an application to a system/ directory needs to have administrative privilege, means you need to have root permission. Only with administrative privilege you can copy the application to `/system/app/` and then continue rest of the steps.


### # Linking shared libraries

The next step is probably a bit tricky. While the system.img file is still mounted on system/ directory on your pc, head over to the `webview/lib/arm/` directory and check out the shared library there. For webview, it should be something like libwebview.so which should be linked to `/system/lib/libwebview.so`. 

```2
	# ls -lh libwebview.so
	# libwebview.so -> /system/lib/libwebview.so
```
.code2


You'll just need to create a symbolic link of the shared library on the same directory but on your phone.


```3
	# cd /system/app/webview/lib/arm
	# ln -s libwebview.so /system/lib/libwebview.so
```
.code3

Then the application should appear and probably a soft reboot should do the job, and after that it should start working like a system application.


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

