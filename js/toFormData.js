export function toFormData(data) {
  if (data instanceof FormData) {
    return data;
  }

  let fd;
  let key;

  fd = new window.FormData();

  for (key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      fd.append(key, data[key]);
    }
  }

  return fd;
}
