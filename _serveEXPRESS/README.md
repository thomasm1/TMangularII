## npm   
  "scripts": {
    "prestart": "babel-node buildScripts/startMessage.js",
    "start": "npm-run-all --parallel security-check open:src lint:watch test:watch start-mockapi",
    "open:src": "babel-node buildScripts/srcServer.js",
    "lint": "esw webpack.config.* src buildScripts --color",
    "lint:watch": "npm run lint -- --watch",
    "security-check": "nsp check",
    "localtunnel": "lt --port 3000",
    "share": "npm-run-all --parallel open:src localtunnel",
    "test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch",
    "generate-mock-data": "babel-node buildScripts/generateMockData",
    "prestart-mockapi": "npm run generate-mock-data",
    "start-mockapi": "json-server --watch src/api/db.json --port 3001",
    "clean-dist": "rimraf ./dist && mkdir dist",
    "prebuild": "npm-run-all clean-dist test lint",
    "build": "babel-node buildScripts/build.js",
    "postbuild": "babel-node buildScripts/distServer.js",
    "deploy": "surge ./dist"
  },

## WEBPACK

#### PUBLIC SERVERS
 ----------------------
 localtunnel, ngrok, Surge, now
------localtunnel------ ->easiest, most versatile
 npm install localtunnel -g
[start app, then] 
lt --port 3000
------ngrok------easy, secure
install, install authtoken, start app, ./ngrok http 80
-----now-------no firewall hole, hosting persists
npm install -g now
create start script
now
-----Surge------No firewall hole, hosting persists
move static files to their public URL
npm install -g surge
surge
#### Starter Webpack2==> <script src="https://gist.github.com/coryhouse/d611e83e432f3ae65cc46ebb9b599930.js"></script>
