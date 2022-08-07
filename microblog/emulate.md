+++++++++++++++++head
.title: Emulating User Interactions Using ADB
.author: Samiul Joy
.description: Title is pretty much self explanatory, Using adb it was possible to emulate a normal user interaction on a Chrome browser. More ways to automate stuff in a very cool way!
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Emulating User Interactions Using ADB
.canonical-link: https://samiuljoy.github.io/microblog/emulate.html
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
.ce header1: Emulating User Interactions Using ADB

Couple days back, well actually couple months back I came across a random video on YouTube about headless chromium browsers being used as a web scrapping tool with node.js and puppeteer for emulating user interactions [the video](https://youtube.com/watch?v=aRXzW-o-zqs). The fact that we could emulate user inputs using a `cli` was quite fascinating, suffice to say one could write a script to automate a whole bunch of stuffs without triggering the __I'm not a robot__ part(except some sites). Now, everything seems pretty darn cool and all, and I came across this idea if it was possible to emulate the same thing but on an Android device. Sad news is that, there's no "Headless Chrome" for Android devices, since it depends on a bunch of libraries and stuffs, which unfortunately aren't available on Android for the current time. However, (here comes the fun part), it's actually possible to emulate user interactions on Android devices, which of course isn't only limited to using Chrome, but also, the whole UI of Android, meaning, we can automate basically everything we usually do on a typical Android device, but with scripts. Now how cool is that? Sounds pretty cool right? Well, let's get started!

## # Stuffs we'll be needing are;

1. A PC
2. An Android
3. Little bit of Internet

## # Overview

We'll be using [ADB](https://en.m.wikipedia.org/wiki/Android_software_development#ADB) to access the debugging features of Android to emulate input key events(emulating taps on screen). We'll be launching the Chrome Browser from terminal using adb, then tap on the search bar to activate the text area input section, then we'll be putting in some texts, and turning on mobile data/WiFi and querying a search result. We'll then wait for the search results to appear and tap on the first result that pops up. And we'll add some stuffs as we go along this tutorial. If you think this will be tough and such, it's not, if anything, you'll probably end up enjoying it [^-^]

## # Gathering required stuffs

We'll be needing a PC to instruct and execute commands onto our devices. For that, we'll be needing adb. If you're on Linux OS, you can install adb using your package manager, if you're on macOS, you can install it using brew. Head over to your phone to enable usb debugging. Once you have everything set up, then we can begin.

Make sure you can access your phone from your PC through the shell. Connect usb cable to your phone and open a terminal window on your PC, and type in `adb devices` which considering everything is properly set up, should display something like this

```no
	[user@debian]:~$ adb devices

	List of devices attached
	* daemon starting on port 5555
	* daemon started successfully

	ID	 	 device
	0e46ee341 	 authorized

	[user@debian]:~$
```

Everything seems fine? Let's proceed to the next step

## # Fun part begins here

Now that your device is connected, just for sake of fun, try this in your terminal;

```1
	adb shell input keyevent 223; adb shell keyevent 224
```
.code1

What this one liner code does is, it turns off the screen with `keyevent 223`, and turns the screen on with `keyevent 224`. Now, onto what we're here for. Emulation. Let's jump straight to it. Let's begin with starting Chrome Browser from our terminal. We could do this with either by going to the shell and executing from there, or we could use our native terminal. The difference between them is just that we have to add `adb shell` prefix for the later case. Either way, suit yourself to what you prefer. Now to start chrome, we can issue this command;

```2
	adb shell am start -n com.android.chrome/com.google.android.apps.chrome.Main
```
.code2

__note: you could also use 'com.android.chrome/.MainActivity'__

This should launch Chrome Browser on your Android. The first part before "/" tells the shell to use chrome, the part after / tells the shell to actually launch chrome with activity Main, which brings the chrome app in foreground. Pretty cool right? Now, let's emulate swipe action to make it seem like as if you were swiping across the screen. Swipe action are executed with `input swipe` action, like so


```3
	adb shell input swipe 400 700 400 130 500
```
.code3

The 400 700 and 400 130 are __x__ and __y__ coordinates of the screen. 400 700 tells the device to emulate a tap on coordinate 400 700,then move across the screen to 400 130 coordinate, and this is done with __swipe__ action. Now, we don't want the swipe action to be blazing fast, hence the velocity is defined with 500. Try replacing it with 100 and see things fly across the screen lol. The velocity part is optional and can be ignored. The important part of this whole thing is to get the pointer location, because for my phone, the coordinates were that and that, however this might be different in your case. So, to get the tap coordinates, you need to enable a feature under __Developer Options__ on your device named __Pointer Locations__, go to developer options and scroll down a bit until you find pointer locations and enable it. After enabling it, you'll see a red margin on top of your screen, showing the coordinates. Tap on random surface of your screen, and you'll see the x and y coordinates pop up in __red__. Now, to do a swipe action, tap and note down the coordinates and then swipe up or down and take note of your final coordinates(note: the coordinates are the ones when the screen is tapped and hold, not the ones when tap is released), and that's it. Replace your four coordinates with the four coordinates above.

## # Performing a search query
Now, onto the next step let's start the chrome browser again, and this time let's perform a search query. To do that, start chrome browser and jump onto its home page. There's a search bar on the home page. Now what we usually do is tap on the search bar and type in whatever we want and hit enter. Well, that's basically what we'll doing, but with scripts.

Remember to take a note of the coordinates of the search bar where we'll be emulating a tap action as if we were actually tapping on the search bar. Tap and hold the search bar and take notes of your coordinates while holding. Got the coordinates? Good, now smash this into your terminal

```4
	adb shell input tap X Y
```
.code4

Replace `X` and `Y` with the coordinates you got while tapping over the search bar. That should input a tap action on only on those coordinates of your screen. Remember to have chrome opened into its home screen. This should bring up the area where we input our texts and notice that there's already a blinking cursor waiting for you to input texts. This is where we'll be inserting our search query. To do that just type in;


```5
	adb shell input text 'test'
```
.code5

This should input the text 'test' into your search bar. Now, to emulate pressing 'Enter' key is pretty easy, just type in;


```6
	adb shell input keyevent 66
```
.code6

`keyevent 66` emulates Return action. So there you go, you just performed a simple search query. To sum all of these up, we should now have a script that looks like this;

```7
	# Let's start up chrome
	adb shell start -n com.android.chrome/com.google.android.apps.chrome.Main
	# wait for chrome to start up properly, wait for 2 seconds
	sleep 2
	# perform a tap action on X and Y coordinates to bring up the search bar
	adb shell input tap X Y
	# perform a search query with text
	adb shell input text 'test'
	# and hit enter
	adb shell input keyevent 66
	# and to perform a swipe, put any bottom to top coordinates like so
	adb shell input swipe 400 700 400 150 500
	# we are swiping up, which is why on Y coordinates change, from 700(bottom) to 150 (up)
```
.code7

Pretty cool right? Try this automated search query to check for Cloudflare encryption

```8
	adb shell start -n com.android.chrome/com.google.android.apps.chrome.Main
	sleep 2
	adb shell input tap X Y
	# %s have to be put between strings that contain spaces, we'll querying for 'cloudflare test'
	adb shell input text 'cloudflare%stest'
	# wait 2 seconds for search results to pop up
	sleep 2
	# what we're searching for is anything containing 'cloudflare esni' in the search queries.
	# now tap on the search query
	adb shell input tap X Y
	# X and Y being the search result coordinates
	# wait for the page to load properly
	sleep 3
	# then tap on the part that says 'check my browser'
	adb shell input tap X Y
	# wait for ~4 seconds for the results to properly load
	sleep 4
	# well there you go, you just completed an automated test, you can scroll down if you wish to,
	adb shell input swipe X Y X Y 500
```
.code8

## # Aftermath

Imagine all the stuffs we could automate with this!! Also, if you happen to have root privilege on your phone, that's even better, because with root privilege, you could put any script of yours and run it without needing a PC.


__This page has more contents to come and needs some improvement, should've modified it before pushing. Oh well -.-__

.hr

----------------main

++++++++++++++++footer
.message: Made with <3 by [samiuljoy](https://github.com/samiuljoy)
.message: [rss](/rss.xml) | [about](/about.html) | [go to top](#)
------------------footer

++++++++++++++++++++++script
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

++++add
.script: ../js/toggle.js
-------add
