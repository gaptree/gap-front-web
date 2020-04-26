const pt = Element.prototype;

// event
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
pt.on = function(types, handler, useCapture) {
  types.split(' ').forEach(type => {
    if (this.addEventListener) {
      this.addEventListener(type, handler, useCapture);
    } else if (this.attachEvent) {
      this.attachEvent('on' + type, handler);
    }
  });
  return this;
};

pt.cb = function(types, handler, useCapture) {
  this._cbDict = this._cbDict || {};
  if (!Object.prototype.hasOwnProperty.call(this._cbDict, types)) {
    this.on(
      types,
      (...args) => {
        const callback = this._cbDict[types]; 
        if (callback) {
          return callback.call(this, ...args);
        }
      },
      useCapture
    );
  }
  this._cbDict[types] = handler;
};
