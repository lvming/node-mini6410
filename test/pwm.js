var pwm = require('../lib/pwm.js');

describe("pwm", function(){
    it("tone", function(done){
	var i = 0;
	var h = setInterval(function(){
	    pwm.setFreq(i*1000);
	    i++;
	    if(i > 10) {
		pwm.stop();
		clearInterval(h);
		done();
	    }
	}, 100);
    });
})
