+++++++++++++++++head
.title: Samiul Ahmed Joy's posts
.author: samiuljoy
.description: This site shares Samiul Ahmed Joy's random posts. 
.style: ./css/maind.css
.style: ./css/main.css
.name-generator: About page
.canonical-link: https://samiuljoy.github.io/
-------------------head

++++navigation
.homepage: [home](./index.html)
.navmenu: roam
.navpage: [demo](./demo/base.html)
.navpage: [microblog](./microblog/base.html)
.navpage: [projects](projects/base.html)
.navpage: [academics](academics/base.html)
.backpage: [about](./about.html)
----------navigation

++++++++++++++++main
.ce header2: About this site

The primary objective was to showcase the [ssg demo pages](demo/base.html). ssg is a static site generator that I wrote from scratch in shell script. This whole site is generated with ssg. More details on [here](https://github.com/samiuljoy/ssg). Then thought a blog page would be nice supposedly. So micro blog page is over [here](microblog/base.html).

### # About me

A final year student of plant science. Did a thesis on the effects of auxin on _Rauvolfia tetraphylla_. You can read the abstract [here](assets/abstract2.pdf) and more [here](academics/thesis.html) Also found out the hard way that the plant _Abroma augustum_ can hardly tolerate water logged conditions. Read [here](academics/abromaaugustum.html). Other than plant stuff, I also like to fiddle around with computer stuff. I like solving/automating mundane tasks with scripting languages like shell scripting and python. Aside from these, I also do occassional website designing and some typing jobs (can type upto 90 wpm on average) as a freelancer. I'm mainly a linux user and have been since 2014, am very comfortable with platforms and terms such as Linux, CLI, raspberry pi, arduino and so on. I also took some online free classes regarding networking and firewalls, so I know a bit or two about setting up firewalls and networking equipments on Office, SoHo (Small office Home office) and the tools required for proper connection isolation and traffic control of packets for individual devices on a network. I wrote some programs over the years, you can check them out at my github

### {id="contact"} # Other stuff

 /* This is a comment for now #. kaggle -> [kaggle.com/samiuljoy](https://www.kaggle.com/samiuljoy) */

#. New Github -> [github.com/samiulahmedjoy](https://www.github.com/samiulahmedjoy)

#. Old Github -> [github.com/samiuljoy](https://www.github.com/samiuljoy)

#. New Kaggle -> [kaggle.com/samiulahmedjoy](https://kaggle.com/samiulahmedjoy)

#. Old Kaggle -> [kaggle.com/samiuljoy](https://kaggle.com/samiuljoy)

#. Rss feed -> [rss.xml](https://samiuljoy.github.io/rss.xml)

Mail me on this address if you can figure out what this is;

```no
	#!/usr/bin/env sh

	first_portion="samiul"
	last_portion="ahmedmail"

	address="gmail.com"
	where="@"

	# Send me email through this address
	echo "$first_portion$last_portion$where$address"
```

.hr
----------------main

++++++++++++++++footer
.message: Made with <3 by [samiuljoy](https://github.com/samiuljoy) | [rss](rss.xml)
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
