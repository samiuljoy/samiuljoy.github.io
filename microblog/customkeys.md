+++++++++++++++++head
.title: Key reassignment
.author: Samiul Joy
.description: Change keyboard key assignments
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Change keyboard keys and reassign them
.canonical-link: https://samiuljoy.github.io/microblog/customkeys.html
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
.ce header2: Key Assignment

I recently bought an ergonomic bluetooth keyboard that had some weird keys such as shift key was so big that most of the time I ended up hitting Enter key by mistake and Caps lock key was a bit larger too which when hitting the key `A` I ended up hitting Caps lock instead, the backspace key was very far/at the end of the keyboard for some reason and home/end and ins/del keys were also wierdly placed. I needed ins/del and home/end keys to switch between tabs within vim since these were the keybinds I used on all my other keyboards. All in all I was having a hard time typing properly/efficiently on this new keyboard.

So, I ended up searching for ways to change the keys/map keys, and found bunch of programs on the interweb. Some of the programs either needed to be daemonized or were extremely advanced/complex compared to what I was looking for or were exclusively dependent on a graphical environment. I was looking for something simple and already built-in into the system. So, I came across these programs, `xmodmap`, `xdotool` and `setkeycodes`. Out of all of these, setkeycodes was definitely what I needed and was built right into the system.

## # setkeycodes

 `setkeycodes` basically takes in custom mappings from `$USER` and modifies the kernel keymappings to `$USER`. Running `man` on `setkeycodes` shows this portion;


```1
	SETKEYCODES(8)                                           System Manager's Manual                                           SETKEYCODES(8)
	
	NAME
	       setkeycodes - load kernel scancode-to-keycode mapping table entries
	
	SYNOPSIS
	       setkeycodes scancode keycode ...
	
	DESCRIPTION
	       The  setkeycodes command reads its arguments two at a time, each pair of arguments consisting of a scancode (given in hexadecimal)
	       and a keycode (given in decimal). For each such pair, it tells the kernel keyboard driver to map the  specified  scancode  to  the
	       specified keycode.
	
	       This command is useful only for people with slightly unusual keyboards, that have a few keys which produce scancodes that the ker‐
	       nel does not recognize.
	
	THEORY
	       The usual PC keyboard produces a series of scancodes for each key press and key release. (Scancodes are shown by showkey  -s,  see
	       showkey(1)  )  The  kernel  parses  this  stream of scancodes, and converts it to a stream of keycodes (key press/release events).
	       (Keycodes are shown by showkey.)  Apart from a few scancodes with special meaning, and apart from the  sequence  produced  by  the
	       Pause  key,  and  apart from shiftstate related scancodes, and apart from the key up/down bit, the stream of scancodes consists of
	       unescaped scancodes xx (7 bits) and escaped scancodes e0 xx (8+7 bits).  To these scancodes or  scancode  pairs,  a  corresponding
	       keycode  can  be assigned (in the range 1-127).  For example, if you have a Macro key that produces e0 6f according to showkey(1),
	       the command
	              setkeycodes e06f 112
	       will assign the keycode 112 to it, and then loadkeys(1) can be used to define the function of this key.
	
	       Some older kernels might hardwire a low scancode range to the equivalent keycodes; setkeycodes will fail when  you  try  to  remap
	       these.
```
.code1

The **Theory** portion on the man page describes about key release and key press events. Using this info we can modify/assign different hex values to the keys that we want to change using the `showkey` command. Now if you look at the Theory section on the above code block, you'll see a line that says;

```no
	setkeycodes e06f 112
```

The first portion of the hex value `e06f` is the identifier of the first keypress event for a key and 112 is the key that the keypress event is being assigned to. So, the hex value of the first keypress is being assigned to key 112. Now, how do I know what is `e06f` or `112` or which keys they are. This is where `showkey` program comes in use.

## # showkey

The showkey command basically takes standard input keypresses and prints them out in hex values/digital values. There's basically 2 modes to it, key-press event and key-release event. These are 2 different events with different keyvalues that can be separately assigned to key/s. If you look at the **Theory** portion of the code block above, it clearly describes the mechanism by which showkey converts scancodes(hex values) to keycodes(decimal values)

```no
	THEORY
		The usual PC keyboard produces a series of scancodes for each key press and key release. (Scancodes are shown by showkey  -s,  see
		showkey(1)  )  The  kernel  parses  this  stream of scancodes, and converts it to a stream of keycodes (key press/release events).
		(Keycodes are shown by showkey.)
```

 **[Note:]** Remember, both the `showkey` and `setkeycodes` command needs to be executed as root user since it makes changes systemwide rather than $USER

## # Execution

The entire process follows these sequential steps;

1. Get the scancode(decimal value) of the key that we want to change to
2. Get the scancode(hex value) of the key that we want to be changed
3. Code execution
4. Running it at boot time(making it a init service)

### # Step: 1

So in my case, I have a huge shift key that interferes with me pressing enter and the backspace key being too far, this is what I wanted to do;

- Change the Right Shift key to Enter(since it's quite big)
- Change the Enter key to Backspace(Since backspace is usually above enter)

It's basically negating the functionality of right shift key because I never use the right shift key. So, to get the scancode(decimal value) of the Enter key, we need to execute;

```no
	root@machine: showkey

	keycode 28 press
	keycode 28 release
```

The decimal value of the Enter/Return key is 28. You can also get this value another way by running `dumpkeys` which would dump keyvals into standard output.

### # Step: 2

Now, to get the hex value of the shift key, we need to add the `-s` flag with showkey command. The `-s` flag tells showkey to print out hex values of the key press and release values.

```no
	root@machine: showkey -s

	0x36 0xb6
```

So, the `0x36` is the keypress value and `0xb6` is the key release value.

### # Step: 3

So, to assign the hex values of right shift keys to `Return/Enter` keycode values(decimal) you would have to run;

```2
	root@machine: setkeycodes 0x36 28
```
.code2

That should be it. Now the shift key will behave like a Return/Enter key. This will be applied systemwide. However, this is not persistent. You can just place the last code into a shell script for convenience and can also put it into a init script to run it at startup.

### # Step: 4

To make it a init service, place the init script in somewhere like `/usr/local/bin/customkeys.sh` then place the `customkeys.service` service file in `/etc/systemd/system/` as

```3
	root@machine: touch /etc/systemd/system/customkeys.service
```
.code3

Then add the following lines in it;

```4
	[Unit]
	Description: Keymaps

	[Service]
	Type=oneshot
	NoNewPrivileges=yes
	User=root
	ExecStart=/usr/local/bin/customkeys.sh

	[Install]
	WantedBy=multi-user.target
```
.code4

Then run;

```5
	systemctl enable customkeys.service
```
.code5

to enable the service. If you have rc as init service, then just reference it in your `rc.local` file.

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
