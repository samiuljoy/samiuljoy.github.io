+++++++++++++++++head
.title: About ssg
.author: Samiul Joy
.description: A brief introduction to ssg
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Brief introduction to ssg
.canonical-link: https://samiuljoy.github.io/demo/ssg.html
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
.ce header1: Static Site Generator

## # What is ssg?

 [ssg](https://github.com/samiuljoy/ssg) is a static site generator written in shell script. This program can basically take in files written in markdown format and convert them into proper html format that you can later deploy on your websites or your servers. All you need is a properly formatted `config.txt` file and you are ready to go. This article does not elaborate on configuring ssg or the formating of config.txt file. Please see the [github](https://github.com/samiuljoy/ssg) instructions for configuring and using ssg, alternatively you can also read [this](cmdline.html) if you're getting started

For reference you can see [this](https://github.com/samiuljoy/samiuljoy.github.io) sites source code and all the markdown files in it, and how they are arranged and how they work. You can also watch a demo video on ssg, [here](https://www.youtube.com/watch?v=W9qleSpFd20) is the link to youtube.

## # What can it be used for?

For converting markdown files into html files. Markdown files are easy to write compared to html ones as they require you to have tags and brackets and all sorts of styling and things. Here, you write documents in clear and elegant markdown format and ssg does the heavy work for you and adds tags and html codes to convert the markdown file into html.

Not only that, with a proper directory structure provided in a config file, you can arrange a whole website structure pretty easily and quickly.

## # Why should you use it?

Well, you can use it if;

#. You're converting a file from markown to html
#. You're deploying a website and want to create file structure automatically
#. If you dont love writing html files and love markdown files
#. If you love speed and efficiency
#. If you're interested in writing a small self hosting blog with minimal footprint in a GNU/Linux environment.

## Should I try it?

Depends on you. No harm in trying tho.

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

