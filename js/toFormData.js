export default function toFormData(data) {
  if (data instanceof FormData) {
    return data;
  }

  const fd = new window.FormData();

  // eslint-disable-next-line
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      fd.append(key, data[key]);
    }
  }

  return fd;
}
