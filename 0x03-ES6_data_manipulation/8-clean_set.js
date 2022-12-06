export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    const array = [...set];
    const newArray = array.filter((item) => typeof item === 'string' && item !== undefined && item && item.startsWith('bon'));
    // newArray = [ 'bonjovi', 'bonaparte', 'bonappetit' ]
    const result = newArray.map((item) => item.split('bon').pop());
    // [ [ '', 'jovi' ], [ '', 'aparte' ], [ '', 'appetit' ] ].pop()
    // result = [ 'jovi', 'aparte', 'appetit' ]
    return result.join('-');
  }
  return '';
}
