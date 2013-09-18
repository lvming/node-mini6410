"use strict";

var fs = require('fs');

exports.brightness = function(percent) {
    var b = 100 * percent;
    if(b < 0) {
	b = 0;
    }
    if(b > 127) {
	b = 127;
    }
    var buffer = new Buffer(""+b);
    var fd = fs.openSync('/dev/backlight-1wire', 'r+');
    fs.writeSync(fd, buffer, 0, buffer.length, null);
    fs.closeSync(fd);
};
