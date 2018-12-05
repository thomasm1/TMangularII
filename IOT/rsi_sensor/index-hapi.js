'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const serverHapi = Hapi.server({
    host: 'localhost',
    port: 8000
});

//Add the route.
server.route({
    method:'GET',
    path:'/hello',
    handler: function(request, h) {
	return 'hello world';
    }
});

//Start the server
async function start() {
	
    try {
	await serverHapi.start();
    }
    catch (err) {
  	console.log(err);
	process.exit(1);
    };

start();
