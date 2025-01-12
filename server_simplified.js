require('http') // importer le module
.createServer((req, res) => { // créé le serveur
	res.end('Coucou');
})
.listen(3000); // on listen le port