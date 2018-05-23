const pt = HTMLElement.prototype;


let index = 0;
let elems = [];

const tpl = (strs, ...items) => {
    const raw = strs.raw;
    let res = '';

    items.forEach((item, index) => {
        const str = raw[index];

        res += str;
        res += parseItem(item);
    });

    res += raw[raw.length - 1];
    return res.replace(/\s+/g, ' ').trim();
};

const parseItem = (item) => {
    if (Array.isArray(item)) {
        item = item.map(sub => parseItem(sub))
            .join('');
    }
    if (item instanceof Node) {
        item = createHolder(item);
    }
    /*
    if (item && item.ctn instanceof HTMLElement) {
        item = createHolder(item.ctn);
    }
    */
    if (!item) {
        item = '';
    }
    return item;
};

const createHolder = (elem) => {
    elems[index] = elem;
    const html = `<input type="hidden" class="gap-node-holder" value="${index}">`;
    index++;
    return html;
};

pt.html = function(strs, ...items) {
    index = 0;
    elems = [];

    this.innerHTML = tpl(strs, ...items);
    this.allElem('.gap-node-holder').forEach(
        holder => holder.replace(elems[parseInt(holder.value)])
    );
};
