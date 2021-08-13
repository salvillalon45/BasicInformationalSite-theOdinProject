const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/index.html', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/contact-me.html', function (req, res) {
	res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get('/about.html', function (req, res) {
	res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('*', function (req, res) {
	res.status(404).sendFile(path.join(__dirname, '/404.html'));
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
