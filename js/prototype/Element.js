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

/*
Not support by Edge, ie ..
pt.one = function(types, handler) {
    types.split(' ').map(type => {
        this.addEventListener(type, handler, {once: true});
    });
};
*/

pt.setVal = function(val) {
    /*
    if (this.value === undefined) {
        return;
    }
    */

    if (val === undefined) {
        return;
    }

    this.value = val;

    switch(this.tagName.toLowerCase()) {
    case 'input':
        this.setAttribute('value', val);
        break;

    case 'select':
        this.oneElem(`option[value="${val}"]`).selected = true;
        break;

    case 'textarea':
    default:
        this.innerHTML = val;
    }
};

pt.getVal = function() {
    return this.value;
};
