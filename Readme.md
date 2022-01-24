# ipcheck.js

To use the code (assuming that node.js and npm are installed):

```shell
$ git clone <this-git-repo> ipcheck
$ cd ipcheck
$ npm install
$ node index.js
```

To build production package:

```shell
$ sudo npm install -g webpack
$ webpack
```

That builds the `dist/server/ipcheck.js` bundle, minified, ready to be deployed to a production server.

## Configuration

An optional configuration file, ```ipcheck-config.json``` is added to allow subnet lookup.

```json
{
	"subnets": [
		{ "subnet": "10.20.192.0/19",	"name": "Subnet-name-1"	},
		{ "subnet": "11.22.160.0/19",	"name": "Subnet-name-2"	}
	]
}
```

## Cheange Log

* [2022-01-24] Version 2.0.0
* [2022-01-20] Provides more feed back to user: If a user is on the VPN, lookup the VPN name by IP subnet.

# Author

Wei Wang <WW@9Rivers.com>
