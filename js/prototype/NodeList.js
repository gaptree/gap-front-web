const pt = NodeList.prototype;

if (!pt.forEach) {
    pt.forEach = Array.prototype.forEach;
}

pt.map = Array.prototype.map;
