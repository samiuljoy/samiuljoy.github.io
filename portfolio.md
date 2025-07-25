+++++++++++++++++head
.title: Portfolio of Samiul Ahmed Joy
.author: Samiul Ahmed Joy
.description: This is a portfolio page about Samiul Ahmed Joy showcasing different things he has worked on
.style: ./css/maind.css
.style: ./css/main.css
.name-generator: This is a portfolio page about Samiul Ahmed Joy showcasing different projects he has worked on in the past
.canonical-link: https://samiuljoy.github.io/portfolio.html
-------------------head

++++navigation
.homepage: [home](./index.html)
.navmenu: roam
.navpage: [demo](./demo/base.html)
.navpage: [microblog](./microblog/base.html)
.navpage: [projects](./projects/base.html)
.navpage: [academics](./academics/base.html)
.navpage: [theology](../theology/base.html)
.backpage: [portfolio](./portfolio.html)
----------navigation

++++++++++++++++main
.ce header2: Samiul Ahmed Joy

.ce header3: [ Research Motivated | Avid Linux User | IoT Automation ]

.br

## # About me

Motivated and detail-oriented Plant Science graduate student with a decent foundation in Plant Biology and Research Methodologies. Proficient in Computer Programming, scripting languages (Python, Bash), Linux-based automation to enhance data analysis, streamline research workflows and Website Designing. Adept at developing custom scripts, settings up firewalls, iptables, automating tasks with IoT, and optimizing processes for efficiency. A collaborative team player with problem-solving and analytical skills, committed to advancing Agricultural and Environmental sustainability through innovative research and efficiency.

## # Skills

* Computer Programming

* An average typing speed of 80-90 wpm

* Data Analysis

* Office Suite Programs

* Linux + IoT Automation

* Networking, Firewall, Iptables, Subnetting

* Academic Research and Excerpt Writing

## # Experience

### # Research Experience

 *2021 - 2024*

Conducted an independent [research](academics/abromaaugustum.html) on *Abroma augustum* plant against water-logging and academic [research](academics/thesis.html) on optimized growth in *Rauvolfia tetraphylla* by testing different Auxin hormone concentrations. Gained hands-on experience with soil preparation, planting, hormone application, sample collection, and laboratory testing while following strict protocols. Assisted professors with literature reviews, performed lab experiments, wrote a thesis and contributed to herbarium specimen evaluation and data analyses as part of academic studies.

### # Technological Experience

Experienced Linux user since 2014 with expertise in Command Line Interface (CLI), Networking, Subnetting, Iptables and Web Designing (HTML, CSS, JS). Proficient in Shell Scripting(made a [static site generator](https://samiuljoy.github.io/demo/base.html)), semi-proficient in Python, and familiar with C/C++. Skilled in Statistical analysis using Excel and Data Visualization with Python's Matplotlib module. Proficient in various software tools, including Microsoft Office Suite, LibreOffice, Git, R Studio, VIM, BioPython. Comfortable with IoT devices such as RaspberryPi, Arduino, Esp8266 and other single-board computers, with additional skills in transcription, copywriting, article writing and relatively fast typing.

### # Networking & Firewall Management

Worked on SoHo firewall setup using iptables and advanced tools like `tc` for traffic control of packets.

### # Router Boards

Have hands-on experience with reputable router boards such as TP-Link, D-Link, Cudy + accessing router shells through UART and DMSC CLI management in advanced router boards.

### # Android Analysis

Android being based off of Linux kernel, gave me a huge advantage into exploring/getting to know the system better. My experience includes(but not limited to);

#. Gained root shells on vulnerable armv7 devices using exploits that creates overflows on specific mediatek chipsets

#. Dnscrypt proxy for secure DNSSEC requests to DNS services -> read [here](microblog/vpn_tether.html)

#. Shell scripts to emulate human-like browser navigation -> read [here](microblog/emulate.html)

### # Website Designing

Can design both static and dynamic websites along with backend management, SQL/database management + firewall.

## # Projects

### # Static Site Generator(ssg)

Wrote a static site generator from scratch in shell script. SSG basically simplifies website creation for Linux/GNU users who are well versed in CLI. See the project source code [here](https://github.com/samiuljoy/ssg)

### # Theological CLI tools

Wrote 3 theology based CLI tools. These are;

#. [Quran](https://github.com/samiuljoy/quran) - Read English translation of the Holy Quran from the terminal. 

#. [Hadith](https://github.com/samiulahmedjoy/hadith) - Read and search English translations from the 6 main books of hadith

#. [HisnulMuslim](https://github.com/samiulahmedjoy/hisnulmuslim) - Read the English translations of daily dua's and zikrs from your terminal

### # Python IRC bot

Created a chatbot in Python programming language for irc protocol. This chatbot automates google search excerpts, shows weather status and more. The source code is availble [here](https://github.com/samiuljoy/pyircbot)

### # IoT Coding

These projects involve using IoT devices like Arduino, Esp dev boards, RaspberryPI for task automation

#. Made a remote controlled WiFi off/on switch for ease of access for Old People. The project can be found [here](https://github.com/samiulahmedjoy/irremote)

#. Made an automated system that monitors plant water level and sends data through email when water level is below threshold. The project can be found [here](https://github.com/samiulahmedjoy/plantmanagement)


### # Exam Websites

I made some small local websites in a short period of time for high school/college students to participate and take exams. I added features like automatic time countdown and used localstorage + javascript to implement anti-cheats.

### # Custom Vim Color-schemes

Made some modifications to vim color-schemes. The projects can be found [here](https://github.com/samiuljoy/vim-dark-colorschemes) and [here](https://github.com/samiuljoy/customized-miramare)

## # Awards

### - National Science and Technology Awards (2022)

The most prestigious fellowship awarded by The Ministry of Science and Technology, Bangladesh.

### - Chittagong University Scholarship Awardee (2017)

The University of Chittagong awarded this scholarship for achieving good results in the Higher Secondary Examination.

## # Contact Me

#. Email: samiulahmedmail -> Google Mail

#. Github: [@samiulahmedjoy](https://github.com/samiulahmedjoy) & [@samiuljoy](https://github.com/samiuljoy)

#. Website: https://samiuljoy.github.io

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
.script: ./js/toggle.js
-----------add

