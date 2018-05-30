const bodyParser = require('body-parser')
const express = require('express')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    let xip = req.ip.replace(/^::ffff:/, '')
    res.json({
	IP: xip,
	browser: req.headers['user-agent']
    })
})

app.listen(5001, () => console.log('Example app listening on port 5001!'))
