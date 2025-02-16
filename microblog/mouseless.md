+++++++++++++++++head
.title: Going mouseless
.author: Samiul Joy
.description: Use keynav and xmouseless to use mouse effectively
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: mouseless
.canonical-link: https://samiuljoy.github.io/microblog/mouseless.html
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
.ce header2: Keynav + Xmouseless

### Prelude

My mouse has been acting funky lately and it got to the point, where clicks and scrolling wouldn't work. The scroll wheel on the mouse got busted and scrolling was completely impossible. I was hoping I would get a new mouse, however busy life made me to completely ignore the need of a mouse since I was away from this pc for a while.

Then couple days back, came across a video on youtube, the channel goes by the name [gotbletu](https://youtube.com/user/gotbletu) and he showed an excellent program to control the movement of mouse in a very quick and easy way.

He mentioned 2 programs, [keynav](https://github.com/jordansissel/keynav.git) and [xmouseless](https://github.com/jbensmann/xmouseless.git) Xmouseless is the program mainly used to control the mouse movement with keyboard and keynav helps to quickly move the mouse into specific portions of the screen. This would be very helpful if you're working with a big screen, that way jumping to co-ordinates would save bunch of time.

### Keynav setup

You can get keynav through your distro repository or build your own from source. I did build mine from source.

First git clone the repo;

```1
	git clone https://github.com/jordansissel/keynav.git
```
.code1

Then read the README.md file and follow the instructions for building from source. The instructions are pretty easy to follow.

### Xmouseless setup

Same procedure, git clone the repo;

```2
	https://github.com/jbensmann/xmouseless.git
```
.code2

Then, edit the config header file {config.h} and make modifications to it as you please and then run make and make install.

I use dwm and assigned some function key as a hotkey to invoke keynav and xmouseless.

!!![this is a placeholder](https://www.youtube.com/embed/j8D76XRlABQ?si=c-3ADhSHeWvLV4LB)

.caption: Keynav + xmouseless in action

The whole mouse movement you see in the video above was done with my keyboard!

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

