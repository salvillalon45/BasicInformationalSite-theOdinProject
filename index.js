const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (request, response) {
	// Get url and set up variables
	const pathName = request.url;
	let fileName = '';

	if (pathName === '/contact-me.html') {
		fileName = 'contact-me.html';
	} else if (pathName === '/index.html') {
		fileName = 'index.html';
	} else if (pathName === '/about.html') {
		fileName = 'about.html';
	} else {
		fileName = '404.html';
	}

	// Read file
	fs.readFile(fileName, function (err, data) {
		if (err) {
			// We can get an error if the file passed in does not exist
			console.log('ERROR');
			response.writeHead(404, { 'Content-Type': 'text/html' });
			response.write('404 Errors');
			return response.end();
		}

		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(data);
		return response.end();
	});
});

server.listen(8080, function () {
	console.log('Listening on port 8080');
});
