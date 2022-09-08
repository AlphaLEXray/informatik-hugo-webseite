# Welcome to the Hugo folder

This is the Hugo part of the project. Here all the content is created and organised.

## Basic commands

To create a new chapter:
```
hugo new --kind chapter name/_index.md
```

To create a new subcategory
```
hugo new name/categoryname/_index.md or another-file.md
```

## Publish Hugo content to Electron

To publish the changes made in Hugo go to the root of the `lern-electron-app` folder and use this command:
```
hugo -d electron
```

Then navigate to the `electron` folder and run the app to see the changes:
```
cd electron
npm start
```