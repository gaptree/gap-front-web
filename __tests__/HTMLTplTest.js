import { oneElem, createElem } from '..';

test('html tpl', () => {
  document.body.innerHTML = `
        <div class="some-elem"></div>
    `;

  const elem = oneElem('.some-elem');
  const childArr = [
    createElem('div'),
    createElem('p'),
    '<ul>',
    [createElem('li'), createElem('li')],
    '</ul>',
  ];

  // eslint-disable-next-line
  elem.html`
    <p>hell world</p>
    ${childArr}
    <input>
  `;

  expect(elem.innerHTML).toBe(
    '<p>hell world</p> <div></div><p></p><ul><li></li><li></li></ul> <input>'
  );
});
