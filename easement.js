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
    easement = {
        easeInQuad: function (time, duration, offset, change) {
            return change*(time/=duration)*time + offset;
        },
        easeOutQuad: function (time, duration, offset, change) {
            return -change*(time/=duration)*(time-2) + offset;
        },
        easeInOutQuad: function (time, duration, offset, change) {
            if ((time/=duration/2) < 1) return change/2*Math.pow(time, duration, 2) + offset;
            return -change/2 * ((--time)*(time-2) - 1) + offset;
        },
        easeInCubic: function (time, duration, offset, change) {
            return change * Math.pow(time/duration, 3) + offset;
        },
        easeOutCubic: function (time, duration, offset, change) {
            return change * (Math.pow(time/duration-1, 3) + 1) + offset;
        },
        easeInOutCubic: function (time, duration, offset, change) {
            if ((time/=duration/2) < 1) return change/2 * Math.pow(time, duration, 3) + offset;
            return change/2 * (Math.pow(t-2, 3) + 2) + offset;
        },
        easeInQuart: function (time, duration, offset, change) {
            return change * Math.pow(time/duration, 4) + offset;
        },
        easeOutQuart: function (time, duration, offset, change) {
            return -change * (Math.pow(time/duration-1, 4) - 1) + offset;
        },
        easeInOutQuart: function (time, duration, offset, change) {
            if ((time/=duration/2) < 1) return change/2 * Math.pow(time, duration, 4) + offset;
            return -change/2 * (Math.pow(time-2, 4) - 2) + offset;
        },
        easeInQuint: function (time, duration, offset, change) {
            return change * Math.pow(time/duration, 5) + offset;
        },
        easeOutQuint: function (time, duration, offset, change) {
            return change * (Math.pow(t/d-1, 5) + 1) + offset;
        },
        easeInOutQuint: function (time, duration, offset, change) {
            if ((time/=duration/2) < 1) return change/2 * Math.pow(time, duration, 5) + offset;
            return change/2 * (Math.pow(time-2, 5) + 2) + offset;
        },
        easeInSine: function (time, duration, offset, change) {
            return change * (1-Math.cos(time/duration * (Math.PI/2))) + offset;
        },
        easeOutSine: function (time, duration, offset, change) {
            return change * Math.sin(time/duration * (Math.PI/2)) + offset;
        },
        easeInOutSine: function (time, duration, offset, change) {
            return change/2 * (1 - Math.cos(Math.PI * time/duration) ) + offset;
        },
        easeInExpo: function (time, duration, offset, change) {
            return change * Math.pow(2, 10 * (time/duration - 1)) + offset;
        },
        easeOutExpo: function (time, duration, offset, change) {
            return change * (-Math.pow(2, -10 * time/duration) + 1) + offset;
        },
        easeInOutExpo: function (time, duration, offset, change) {
            if ((time/=duration/2) < 1) return change/2 * Math.pow(2, 10 * (time - 1)) + offset;
            return change/2 * (-Math.pow(2, -10 * --time) + 2) + offset;
        },
        easeInCirc: function (time, duration, offset, change) {
            return change * (1 - Math.sqrt(1 - (time/=duration)*time) - 1) + offset;
        },
        easeOutCirc: function (time, duration, offset, change) {
            return change * Math.sqrt(1 - (time=time/duration-1)*time) + offset;
        },
        easeInOutCirc: function (time, duration, offset, change) {
            if ((time/=duration/2) < 1) return change/2 * (1 - Math.sqrt(1 - time*time)) + offset;
            return change/2 * (Math.sqrt(1 - (time-=2)*time) + 1) + offset;
        }
    }
    
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = easement;
        }
    } else {
        this.easement = easement;
    }
  
}())