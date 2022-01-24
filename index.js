const bodyParser = require('body-parser');
const CIDRMatcher = require('cidr-matcher');
const express = require('express');

let config;
try {
	const fs = require('fs');
	const path = require('path');
	fs.readFile(path.resolve(__dirname, 'ipcheck-config.json'), (err, data) => {
    		if (!err) {
			config = JSON.parse(data);
			if (config.subnets) {
				config.subnets.forEach((x, i) => {
					config.subnets[i].subnet = new CIDRMatcher([x.subnet]);
				});
			}
		}
	});
} catch (err) {
	console.error('Error occured loading configuration.');
	config = { subnets: [] };
}
const app = express();

function subnet_lookup (cip) {
	let subnet = config.subnets.find(x => x.subnet.contains(cip));
	return subnet ? subnet.name : null;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
	let client_ip = req.ip.replace(/^::ffff:/, '');
	let subnet = subnet_lookup(client_ip);
	res.send([
		"<html><head><title>HITS IP Checker</title></head>",
		'<body style="text-align:center; font-family:Verdana; background-color:#00274c; color:#ffcb05;">',
		'<h1>Your IP is: </h1><p style="font-size:larger;font-weight:400;">',
		client_ip,
		'</p><div style="font-size:x-small;font-weight:100;">Browser:<br/>',
		req.headers['user-agent'],
		"</div>",
		subnet ? `<p>You are on <span style="text-decoration: underline #0f0">${subnet}</span></ap>` : '',
		"</body></html>"
	].join(''));
});

app.listen(5001, () => console.log('App ipcheck listening on port 5001!'));
