+++++++++++++++++head
.title: Emulating login mechanism
.author: Samiul Joy
.description: Emulating login mechanism on a Linux System with shell scripts
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: login.sh
.canonical-link: https://samiuljoy.github.io/microblog/login.html
-------------------head

++++navigation
.homepage: [home](..//index.html)
.navmenu: roam
.navpage: [demo](..//demos/base.html)
.navpage: [microblog](..//microblog/base.html)
.navpage: [theology](..//theology/base.html)
.navpage: [academics](..//academics/base.html)
.backpage: [base](base.html)
----------navigation

++++++++++++++++main
.ce header1: ./login.sh && ./username.sh

I was curious about the way a simple command like "passwd" and "adduser" worked on a Linux system. It basically saves the password in a ,,,/etc/shadow,,, file and encrypts it using secure hashing algorithms with salting involved. Now what if we try to do the same(not the same, but something similar) with a shell script? Wouldn't that be fun?

Let's try to emulate the whole mechanism.

1. A new user types in "adduser" and a username prompt appears asking the user to put in their name.
2. If that username is already taken, tells the user that the username is already taken and to type in a different name. Else adds the new username and then asks for their password.
3. If the password field is blank, tells the user to put in a legit password.
4. Then saves the username::password in the /etc/shadow file followed by hashes.
5. Then at the time of login, a user types in their username and password.
6. If the typed in password matches with that of the saved hash in /etc/shadow, then user can log in, else exit.

__I'm assuming you are somewhat knowledgeable in shell scripting.__
	
.ce header2: Script 1: username.sh

__Description:__ What it basically does is that, it saves your name and your password in a file called mango.txt, and the next time you try logging in, the login.sh script pulls the data from mango.txt and compares that with input password.
	
.ce header2: ./username.sh

```1
	#!/bin/sh
	
	# What I'm planning to do here is that, create a useradd script which allows a user to add themselves by puting in their names
	# and their password. This will save the username::password to a file called mango.txt and prompt at each login by running
	# the login.sh script If username already exists, notifies the user that a user with the same name exits, else add 
	# the new user along with a password. The password is saved in a md5sum form.
	
	exec 2>/dev/null
	echo -n "Enter username: "
	read usame
	
	if [ "$usame" == "" ]; then echo -e "Username can not be blank\n"
	    ./username.sh
	else
	    grep -q $usame mango.txt
	    if [ "$?" == 0 ]; then
	    echo -e "A username with the same name already exists\n"   
	    ./username.sh
	    else
	        echo -n "Password: "
	        read -s -p "Password: " passwd
	        while true; do
	            if [ "$passwd" == "" ]; then
	                echo "Password can not be blank\n"
	        else
	            echo $usame::$(echo $passwd | md5sum) >> mango.txt
	            echo -e "\nUser $usame added\n"
	        break
	            fi
	        done
	    fi
	fi
```
.code1

.ce header2: Script 2: login.sh


__Description:__ Now this script actually needs the mango.txt to work, else logging in will be impossible(just a prior warning; this is just a simple emulation as to how the same thing can be achieved with a shell script..don't just put it in your shell startup though..things will get damn messy at some point..)

.ce header2: ./login.sh


```2
	#!/bin/sh
	
	# A simple login bash script
	#trap interrupts your keyboard if you press ctrl+z or ctrl+c
	trap '' INT TSTP
	
	read -p "Enter username: " usname
	grep -q $usname mango.txt
	
	if [ "$?" -gt 0 ]; then
	    echo "Username not found"
	    sleep 1
	    pkill -9 bash
	else
	    read -s -p "Password: " password
	    if [ "$password" == "" ]; then 
	        echo "Password can not be blank"
	        ./login.sh
	    else
	        #saves the password in md5sum format in tmp.txt
	        echo $password | md5sum > tmp.txt
	        #assigning a tmp variable which reads the tmp.txt
	        tmp="$(cat tmp.txt)"
	        #if the md5 hashes match, then allow login saying yo
	        cat mango.txt | grep -q $usname::$tmp
	        if [ "$?" == 0 ]; then
	            echo -e "\nyo"
	            #else print login failed
	        else
	            echo -e "\nLogin failed"
	            sleep 1
	            pkill -9 bash
	        fi
	    fi
	fi
	rm tmp.txt
```
.code2

Now this is actually nowhere near the way that works in a real Linux OS, however, the rest is up to you and how you use it.

Before writing this post I also asked a question on Unix stack exchange about this script and how it worked on a Linux system, and got some good suggestions. Turns out that I can use `openssl` to actually induce salting.

For this, you need to have `openssl` installed on your OS. If you're on a debian based system, chances are `openssl` is already installed on your system. If not you can always run `apt install openssl` from your preferred terminal. If you're on a macOS, you can install `openssl` using `brew install openssl` from your terminal. Once you have `openssl` installed, then we can begin

Now, to induce salting, with `openssl` there's a one liner command; <br>


```3
	openssl passwd -6 -salt xyz yourpassword
```
.code3

`openssl` will generate a password followed by the `passwd` command. The number -6 indicates sha512sum character output, where -1 will generate a md5sum character output and -5 will generate a sha256sum character output. The -salt flag will tell the output to randomize the characters based on the input characters, in this case xyz. One way to test this out is to replace xyz with any other character and the output will be different. Replace yourpass with whatever password you choose. The same thing can be obtained with python3 like so;


```4
	import crypt
	print(crypt.crypt("yourpasswd", crypt.mksalt(crypt.METHOD_SHA512)))
```
.code4

Save this in a file like passwd.py and use `python3 passwd.py` to run the script from your terminal.

This can also be issued as a one liner command, like so;


```5
	python3 -c 'import crypt; print(crypt.crypt("yourpasswd", crypt.mksalt(crypt.METHOD_SHA512)))'
```
.code5

What this will do is generate salted characters off of "yourpasswd" randomized with sha512sum checksum and output it to the terminal. You have to have Python3 installed prior to running this script. Linux and macOS comes with Python pre-installed. However, that might not always be the case. to install Python3 on Linux like OS, you can use your package manager to download and install Python3. On macOS, you can follow [this](https://docs.python-guide.org/starting/install3/osx) tutorial.

The python3 script will produce a different output on every run, which will make it impossible to verify the checksums. I haven't figured a proper way ti mitigate this issue, but for now let's use this script instead


```6
	import crypt
	crypt.crypt('password', '$6$' + 'salt1234')
```
.code6


A more easier way would be to do it with `mkpasswd` from within bash. To generate sha512sum characters from given "password"


```7
	mkpasswd -m sha-512 -S salt1234 password
```
.code7

Now, to \`code\` include this in our scripts __username.sh__ and __login.sh__ we just have to replace some variables with either the `openssl` or `mkpasswd` or `python`

.ce header2: Salting with `mkpasswd`

On line 34 of the script `username.sh` we can replace 


```8
	echo $usame::$(echo $passwd | md5sum) >> mango.txt
```
.code8

with this line, if you plan to use mkpasswd.


```9
	echo $usame::$(mkpasswd -m sha-512 -S salt1234 $passwd) >> mango.txt
```
.code9

Now on line 24 of `login.sh` you need to replace


```10
	echo $password | md5sum > tmp.txt
```
.code10

with


```11
	echo $(mkpasswd -m sha-512 -S salt1234 $password) > tmp.txt
```
.code11


Same results can be achieved with `openssl` and `python`. The python one needs a bit of extra work. Well, let's see if you can figure out how to implement the python part. Let me know if you do, you know how to reach me. Good luck ^_^

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

