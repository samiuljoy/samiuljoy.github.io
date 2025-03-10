+++++++++++++++++head
.title: About the importance of RSS feeds
.author: Samiul Ahmed
.description: Its about importance of rss and how rss makes things easy and organized for reading
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: The importance of Rss and how rss makes reading easy and efficient
.canonical-link: https://samiuljoy.github.io/microblog/rss.html
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
.ce header2: RSS readers are awesome

### # What is RSS reader

 [RSS](https://en.wikipedia.org/wiki/RSS) is basically a web feed in a custom piece of software. A rss reader fetches headlines from a website and displays it. It makes it easy to get headlines/articles from a website without actually visiting it from your browser. It's very minimalist, fast and to the point.

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

