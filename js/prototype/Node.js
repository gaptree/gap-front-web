const pt = Node.prototype;

// replace with
pt.replace = function(node) {
    if (!(node instanceof Node)) {
        throw new Error('node must be Node');
    }
    if (!this.parentNode) {
        throw new Error('cannot find parentNode');
    }

    this.parentNode.replaceChild(node, this);
};

// remove
pt.remove = function () {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
};

