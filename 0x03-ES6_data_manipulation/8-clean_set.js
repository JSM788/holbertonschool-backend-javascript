export default function cleanSet(set, startString) {
  if (!startString || typeof startString === 'undefined' || startString.length <= 0) return '';
  const array = [...set];
  const newArray = [];
  for (const undf of array) {
    if (undf !== undefined && undf.startsWith('bon')) {
      newArray.push(undf);
    }
  }
  const result = newArray.map((item) => item.slice(startString.length));
  return result.join('-');
}
