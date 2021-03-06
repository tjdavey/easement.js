var Easement = require('../easement');
var expect = require('chai').expect

describe('Easement.js', function() {
  describe('ease()', function() {

    var linearEasing = function(time){
      return time
    };

    it('should accept an easing function', function(){
      var result = Easement.ease(linearEasing, 0.5);
      expect(result).to.equal(0.5);
    });

    it('should accept an easing string', function(){
      var result = Easement.ease('easeInCirc', 0.5);
      expect(result).to.equal(0.1339745962155614);
    });

    it('should raise an exception for an invalid easing property', function(){
      expect(function() {
        Easement.ease({}, 0.5);
      }).to.throw(Error);
    });

    it('should a custom startTime and endTime', function(){
      var result = Easement.ease(linearEasing, 150, {startTime: 100, endTime: 200});
      expect(result).to.equal(0.5);
    });

    it('should a custom startValue and endValue', function(){
      var result = Easement.ease(linearEasing, 0.5, {startValue: 100, endValue: 200});
      expect(result).to.equal(150);
    });

    it('should raise an exception for an invalid option property', function(){
      expect(function() {
        Easement.ease(linearEasing, 0.5, {startTime: {}});
      }).to.throw(Error);
    });

    it('should return startValue when current time is less than startTime', function(){
      var result = Easement.ease(linearEasing, 50, {startTime: 100, startValue: 200});
      expect(result).to.equal(200);
    });

    it('should return endValue when current time is less than endTime', function(){
      var result = Easement.ease(linearEasing, 150, {endTime: 100, endValue: 200});
      expect(result).to.equal(200);
    });

  });

  describe('easings', function() {
    for (easingString in Easement.easings){
      describe(easingString+'()', function(){

        var easingFunction = Easement.easings[easingString];

        it('should return an numeric value between 0 and 1', function(){
          var result = easingFunction(0.5);
          expect(result).to.within(0, 1);
        });

        it('should return 0 at minimum time', function(){
          var result = easingFunction(0);
          expect(result).to.within(0, 1);
        });

        it('should return 1 at maximum time', function(){
          var result = easingFunction(1);
          expect(result).to.within(0, 1);
        });
      });
    }
  });
});

