"use strict";

var fs = require('fs'),
    EventEmitter = require('events').EventEmitter;

var eventSource = new EventEmitter();

var saved = null;


exports.eventSource = eventSource;
exports.watch = function() {
    saved = null;
    stream = fs.createReadStream('/dev/buttons');
    stream.on('data', function(data){
    var old = saved;
    saved = data;
    if(old) {
	for(var i=0; i<old.length;i++) {
	    if(old[i] != data[i]) {
		if(data[i] == 48) {
		    eventSource.emit('keyrelease', i);
		} else if(data[i] == 49) {
		    eventSource.emit('keypress', i);
		}
	    }
	}
    }
});

};
exports.stopWatching = function() {
    if(stream) {
	stream.close();
	saved = null;
    }
};

