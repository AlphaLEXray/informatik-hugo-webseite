#!/bin/bash
test -d ../abitur-electron-app
dirvar=$(echo $?)
if [ $dirvar == 0 ]
then
	rm -rf electron/content/*
	cd hugo/
	hugo -d ../electron/content/
else
	test -d ../hugo
	dirvar=$(echo $?)
	if [ $dirvar == 0 ]
	then
		rm -rf ../electron/content/*
		hugo -d ../electron/content/
	fi
fi
