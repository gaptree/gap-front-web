const pt = Event.prototype;

pt.stop = function stop() {
  if (this.stopPropagation) {
    this.stopPropagation();
  }
  this.cancelBubble = true;
};

pt.cancel = function cancel() {
  if (this.preventDefault) {
    this.preventDefault();
  } else {
    this.returnValue = false;
  }
};
