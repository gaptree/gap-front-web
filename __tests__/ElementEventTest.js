import {createElem} from '../index.js';

test('ElementEvent', () => {
  const div1 = createElem('div');
  const div2 = createElem('div');

  document.body.appendChild(div1);
  document.body.appendChild(div2);

  let tpl1 = 0;
  let tpl2 = 0;

  div1.cb('click', () => tpl1 += 1);
  div1.cb('click', () => tpl1 += 2);
  div1.cb('click', () => tpl1 += 3);

  div2.on('click', () => tpl2 += 1);
  div2.on('click', () => tpl2 += 2);
  div2.on('click', () => tpl2 += 3);

  div1.click();
  div2.click();

  expect(tpl1).toBe(3);
  expect(tpl2).toBe(6);
});
