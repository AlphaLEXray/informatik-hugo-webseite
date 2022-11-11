#!/bin/bash
test -d ../abitur-electron-app
dirvar=$(echo $?)
if [ $dirvar == 0 ]
then
cd hugo/
hugo -d ../electron/content/
fi
test -d ../hugo
dirvar=$(echo $?)
if [ $dirvar == 0 ]
then
hugo -d ../electron/content/
fi
