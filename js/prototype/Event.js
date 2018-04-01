const pt = Event.prototype;

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

