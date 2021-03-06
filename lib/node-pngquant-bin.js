/*
 * node-pngquant-bin
 * https://github.com/zauni/node-pngquant-bin
 *
 * Copyright (c) 2013 Matthias Zaunseder
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

if (process.platform === 'darwin') {
	exports.path = path.join(__dirname, '../vendor/osx', 'pngquant');
} else if (process.platform === 'win32') {
	exports.path = path.join(__dirname, '../vendor/win32', 'pngquant.exe');
} else {
	exports.path = null;
}
