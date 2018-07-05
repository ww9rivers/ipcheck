const bodyParser = require('body-parser')
const express = require('express')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
    res.send([
	"<html><head><title>HITS IP Checker</title></head>",
	'<body style="text-align:center; font-family:Verdana; background-color:#00274c; color:#ffcb05;">',
	'<h1>Your IP is: </h1><p style="font-size:larger;font-weight:400;">',
	req.ip.replace(/^::ffff:/, ''),
	'</p><div style="font-size:x-small;font-weight:100;">Browser:<br/>',
	req.headers['user-agent'],
	"</div></body></html>"
    ].join(''))
})

app.listen(5001, () => console.log('App ipcheck listening on port 5001!'))
