#!/usr/bin/env sh

# Global Variables
config_file="config.txt"
html_converted_names="html_values.txt"
rss_file="rss.xml"

# Basic rss info about site
site_title="$(sed -n '/^++.*title/,/^--.*title/p' $config_file | \
	grep -v "^++.*\|^--.*")"

site_description="$(sed -n '/^++.*description/,/^--.*description/p' $config_file | \
	grep -v "^++.*\|^--.*")"

site_link="$(sed -n '/^++.*sitelink/,/^--.*sitelink/p' $config_file | \
		grep -v "^++.*\|^--.*")"

config_startline="$(grep -n -o "^+++.*sitemap" $config_file | \
	echo "$(( $(cut -d ':' -f1) + 1 ))")"
config_endline="$(grep -n -o "^---.*sitemap" $config_file | \
	echo "$(( $(cut -d ':' -f1) - 1 ))")"

files="$(sed -n $config_startline,$config_endline'p' config.txt | \
	grep -o "^.*\/.*.md$" | grep -v "base.md")"

# Fill up with basic stuff
cat <<EOF> $rss_file
<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
xmlns:content="http://purl.org/rss/1.0/modules/content/"
xmlns:wfw="http://wellformedweb.org/CommentAPI/"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:atom="http://www.w3.org/2005/Atom"
xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
xmlns:media="http://search.yahoo.com/mrss/" >
<channel>
<title>$site_title</title>
<description>$site_description</description>
<language>en-us</language>
<link>$site_link/rss.xml</link>
<atom:link href='$site_link/rss.xml' rel='self' type='application/rss+xml' />
<!-- content starts here -->
EOF

for i in $files; do
	html_extension="$(echo $i | sed "s/\.md$/.html/g")"
	date_val="$(grep -o -m 1 "<div class=.date.>.*<\/div>$" $html_extension | \
		sed 's/.*>\(.*\)<.*/\1/g')"
	title_val="$(grep -o -m 1 "<title>.*<\/title>$" $html_extension)"
	description_val="$(grep -o -m 1 "<meta name=.description..*>$" $html_extension | \
		sed 's/^.*content=.\(.*\).>/\1/g')"
	content_start="$(grep -n -o -m 1 "^<main id=" $html_extension | \
		echo "$(( $(cut -d ':' -f1) + 1 ))")"
	content_end="$(grep -n -o -m 1 "^<\!-- main section end" $html_extension | \
		cut -d ':' -f1)"
	website_link="$(echo "$site_link/$html_extension")"
	echo "" >> $rss_file
	echo "<item>" >> $rss_file
	echo "\t<pubDate>$date_val</pubDate>" >> $rss_file
	echo "\t$title_val" >> $rss_file
	echo "\t<link>$website_link</link>" >> $rss_file
	echo "\t<description><![CDATA[ $description_val ]]></description>" >> $rss_file
	echo "\t<content:encoded><![CDATA[" >> $rss_file
	sed -n $content_start,$content_end'p' $html_extension | sed 's/^/\t/g' >> $rss_file
	echo "\t]]>" >> $rss_file
	echo "\t</content:encoded>" >> $rss_file
	echo "</item>" >> $rss_file
	echo "" >> $rss_file
done

echo "</channel>" >> $rss_file
echo "</rss>" >> $rss_file
