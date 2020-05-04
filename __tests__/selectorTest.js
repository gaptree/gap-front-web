import { allElem, oneElem } from '..';

const RADIX = 10;

test('allElem & oneElem', () => {
  let count = 0;

  document.body.innerHTML = `
    <div class="query">1</div>
    <div class="query">2</div>
  `;

  allElem('.query').forEach((elem) => {
    count += 1;
    expect(parseInt(elem.innerHTML, RADIX)).toBe(count);
  });

  expect(parseInt(oneElem('.query').innerHTML, RADIX)).toBe(1);
});
