var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var compiler = require('./json-to-reactJSX')
var fs = require('fs')
var Stream = require('stream')
var archiver = require('archiver')

var app = express()
app.use(cors());
app.use(bodyParser.json())

app.post('/compile', function(req, res) {
	console.log('\ncompile request')
	
	let dataTree = req.body
	let comp = compiler()
	let reactCode = comp.toReact(dataTree)

	let archive = archiver.create('zip')
	let transform = new Stream.Transform()
	let template = fs.createReadStream(__dirname + '/tmp/template.js')

	transform._transform = function(chunk, encoding, done) {
		chunk = chunk.toString().replace('<remplace_here/>', reactCode)
		this.push(chunk)
		done()
	}

	archive.directory(__dirname + '/proyect_name', '')
	archive.append(template.pipe(transform), {name: 'src/pages/home.js'})
	archive.finalize();
	
	res.setHeader("Content-Type", 'application/x-compressed-tar')
	archive.pipe(res);
})

app.listen(3000, function() {
	console.log('Listening on magic port 3000')
})