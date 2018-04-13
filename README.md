# gap-front-web

## Install

```
yarn add gap-front-web
```

## Usage

```js
import {allElem, oneElem, ready} from 'gap-front-web';

oneElem('.elem1').on('click', (event) => {
    console.log('click');
});

allElem('.elem2').forEach(elem => {
    elem.addClass('class1');
    elem.removeClass('class2');

    console.log(elem);
});

ready(() => {
    console.log('dom content has loaded');
});
```

on & cb
```javascript
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
```
