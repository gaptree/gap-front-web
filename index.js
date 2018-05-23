import './js/prototype/Element.js';
import './js/prototype/ElementEvent.js';
import './js/prototype/ElementCss.js';
import './js/prototype/ElementAnimate.js';
import './js/prototype/Event.js';
import './js/prototype/HTMLDocument.js';
import './js/prototype/HTMLElement.js';
import './js/prototype/Node.js';
import './js/prototype/NodeList.js';
import './js/prototype/Window.js';

export {allElem, oneElem} from './js/selector.js';

export const createElem = (tagName) => {
    return document.createElement(tagName);
};

export const ready = (fun) => document.ready(fun);
export {Loader} from './js/Loader.js';
export {toFormData} from './js/toFormData.js';
