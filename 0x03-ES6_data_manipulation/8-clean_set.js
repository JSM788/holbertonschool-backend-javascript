export default function cleanSet(set, startString) {
  if (!startString || typeof startString === 'undefined' || startString.length <= 0 || startString === ' ') return '';
  const array = [...set];
  const newArray = array.filter((item) => typeof item === 'string' && item !== undefined && item !== ' ' && item && item.startsWith('bon'));
  // newArray = [ 'bonjovi', 'bonaparte', 'bonappetit' ]
  const result = newArray.map((item) => item.split('bon').pop());
  // result = [ 'jovi', 'aparte', 'appetit' ]
  return result.join('-');
}
