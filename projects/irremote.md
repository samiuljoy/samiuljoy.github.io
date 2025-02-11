+++++++++++++++++head
.title: Remote Control Stuff
.author: Samiul Ahmed Joy
.description: Turn relay module on or off based off of remote signal
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Turn relay module on or off based off of remote signal
.canonical-link: https://samiuljoy.github.io/projects/irremote.html
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
.ce header2: Ir Remote actions

This post is going to be pretty straight-forward

### # What this does

Takes ir remote values and performs an action with it. In this case, it takes IR remote values and then switches relay module between NO/NC, basically turns it on or off

### # How this idea came to be

I felt lazy and didn't want to get up from bed at night to turn off electronic devices. Then realised this could actually help out old people to turn off lights/other electronic devices.

### # Equipments

* Arduino Nano (I used Arduino Nano, but you could use any dev board)

* Relay Module (I used a 5v relay module)

* IR Remote Sensor (I used a pretty basic sensor, it looks like a diode)

* Jumper Wires

* Bread Board (Depends on your use case)

### # External Libraries

You might need to install Arduino ir remote library from [here](https://github.com/Arduino-IRremote/Arduino-IRremote) or search for irremote library from arduino ide.

### # Wiring

The `S` in the Diagram is for signal out, `-` for ground and `+` for vcc 5v. I've used 3v vcc for the IR sensor and 5v for the relay module. The Circuit diagram is below;

![Circuit Diagram](../assets/arduino.png)

.caption: Circuit Diagram

 ___Note: This is a compressed version of the circuit diagram, however [here's](../assets/arduino.svg) a more higher quality vector image if you need it___

### # The Code

Here's the code for it;

```1
	#include <IRremote.hpp>
	#include <Wire.h>

	#define IR_RECEIVE_PIN 3
	#define RELAY_PIN 5

	const unsigned short int on_val = 25; // remote value for on
	const unsigned short int off_val = 69; //remote value for off

	unsigned short int w = 0;

	void setup() {
		IrReceiver.begin(IR_RECEIVE_PIN, 0); // the 0 is for no constant blinking of led
		pinMode(RECEIVE_PIN, INPUT);
		pinMode(RELAY_PIN, OUTPUT);
	}

	void wifi_off() {
		digitalWrite(RELAY_PIN, LOW);
	}

	void wifi_on() {
		digitalWrite(RELAY_PIN, HIGH);
	}

	void loop() {

		if (IrReceiver.decode()) {

		switch(IrReceiver.decodedIRData.command) {
				case on_val:
					wifi_on();
					w=1;
					break ;
				case off_val:
					wifi_off();
					w=0;
					break ;
				default:
				if (w == 1) {
					digitalWrite(LED_BUILTIN, HIGH);
					delay(500);
					digitalWrite(LED_BUILTIN, LOW);
				}
				break ;
			}
		}
		IrReceiver.resume();
		// Add 2 s delay so that arduino doesn't get too much hot
		// because the IrReceiver function runs in a constant loop, this prevents it
		delay(2000);
	}
```
.code1


The codes pretty straight-forward, initialize the irremote, the decode signal every 2 secods, and if decode value matches our remote value, then turn on relay else, turn off.

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

