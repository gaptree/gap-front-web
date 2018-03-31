import './prototype/HTMLDocument.js';

const allElem = (selector) => document.querySelectorAll(selector);
const oneElem = (selector) => document.querySelector(selector);

export {allElem, oneElem};
