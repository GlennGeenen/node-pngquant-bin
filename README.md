# node-pngquant-bin

pngquant Node.js wrapper that makes it seamlessly available on Windows and Mac OS X.
Most of the ideas are taken from [node-optipng-bin](https://github.com/yeoman/node-optipng-bin) module.

## Getting Started
Install the module with: `npm install node-pngquant-bin`

```javascript
var pngquantPath = require('node-pngquant-bin').path;
```

## Documentation
_(Coming soon)_

## Examples
```javascript
var pngquantPath = require('node-pngquant-bin').path,
	execFile = require('child_process').execFile;

execFile(pngquantPath, ['256', '--', 'imagefile.png'], function() {
	// image is optimized and renamed to imagefile-fs8.png
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 0.1.0: Initial release without Linux support

## License
Copyright (c) 2013 Matthias Zaunseder
Licensed under the MIT license.

