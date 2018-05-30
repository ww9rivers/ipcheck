# ipcheck.js

To use the code (assuming that node.js and npm are installed):

```shell
$ git clone git@git.umms.med.umich.edu:weiwang-public/ipcheck.js.git
$ cd ipcheck.js
$ npm install
$ node index.js
```

To build production package:

```shell
$ sudo npm install -g webpack
$ webpack
```

That builds the `dist/server/ipcheck.js` bundle, minified, ready to be deployed to a production server.