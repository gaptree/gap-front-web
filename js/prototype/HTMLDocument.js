import './Element.js';

const pt = HTMLDocument.prototype;

// selector
pt.allElem = pt.querySelectorAll;
pt.oneElem = pt.querySelector;

pt.s = pt.allElem; // deprecated
pt.elem = pt.oneElem; //deprecated

pt.on = Element.prototype.on;

pt.ready = function (fn) {
    if (this.readyState !== 'loading') {
        fn();
    } else if (this.addEventListener) {
        this.addEventListener('DOMContentLoaded', fn);
    } else {
        this.attachEvent('onreadystatechange', function () {
            if (this.readyState !== 'loading') {
                fn();
            }
        });
    }
};
