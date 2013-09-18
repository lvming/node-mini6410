var leds = require('../lib/leds.js');

describe("leds", function(){
    it("flash", function(done){
	var i = 0;
	var h = setInterval(function(){
	    for(var j=0;j<4;j++) {
		if(i % 4 == j) {
		    leds.ledOn(j);
		} else {
		    leds.ledOff(j);
		}
	    }
	    i++;
	    if(i > 15) {
		clearInterval(h);
		done();
	    }
	}, 100);
    });
})
