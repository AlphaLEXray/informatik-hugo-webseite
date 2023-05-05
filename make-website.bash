#!/bin/bash
test -d ../abitur-electron-app
dirvar=$(echo $?)
if [ $dirvar == 0 ]
then
	rm -rf website-files/*
	cd hugo/
	hugo -d ../website-files/
else
	test -d ../hugo
	dirvar=$(echo $?)
	if [ $dirvar == 0 ]
	then
		rm -rf ../website-files/*
		hugo -d ../website-files/
		#sed -i '10i\\    <link rel="canonical" href="https://alphalexray.github.io/informatik-hugo-webseite-hosting" />' ../website-files/index.html
		#sed -i '11i\\    <link rel="manifest" href="/informatik-hugo-webseite-hosting/manifest.webmanifest">' ../website-files/index.html
		#sed -i '84i\\ <script>' ../website-files/index.html
		#sed -i '85i\\   if (navigator.serviceWorker) {' ../website-files/index.html
		#sed -i '86i\\     navigator.serviceWorker.register (' ../website-files/index.html
		#sed -i "87i\\       '/informatik-hugo-webseite-hosting/sw.js', " ../website-files/index.html
		#sed -i "88i\\       {scope: '/informatik-hugo-webseite-hosting/'} " ../website-files/index.html
		#sed -i '89i\\     ) ' ../website-files/index.html
		#sed -i '90i\\   } ' ../website-files/index.html
		#sed -i '91i\\ </script> ' ../website-files/index.html
		#cp ../manifest.webmanifest ../website-files/
		#cp ../sw.js ../website-files/
		#cp ../icon.png ../website-files/images/
		#touch ../website-files/css/styles.css
		#touch ../website-files/js/app.js
		#rm -rf ../../informatik-hugo-webseite-hosting/*
		#cp -r ../website-files/* ../../informatik-hugo-webseite-hosting/
	fi
fi
