let obj = {
  a: 'f',
  b: 78,
  c: 'R',
  d: {
    a: {
      a: null,
      b: 'E',
      c: {
        a: true,
        b: 'C',
        c: 'test'
      },
      d: 'U'
    },
    b: {
      a: 'R',
      b: ['S', 4, 6, 'I'],
      c: 0,
    },
    c: ['O'],
    d: null,
    e: 'N'
  }
}

let capitalLetters = (object) => {
  let result = '';
  for (let letter of Object.values(object)) {
      if (letter === String(letter)) {
        if (letter == 'A' || letter == 'B' || letter == 'C' || letter == 'D' || letter == 'E' || letter == 'F' || letter == 'G' || letter == 'H' || letter == 'I' || letter == 'J' || letter == 'K' || letter == 'L' || letter == 'M' || letter == 'N' || letter == 'O' || letter == 'P' || letter == 'Q' || letter == 'R' || letter == 'S' || letter == 'T' || letter == 'U' || letter == 'V' || letter == 'W' || letter == 'X' || letter == 'Y' || letter == 'Z') {
          result += letter;
        }
      } else if (typeof letter === 'object' && letter !== null && letter !== undefined) {
          result += capitalLetters(letter);
      }
  }
  return result;
}

let onlyCapitalLetters = capitalLetters(obj);
console.log(onlyCapitalLetters);