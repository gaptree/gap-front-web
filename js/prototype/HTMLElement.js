const RADIX = 10;

const pt = HTMLElement.prototype;

let index = 0;
let elems = [];

const createHolder = (elem) => {
  elems[index] = elem;
  const html = `<input type="hidden" class="gap-node-holder" value="${index}">`;
  index += 1;
  return html;
};

const parseItem = (item) => {
  let str = '';
  if (Array.isArray(item)) {
    str = item.map((sub) => parseItem(sub)).join('');
  } else if (item) {
    if (item instanceof Node) {
      str = createHolder(item);
    } else if (item.getBindedCtn) {
      str = createHolder(item.getBindedCtn());
    } else if (item.ctn) {
      str = createHolder(item.ctn);
    } else {
      str = item;
    }
  }

  return str;
};

const tpl = (strs, ...items) => {
  const { raw } = strs;
  let res = '';

  items.forEach((item, i) => {
    const str = raw[i];

    res += str;
    res += parseItem(item);
  });

  res += raw[raw.length - 1];
  return res.replace(/\s+/g, ' ').trim();
};

pt.html = function html(strs, ...items) {
  index = 0;
  elems = [];

  this.innerHTML = tpl(strs, ...items);
  this.allElem('.gap-node-holder').forEach((holder) =>
    holder.replace(elems[parseInt(holder.value, RADIX)])
  );
};
