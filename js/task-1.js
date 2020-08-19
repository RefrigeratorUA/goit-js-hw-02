const getItemsString = function (array) {
  // Write code under this line
  let resultStr = '';

  for (let i = 0; i < array.length; i += 1) {
    const result = `${i + 1} - ${array[i]}\n`;
    resultStr += result;
  }

  return resultStr;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(getItemsString([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));

/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/
