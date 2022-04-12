+++++++++++++++++head
.title: Getting started with ibus-avro
.author: Samiul Joy
.description: A short tutorial to set up ibus-avro on non-gnome platforms
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Tutorial
.canonical-link: https://samiuljoy.github.io/microblog/avro.html
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
.ce header2: ibus-avro

 This is a tutorial on setting up [ibus-avro](https://github.com/sarim/ibus-avro) on Linux systems that are devoid of any Desktop Environments such as Gnome or xfce and purely based on window managers or others. I use [dwm](https://suckless.org/) on a debian system.

My strategy was to build from source. Hence, I had to satisfy the dependencies. For a Debian distribution, all I needed was to install only these packages;

```1
	$ apt install ibus \
		ibus-gtk gjs \
		automake \
		autoconf \
		make \
		libibus-1.0-dev \
		git
```
.code1

I'm not sure if gjs is actually needed though. Anyways, after successful installation of these packages, git clone the repo;

```2
	$ git clone https://github.com/sarim/ibus-avro.git
```
.code2

then change directory to `ibus-avro` and run autoconf and automake;

```3
	$ aclocal && autoconf && automake --add-missing

	$ ./configure --prefix=/usr

```
.code3

then make install;

```4
	$ make install
```
.code4

Now, assuming that you use a `.xinitrc` or for a Debian based system there's `.xsessionrc`, you would add/export the following lines to your `.profile`;

```5
	export GTK_IM_MODULE=ibus
	export XMODIFIERS=@im=ibus
	export QT_IM_MODULE=ibus
```
.code5

Now, to start the ibus-daemon in the background; you could either create an alias or a function in your bash source file or under, `~/.local/bin/` directory and start or stop ibus avro from there;

To start ibus-daemon; run

```6
	$ ibus-daemon -dx
```
.code6

You could probably add the line above to a shell script and integrate it like this, or you could invoke it at any time;

```7
	#!/usr/bin/env sh

	# check if xorg is running, if not running, then exit with exit code 1
	[ -z "$DISPLAY" ] && \
		echo "No display server is running at this moment, exiting..." && \
		return 1;
	# ELse daemoize ibus
	ibus-daemon -dx
```
.code7

And to stop ibus, just run `pkill ibus*` That should be enough.

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

