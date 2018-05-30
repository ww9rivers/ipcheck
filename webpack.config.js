module.exports = [
    {
	name: 'server',
        entry: './index.js',
	target: 'node',
	mode: "production",
	output: {
	    path: __dirname + '/dist/server',
	    filename: 'ipcheck.js',
	}
    }
];
