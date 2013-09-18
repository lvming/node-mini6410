"use strict";

var PWM_IOCTL_SET_FREQ = 1;
var PWM_IOCTL_STOP = 0;

var fs = require('fs'),
    ioctl = require('bindings')('ioctl.node');

exports.setFreq = function(freq){
    var fd = fs.openSync('/dev/pwm', 'r+');
    var ret = ioctl.ioctlSync(fd, PWM_IOCTL_SET_FREQ, freq);
    fs.closeSync(fd);
    return ret;
};

exports.stop = function(){
    var fd = fs.openSync('/dev/pwm', 'r+');
    var ret = ioctl.ioctlSync(fd, PWM_IOCTL_STOP, 0);
    fs.closeSync(fd);
    return ret;
};
