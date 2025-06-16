+++++++++++++++++head
.title: Automate email sending with esp8266 nodemcu
.author: Samiul Ahmed
.description: Send email automatically when sensor value goes below threshold
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Send automatic email when sensor value goes below threshold
.canonical-link: https://samiuljoy.github.io/projects/plantmanagement.html
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
.ce header2: Automate sending email

### # What it does

The esp8266 nodemcu basically acts as a smtp client. When a sensor value goes below threshold/above threshold, it triggers `Send_mail()`function which ends up sending email to notify user.

### # Equipments/Dependencies

* Esp8266 Nodemcu/ESP32 dev board

* Wifi with internet connection

* Email Account

* Soil Moisture(Capacitive/Resistive) sensor

* Wires for connection

### # Circuit Design

![Circuit Diagram](../assets/soil.png)

.caption: Circuit Diagram

### # Code

I've added multiple comments on the code for ease of understanding, the projects source code can be found [here](https://github.com/samiulahmedjoy/plantmanagement)

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

