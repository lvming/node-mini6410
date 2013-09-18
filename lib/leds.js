"use strict";

var fs = require('fs'),
    ioctl = require('bindings')('ioctl.node');

exports.ledOn = function(num) {
    var fd = fs.openSync('/dev/leds', 'r+');
    ioctl.ioctlSync(fd, 1, num);
    fs.closeSync(fd);
};

exports.ledOff = function(num) {
    var fd = fs.openSync('/dev/leds', 'r+');
    ioctl.ioctlSync(fd, 0, num);
    fs.closeSync(fd);
};
