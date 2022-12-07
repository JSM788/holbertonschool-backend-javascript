export default function cleanSet(set, startString) {
  if (startString === undefined || typeof startString === 'undefined') return '';
  const arr = [...set];
  const newArr = arr.filter((item) => item && item !== undefined && item.startsWith(startString));
  const result = newArr.map((item) => item !== undefined ? item.slice(startString.length));
  return result.join('-');
}
