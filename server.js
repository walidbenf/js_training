const http = require('http');
const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Coucou');
	}
});
server.listen(3000,() => console.log('Server running on port 3000'));