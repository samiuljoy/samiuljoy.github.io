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

### # What is a RSS reader

 [RSS](https://en.wikipedia.org/wiki/RSS) is a form of web feed. Rss reader fetches headlines/content from a website and displays it. It makes it easy to get headlines/articles from a website without actually visiting it from your browser. It's very minimalist, fast and to the point.

### # Importance

One of the main advantages of Rss readers is that you can aggregate feeds/links from different sites and display them properly on your reader software. This makes navigation easy, saves time and also you don't have to suffer through watching weird adds on their websites or where after 2 minutes they ask you to sign into their website for further reading which is very invasive.

* Aggregation of multiple web feeds into one place
* You don't have to visit their website to fetch/read articles
* Saves loads of time, more efficient on your device resource

Big news sites like BBC, Guardian, Forbes all have their rss feeds which is good. You can copy the rss links to your rss reader and your reader will parse those for you. YouTube also supports rss feeds too, you can visit a users youtube page, then say for example, you want rss feeds for MKBHD, so his channel's rss link would look something like this

```1
	https://www.youtube.com/feeds/videos.xml?user=marquesbrownlee
```
.code1

Now all channels don't necessarily follows this specific format, however if you are unable to fetch using the `user=` tag you can also use `channel_id` for example, to subscribe to Anton Petrov, a youtuber making content on NASA, space and more, you can use channel id like this

```2
	https://www.youtube.com/feeds/videos.xml?channel_id=UCciQ8wFcVoIIMi-lfu8-cjQ
```
.code2

Rss is such a minimalistic and useful thing, it's actually amazing. Actually a blessing to say the least. Also you can check [this](https://github.com/plenaryapp/awesome-rss-feeds/) repo out for some important rss links.

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

