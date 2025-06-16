+++++++++++++++++head
.title: Generate Captive Portals
.author: Samiul Joy
.description: Learn how to generate captive portal on Apache web servers
.style: ..//css/maind.css
.style: ..//css/main.css
.name-generator: Captive Portals on Apache2 web server
.canonical-link: https://samiuljoy.github.io/microblog/captive.html
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

.ce header2: Generate Captive Portals

This is a quick tutorial on how to generate captive portal pages on Apache web servers.

 **Step 01:** On `/var/www/html/` create a file named index.html with your captive portal username and password fields.

 **Step 02:** Then, on the pc where Apache is running, migrate to /etc/apache2/sites-enabled/ and edit a filename called 000-default.conf
 
 **Step 03:** Place the following lines on the end of 000-default.conf

```1
	<Directory "/var/www/html">
	RewriteEngine On
	RewriteBase /
	RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
	RewriteRule ^(.*)$ http://%1/$1 [R=301,L]

	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d

	RewriteRule ^(.*)$ / [L,QSA]
	</Directory>
```
.code1

__Description:__ There's not much to describe here. There's been use of some clear regular expressions to replace every page starting with anything(^.\*) to the captive portal page(index.html) on establishing connection.

 **Step 04:** Then restart apache2 service, and you're all set.

__Note:__ The Rewrite\* depends on a plugin called **rewrite** and in most cases this plugin is disabled by default, so to enable it you'd have to type in from the shell the following command as root;

```2
	# a2enmod rewrite
```
.code2

.hr

-------------main

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
