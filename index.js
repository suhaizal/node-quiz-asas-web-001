const http = require('http');

const reqHandler = (req, res) => {
	res.write('hello');
	res.end();
};

const serverErrHandler = (err) => {
	console.log(err);
};

const reqEvtHandler = (req, res) => {
	console.log(`Request URL: ${req.url}`);
};

const processTermHandler = () => {
	process.exit();
	console.log('\nCaptured termination signal: server shutting down');
};

//set server options
const serverOptions = { 
	port: 8080  // set server to listen to port 8080
};

const serverListenerHandler = () => {
	console.log(`Server is listening at port ${serverOptions.port}\nPress Ctrl+C to terminate.`);
};

const server = http.createServer(reqHandler);

server.on('error', serverErrHandler);

process.on('SIGINT', processTermHandler);

server.listen(serverOptions, serverListenerHandler);
