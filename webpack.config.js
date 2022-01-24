module.exports = [
    {
	name: 'server',
        entry: './index.js',
	target: 'node',
	mode: "production",
	optimization: {
		minimize: true
	},
	output: {
	    path: __dirname + '/dist',
	    filename: 'ipcheck.js',
	},
	stats: {
		errorDetails: true
	}
    }
];
