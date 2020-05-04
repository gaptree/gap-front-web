const pt = Element.prototype;

// selector
pt.allElem = pt.querySelectorAll;
pt.oneElem = pt.querySelector;

// show
pt.show = function show() {
  // todo
  // if element default display is inline, like `span`
  // this.style.display = 'block';
  this.style.display = null;
};

// hide
pt.hide = function hide() {
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

pt.setVal = function setVal(val) {
  /*
    if (this.value === undefined) {
        return;
    }
    */

  if (val === undefined) {
    return;
  }

  this.value = val;

  switch (this.tagName.toLowerCase()) {
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

pt.getVal = function getVal() {
  return this.value;
};
