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

// replace with
pt.replaceWith = function (elem) {
    if (!(elem instanceof HTMLElement)) {
        throw new Error('elem must be HTMLElement');
    }
    if (!this.parentNode) {
        throw new Error('cannot find parentNode');
    }

    this.parentNode.replaceChild(elem, this);
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

pt.setVal = function(val) {
    if (this.value === undefined) {
        return;
    }

    this.value = val;

    switch(this.tagName.toLowerCase()) {
    case 'input':
        this.setAttribute('value', val);
        break;

    case 'textarea':
        this.innerHTML = val;
        break;
    }
};

pt.getVal = function() {
    return this.value;
};
