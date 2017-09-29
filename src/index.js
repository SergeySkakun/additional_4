module.exports = function multiply(first, second) {
  // записать число в массив задом наперед, порядков номер числа будет означать степень домножения на 10.
  // затем два массива перемножить с перерасчетом десятков записать их в новый массив.

  let arrFirst = first.split('');
  let arrSecond = second.split('');
  let arrResult = [];

  arrSecond.reverse();

  for (let i = 0; i < arrSecond.length; i++) {
    let arr = [];
    arr = arrFirst.map(function(elem) {
      return arrSecond[i] * elem;
    });
    arrResult.push(arr);
  }

  arrResult.forEach(function(elem){elem.reverse()});

  for (let i = 1; i < arrResult.length; i++)
  {
    for (let l = 0; l < i; l++)
    arrResult[i].unshift(0);
  }

  arrResult.reverse()

  aRe = [];
  aRe.push(arrResult[arrResult.length - 1][0]);

  for(let i = 1; i < arrResult[0].length; i++) {
    let prom = 0;
    for (let l = 0; l < arrResult.length; l++) {
      if (arrResult[l][i] == undefined) continue;
      prom += arrResult[l][i];
    }
    aRe.push(prom);
  }
  
  remainder = 0;
  for (let i = 0; i < aRe.length || remainder != 0; i++) {
    if (remainder != 0) {
      if (aRe[i] == undefined) aRe[i] = remainder;
      else aRe[i] += remainder;
      remainder = 0;
    }
  
    if (aRe[i] >= 10) {
      remainder = Math.trunc(aRe[i]/10);
      aRe[i] = aRe[i]%10;
    }
  }

  return aRe.reverse().join('');
}
