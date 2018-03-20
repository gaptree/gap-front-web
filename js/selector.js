import 'gap-front-prototype';

const allElem = (selector) => document.querySelectorAll(selector);
const oneElem = (selector) => document.querySelector(selector);
const ready = (fun) => document.ready(fun);

export {allElem, oneElem, ready};
