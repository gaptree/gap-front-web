import {oneElem, createElem} from '../index.js';

test('html tpl', () => {
    document.body.innerHTML = `
        <div class="some-elem"></div>
    `;

    const elem = oneElem('.some-elem');
    const childArr = [
        createElem('div'),
        createElem('p'),
        '<ul>',
        [
            createElem('li'),
            createElem('li')
        ],
        '</ul>'
    ];
    
    elem.html`
        <p>hell world</p>
        ${childArr}
        <input>
    `;

    expect(elem.innerHTML).toBe(
        '<p>hell world</p> <div></div><p></p><ul><li></li><li></li></ul> <input>'
    );
});
