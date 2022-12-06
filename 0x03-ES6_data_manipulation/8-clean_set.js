export default function cleanSet(set, startString) {
  if (!startString) return '';
  const array = [...set];
  const newArray = array.filter((item) => item !== undefined && item.startsWith('bon'));
  // newArray = [ 'bonjovi', 'bonaparte', 'bonappetit' ]
  const result = newArray.map((item) => item.split('bon').pop());
  // result = [ 'jovi', 'aparte', 'appetit' ]
  return result.join('-');
}
