


## creating webpack project from scratch
initialize new npm project (create new package.json)
````
npm init
```
in the project folder create dist and src folder

inside dist create css and js folder

inside src create js and scss folder
create main.js inside js and main scss inside scss




install webpack
```
npm install webpack
node_modules and package-lock.json is created
npm install webpack-cli
but before put the dev and production script inside package.json (script)

=>>>>>>
"scripts": {
    "dev": "webpack --mode development ./src/js/main.js --output ./dist/js/main.js",
    "production": "webpack --mode production ./src/js/main.js --output ./dist/js/main.js"
  },
  =>>>>>>>>

```

