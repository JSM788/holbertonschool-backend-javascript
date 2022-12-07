export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    const array = [...set];
    const newArray = array.filter((item) => typeof item === 'string' && item !== undefined && item && item.startsWith(startString));
    const result = newArray.map((item) => item.split(startString).pop());
    return result.join(' ');
  }
  return '';
}
