+++++++++++++++++head
.title: A simple number guessing game writen in shell script
.author: Samiul Joy
.description: A simple number guessing game where you get to guess 2 digit numbers
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: guess.sh
.canonical-link: https://samiuljoy.github.io/microblog/guess.html
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
.ce header1: ./guess.sh

This here is a simple bash game where you guess a 2 digit number, but is it confined to only guessing the 2 digits? hmm...

Also, this is my first game in bash script.

__For it to execute properly, you'll need another bash script named ho. ^.^__

.ce header2: guess.sh

```1
	#!/bin/bash
	well=$(echo $RANDOM | cut -b "1-2")
	exec 2>/dev/null
	
	while true; do
	echo -e "\nI'm thinking of a number, can you guess what it is?"
	read number
	if [[ "$number" == "" ]]; then
	    echo -e "\nAhh breaking the loop ain't we?"
	    sleep 1
	    echo -e "\nWhat are you upto lately? "
	    read programming
	    case "$programming" in
	        "programming") echo -e "\nThat's so cool! Me too!"
	            ;;
	            *) echo -e "\nThat's cool!"
	            ;;
	    esac
	    sleep 1
	    echo -e "\nI've been into programming and pythons lately"
	    sleep 2
	    echo -e "\nHmm "
	    echo
	    ./ho.sh
	    echo -e "\nI've been into turmoils lately... :c"
	    sleep 2
	    echo -e "\nHopefully get a better grip on my life..."
	    sleep 2
	    echo -e "\nI will be leaving for college soon"
	    sleep 2
	    echo -e "\nTell me about you perhaps on curious.queries@gmail.com?"
	    sleep 2
	    echo -e "\nFarewell c:"
	    sleep 2
	    echo -e "\nThis was written at 3 pm on January 31st, 2020 on Android 5.1.1 with an app called termux and with vim editor"
	    echo -e "\nHopefully you have a wonderful rest of your day"
	    break
	    exit 0
	    else
	    if [[ "$number" -lt "$well" ]]; then
	        echo -e "\nThe number you guessed is lower than the actual value.."
	    else
	        if [[ "$number" -gt "$well" ]]; then
	            echo -e "\nThe number you guessed is higher than the actual value..."
	        else
	            if [[ "$number" = "$well" ]]; then
	                echo -e "\nYou got it right!!"
	                echo -e "\nWanna play again?[yes/no] "
	                read answer
	                case "$answer" in
	                    yes|y) ./guess.sh
	                        ;;
	                    no|n) echo -e "\nProgram ends"
	                        ;;
	                    *) echo -e "\nInvalid input... exiting program"
	                        ;;
	                esac
	                break
	            fi
	        fi
	    fi
	fi
	done
```
.code1

You can save this as guess.sh and don't forget to chmod u+x the script. The ho.sh script is below, save it as ho.sh under the same directory as guess.sh, the chmod +x ho.sh, and you're good to go.

.ce header2: ho.sh

```2
	#!/bin/bash
	runtime="4 second"
	endtime=$(date -ud "$runtime" +%s)
	while [ "$(date -u +%s)" -lt "$endtime" ]; do
		printf "." $(sleep .5); printf "." $(sleep .5); printf "."$(sleep 0.5);
		echo
	done
```
.code2

The idea of creating this came while I was reading a book called "Python Crash Course" by Erric Matthes, where the intro goes like this..

> "I wrote my first program on a kit computer my dad had assembled in our basement. The computer consisted nothing more than a bare motherboard connected to a keyboard without a case, and it had a bare cathode ray tube for a monitor. My initial program was a simple number guessing game, which looked something like this


```no
	I'm thinking of a number, try to guess the number I'm thinking of: 25
	Too low! Guess again: 50
	Too high! Guess again: 42
	That's it. Would you like to play again? (Yes/No) no
	Thank's for playing
```


> I'll always remeber how satisfied I felt watching my family play a game I created."

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

