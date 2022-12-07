export default function cleanSet(set, startString) {
  if (!startString || typeof startString === 'undefined') return '';
  const array = [...set];
  const newArray = array.filter((item) => item !== undefined && item.startsWith(startString));
  // newArray = [ 'bonjovi', 'bonaparte', 'bonappetit' ]
  const result = newArray.map((item) => item && typeof startString !== 'undefined' && item.split(startString).pop());
  // result = [ 'jovi', 'aparte', 'appetit' ]
  return result.join('-');
}
