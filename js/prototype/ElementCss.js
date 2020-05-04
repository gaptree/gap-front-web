const pt = Element.prototype;

pt.hasClass = function hasClass(className) {
  let arr;
  if (!className) {
    return false;
  }
  if (this.classList) {
    arr = className.split(' ');
    if (arr.length === 1) {
      return this.classList.contains(className);
    }

    // eslint-disable-next-line
    for (const i in arr) {
      if (!this.classList.contains(arr[i])) {
        return false;
      }
    }

    return true;
  }
  if (this.className) {
    // todo
    return new RegExp(`(^| )${className}( |$)`, 'gi').test(this.className);
  }

  return false;
};
pt.removeClass = function removeClass(className) {
  let arr;
  if (this.classList) {
    arr = className.split(' ');
    if (arr.length === 1) {
      this.classList.remove(className);
    } else {
      arr.forEach((item) => this.classList.remove(item));
    }
  } else if (this.className) {
    // todo
    this.className = this.className.replace(
      new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'),
      ' '
    );
  }
};
pt.addClass = function addClass(className) {
  let arr;
  if (!className) {
    return;
  }
  if (this.hasClass(className)) {
    return;
  }
  if (this.classList) {
    arr = className.split(' ');
    if (arr.length === 1) {
      this.classList.add(className);
    } else {
      arr.forEach((item) => this.addClass(item));
    }
  } else if (this.className) {
    this.className += ` ${className}`;
  } else {
    this.className = className;
  }
};
pt.toggleClass = function toggleClass(className) {
  className.split(' ').forEach((item) => {
    if (this.classList) {
      this.classList.toggle(item);
    } else if (this.hasClass(item)) {
      this.removeClass(item);
    } else {
      this.addClass(item);
    }
  });
};
