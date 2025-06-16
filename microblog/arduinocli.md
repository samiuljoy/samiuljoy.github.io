+++++++++++++++++head
.title: Minimizing resource utilization while coding in an IoT environment
.author: Samiul Joy
.description: This post is about minimizing resource utilization/maximizing power efficiency while coding for IoT devices instead of using a full-fledged ide.
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: This post is about minimizing resource utilization while coding for IoT devices instead of using a full-fledged ide
.canonical-link: https://samiuljoy.github.io/microblog/arduinocli.html
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
.ce header2: IoT coding but efficiently

Arduino-ide is a software used by most people for IoT coding. However, the cpu/power consumption is surprisingly high. It's understandable to a degree given the fact that it's a IDE after all, tasks such as function lookup, code completion definitely requires high processing power, however compared to VS code, the cpu usage is quite high for Arduino-ide. Also, it keeps trying to connect to the internet every 2 seconds and complains while working offline, which is just absurd. These are the things I do on a regular basis while coding;

#. Write code
#. Compile code
#. Upload code to IoT devices
#. Download necessary libraries when needed

These are pretty basic tasks which in my opinion should not require that much high cpu/power consumption. I was basically searching for something more simpler and ended up finding the CLI version of the Arduino IDE. Besides code completion/definition lookups, arduino-cli was basically the perfect program for me.

## # arduino-cli

arduino-cli is basically a cli version of the ide minus the gui environment, code completion and other fancy stuffs. I can code in my favorite editor(VIM), which barely spikes cpu usage, and then compile codes, again barely spikes cpu usage and then upload codes straight from the terminal. I don't even need to log into a gui environment to even run this program, can do everything right from the tty which is just convenient & efficient. You can read more about arduino-cli [here](https://arduino.github.io/arduino-cli). I've even managed to underclock my cpu and tune it into powersave mode and run the cli software without any hassle whatsoever. I'm working on some IoT automation projects and will be uploading/writing about them in the near future. Have fun using arduino-cli

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

