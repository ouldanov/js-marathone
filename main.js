const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function compareString(string1, string2) {
  let firstRowACount = 0;
  let secondRowACount = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1.charAt(i) === 'а' || string1.charAt(i) === 'А') {
      firstRowACount++;
    }
  }
  for (let i = 0; i < string2.length; i++) {
    if (string2.charAt(i) === 'а' || string2.charAt(i) === 'А') {
      secondRowACount++;
    }
  }
  return firstRowACount > secondRowACount ? string1 : string2;
}

alert(compareString(firstRow, secondRow));