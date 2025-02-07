+++++++++++++++++head
.title: Basic command line rundown
.author: Samiul Joy
.description: This post gives you a basic command line rundown on generating/working with ssg
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: This post gives you a general rundown on using this program from the command line
.canonical-link: https://samiuljoy.github.io/demo/cmdline.html
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
.ce header2: Rundown of ssg

This is a basic rundown/usage of the program ssg from the terminal

### # Step 1

Generate a config file by running `sh main.sh config`. Then edit the config.txt file on your own. For an example config file, you can see [here](https://samiuljoy.github.io/config.txt). Make sure to add a `base.md` page on your first entry to every new page except for about and index page. The need for base.md page is to hold records of the different posts and display them on a dedicated page. For more info about basepage syntax please refer to [here](https://samiuljoy.github.io/demo/basepage.html)

### # Step 2

If you're done editing config.txt file, initialize everything that you've declared on your config file by running `sh main.sh init`. This will create all the files, directories and whatnot

### # Step 3

Now, generate navigation section by running `sh main.sh navgen`. This navigation part just adds home, roam and base buttons on your navigation section

### # Step 4

Now, edit your index.md page. Open your favorite text editor and edit the index.md file. For example index.md reference, see [here](https://samiuljoy.github.io/index.md) and for syntax help please refer to this documentation, [here](https://samiuljoy.github.io/demo/indexpage.html) After done editing the index.md file, just run `sh main.sh index index.md`, which will generate a index.html file.

### # Step 5

Now Edit the base.md page if your article is going to be in a directory such as `blog/firstblog.md`. In such case, first edit `blog/base.md` page with your text editor. For an example see [here](https://samiuljoy.github.io/microblog/base.md) and for syntax documentation, please refer to [here](https://samiuljoy.github.io/demo/basepage.html) Just run `sh main.sh post` and when it asks for the filename, just add `blog/base.md` as the filename

### # Step 6

If you've completed everything above correctly, you can start writing your posts. You can either run `sh main.sh post` and add manual entries to config.txt, blog/base.md file or you could just run `sh main.sh add` and let all your entries by added automatically. It's your choice, depends on use case hence, added both post and add option for for variance.

### # Step 7

Now since you've added all posts and everything, now run `sh main.sh all`. This will generate html pages for all the files mentioned in `config.txt`.

### # Step 8

For convenience you can also run `sh main.sh final` which will copy all the generated html files into a separate sub-directory
### # Step 9

Last but not least, you can also generate rss.xml feeds of all your posts. Just run `sh main.sh rss`

!!![CLI usage](https://www.youtube.com/embed/W9qleSpFd20?si=EYMd2c2WPGfhPTDt)

.caption: Video: Here's a video reference showcasing CLI usage


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

