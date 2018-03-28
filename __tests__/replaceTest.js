import {oneElem, createElem} from '../index.js';

test('replace', () => {
    document.body.innerHTML = '<div><span id="span"></span></div>';

    const newElem = createElem('div');
    newElem.innerHTML = 'changed';

    oneElem('#span').replace(newElem);
    expect(document.body.innerHTML).toBe('<div><div>changed</div></div>');
});
