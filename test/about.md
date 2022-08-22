+++++++++++++++++head
.title: About this site
.author: samiuljoy
.description: About this site
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
.navpage: [theology](theology/base.html)
.navpage: [academics](academics/base.html)
.backpage: [about](./about.html)
----------navigation

++++++++++++++++main
.ce header2: About this site

The primary objective was to showcase the [ssg demo pages](demo/base.html). ssg is a static site generator that I wrote from scratch in shell script. This whole site is generated with ssg. More details on [here](https://github.com/samiuljoy/ssg). Then thought a blog page would be nice supposedly. So micro blog page is over [here](microblog/base.html).

### {id="contact"} # Others

#. kaggle -> [kaggle.com/samiuljoy](https://www.kaggle.com/samiuljoy)

#. github -> [github.com/samiuljoy](https://www.github.com/samiuljoy)

#. Rss feed -> [rss.xml](https://samiuljoy.github.io/rss.xml)

Mail me on this address if you can figure out what this is;

```no
	#!/usr/bin/env sh

	first_portion="samiul"
	last_portion="joy46"

	address="yahoo.com"
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
