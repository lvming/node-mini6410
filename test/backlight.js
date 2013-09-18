var bl = require('../lib/backlight.js');

describe("backlight", function(){
    it("set brightness", function(done){
	var i = 0;
	var h = setInterval(function(){
	    bl.brightness(i/10);
	    i++;
	    if(i > 10) {
		clearInterval(h);
		done();
	    }
	}, 100);
    });
})
