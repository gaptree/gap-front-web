import {oneElem, createElem} from '../index.js';

test('replaceWith', () => {
    document.body.innerHTML = '<div><span id="span"></span></div>';

    const newElem = createElem('div');
    newElem.innerHTML = 'changed';

    oneElem('#span').replaceWith(newElem);
    expect(document.body.innerHTML).toBe('<div><div>changed</div></div>');
});
