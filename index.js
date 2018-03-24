import './js/prototype/Element.js';
import './js/prototype/ElementCss.js';
import './js/prototype/ElementAnimate.js';
import './js/prototype/HTMLDocument.js';
import './js/prototype/NodeList.js';
import './js/prototype/Window.js';

export {allElem, oneElem, ready} from './js/selector.js';

export const createElem = (tagName) => {
    return document.createElement(tagName);
};
