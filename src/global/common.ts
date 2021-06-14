export function slugify(text: string) {
  if (!text) {
    return '';
  }
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function compare<T>(prop?: keyof T, dir = 1) {
  return (a: T, b: T) => {
    const valA = prop ? a[prop] : a;
    const valB = prop ? b[prop] : b;
    return valA > valB ? dir : valA < valB ? -dir : 0;
  };
}
