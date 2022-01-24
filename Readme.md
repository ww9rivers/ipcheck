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
		{ "subnet": "_IPv4-CIDR/range-1_",	"name": "_Subnet-name-1_"	},
		{ "subnet": "_IPv4-CIDR/range-2_",	"name": "_Subnet-name-2_"	}
	]
}
```

## Cheange Log

* [2022-01-24] Version 2.0.0
* [2022-01-20] Provides more feed back to user: If a user is on the VPN, lookup the VPN name by IP subnet.

# Author

Wei Wang <WW@9Rivers.com>
