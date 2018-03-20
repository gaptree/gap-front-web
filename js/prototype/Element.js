const pt = Element.prototype;

// selector
pt.allElem = pt.querySelectorAll;
pt.oneElem = pt.querySelector;

// remove
pt.remove = function () {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
};

// show
pt.show = function() {
    // todo
    // if element default display is inline, like `span`
    //this.style.display = 'block';
    this.style.display = null;
};

// hide
pt.hide = function() {
    this.style.display = 'none';
};

// event
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
pt.on = function(types, handler, useCapture) {
    types.split(' ').map(type => {
        if (this.addEventListener) {
            this.addEventListener(type, handler, useCapture);
        } else if (this.attachEvent) {
            this.attachEvent('on' + type, handler);
        }
    });
    return this;
};

pt.stop = function() {
    if (this.stopPropagation) {
        this.stopPropagation();
    }
    this.cancelBubble = true;
};

pt.cancel = function() {
    if (this.preventDefault) {
        this.preventDefault();
    } else {
        this.returnValue =false;
    }
};

/*
Not support by Edge, ie ..
pt.one = function(types, handler) {
    types.split(' ').map(type => {
        this.addEventListener(type, handler, {once: true});
    });
};
*/
