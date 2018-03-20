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
