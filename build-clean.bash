#!/bin/bash
test -d ../abitur-electron-app
dirvar=$(echo $?)
if [ $dirvar == 0 ]
then
	rm -rf electron/src/content/*
	cd hugo/
	hugo -d ../electron/content/
else
	test -d ../hugo
	dirvar=$(echo $?)
	if [ $dirvar == 0 ]
	then
		rm -rf ../electron/sr/content/*
		hugo -d ../electron/src/content/
	fi
fi
