function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length) {
    result = arr1.every(function check(number,i){return number === arr2[i]}); 
  } else result = false;
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(function check3(number){return number % 3 === 0 }).filter(function checkp(number){return number > 0 }).map(function multiplication(number){return number*10});
  return resultArr; // array
}
