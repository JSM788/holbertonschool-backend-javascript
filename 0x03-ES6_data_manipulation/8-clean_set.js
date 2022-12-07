export default function cleanSet(set, startString) {
  if (startString === undefined || typeof startString === 'undefined') return '';
  const arr = [...set];
  const newArr = arr.filter((item) => item && item !== undefined && item.startsWith(startString));
  // newArray = [ 'bonjovi', 'bonaparte', 'bonappetit' ]
  const result = newArr.map((item) => item.slice(startString.length));
  // result = [ 'jovi', 'aparte', 'appetit' ]
  return result.join('-');
}
