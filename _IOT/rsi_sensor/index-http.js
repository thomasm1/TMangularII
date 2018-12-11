const express = require('express');

const app = express();
const portName = 80;
const myName = 'Thomas';

app.get('/', (req, res) => res.send(`<h2>hello ${myName}</h2>`));
app.listen(portName, () => console.log(`Listtening on port ${portName}`));