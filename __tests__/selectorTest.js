import {allElem, oneElem} from '../index.js';

test('allElem & oneElem', () => {
  let count = 0;

  document.body.innerHTML = `
    <div class="query">1</div>
    <div class="query">2</div>
  `;

  allElem('.query').map(elem => {
    count++;
    expect(parseInt(elem.innerHTML)).toBe(count);
  });

  expect(parseInt(oneElem('.query').innerHTML)).toBe(1);
});
