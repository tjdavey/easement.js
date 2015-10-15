/* ============================================================
 * Easement.js - A range of reusable easing functions for various purposes.
 * 
 * This library uses the same naming conventions as jQuery UI's effects easing
 * and Robert Penner's book and associated easing equations.
 * 
 * Functions are derived from Penner's book Programming Macromedia Flash MX
 * http://www.robertpenner.com/easing/
 * 
 * Copyright (c) 2014, Tristan Davey
 * All rights reserved.
 * 
 * Licenced under the BSD 3-Clause Licence.
 * https://raw.github.com/tjdavey/easement.js/master/LICENSE
 * ======================================================== */

(function() {
  var easement = {
    _defaults: {
      startValue: 0,
      endValue: 1,
      startTime: 0,
      endTime: 1
    },
    easings: {
      easeInQuad: function (time) {
        return Math.pow(time, 2);
      },
      easeOutQuad: function (time) {
        return -(time * (time - 2));
      },
      easeInOutQuad: function (time) {
        if (time < 0.5) return Math.pow(time, 2) * 2;
        return -((time - 1) * (time * 2 - 2) - 1);
      },
      easeInCubic: function (time) {
        return Math.pow(time, 3);
      },
      easeOutCubic: function (time) {
        return Math.pow(time - 1, 3) + 1;
      },
      easeInOutCubic: function (time) {
        if (time < 0.5) return Math.pow(time, 3) * 4;
        return (Math.pow(time - 1, 3) * 4 + 1);
      },
      easeInQuart: function (time) {
        return Math.pow(time, 4);
      },
      easeOutQuart: function (time) {
        return -(Math.pow(time - 1, 4) - 1);
      },
      easeInOutQuart: function (time) {
        if (time < 0.5) return Math.pow(time, 4) * 8;
        return -(Math.pow(time - 1, 4) * 8 - 1);
      },
      easeInQuint: function (time) {
        return Math.pow(time / 1, 5);
      },
      easeOutQuint: function (time) {
        return (Math.pow(time - 1, 5) + 1);
      },
      easeInOutQuint: function (time) {
        if (time < 0.5) return Math.pow(time, 5) * 16;
        return (Math.pow(time - 1, 5) * 16 + 1);
      },
      easeInSine: function (time) {
        return 1 - Math.cos(time / 1 * (Math.PI / 2));
      },
      easeOutSine: function (time) {
        return Math.sin(time / 1 * (Math.PI / 2));
      },
      easeInOutSine: function (time) {
        return 0.5 * (1 - Math.cos(Math.PI * time / 1));
      },
      easeInExpo: function (time) {
        return Math.pow(2, 10 * (time - 1));
      },
      easeOutExpo: function (time) {
        return (-Math.pow(2, -10 * time) + 1);
      },
      easeInOutExpo: function (time) {
        if (time < 0.5) return 0.5 * Math.pow(2, 10 * (time * 2 - 1));
        return 0.5 * (-Math.pow(2, -10 * (time * 2 - 1)) + 2);
      },
      easeInCirc: function (time) {
        return (1 - Math.sqrt(1 - time * time));
      },
      easeOutCirc: function (time) {
        return Math.sqrt(1 - (time -= 1) * time);
      },
      easeInOutCirc: function (time) {
        if (time < 0.5) return 0.5 * (1 - Math.sqrt(1 - (time * 4) * time));
        return 0.5 * (Math.sqrt((1 - (time -= 1) * time * 4)) + 1);
      }
    },
    ease: function (easing, currentTime, options){
      // Set any options defaults required.
      if (!options) options = {};
      for (defaultKey in this._defaults) {
        if (!(defaultKey in options)) {
          options[defaultKey] = this._defaults[defaultKey];
        }
      }

      if (this.easings[easing]) {
        // Set the easing function based off the string reference if given.
        easing = this.easings[easing];
      } else if (!(easing && easing.constructor && easing.call && easing.apply)) {
        // If we haven't been given a valid string or function throw an error.
        throw new Error('`easing` must be function or string reference to an easement easing function');
      }

      // Validate the options to avoid programming errors.
      for (optionKey in options) {
        if (isNaN(options[optionKey])) {
          throw new Error('`options.' + optionKey + '` must be set to an numerical value');
        }
      }

      if (currentTime < options.startTime) {
        // Short circuit for times before the startTime
        return options.startValue;
      } else if (currentTime > options.endTime) {
        // Short circuit for times after the startTime
        return options.endValue;
      } else {
        // Return the easing result
        var deltaValue = options.endValue - options.startValue;
        var deltaTime = options.endTime - options.startTime;
        return options.startValue+easing((currentTime - options.startTime)/deltaTime) * deltaValue;
      }
    }
  };

  if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
          exports = module.exports = easement;
      }
  } else {
      this.easement = easement;
  }
  
}())