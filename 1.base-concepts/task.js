function solveEquation(a, b, c) {
  let arr = [];
  d = Math.pow((Math.pow(b,2) - 4 * a *c),0.5);
  if (d >= 0) {
    if (d > 0) {
      arr[0] = (- b + d) / (2 * a);
      arr[1] = (- b - d) / (2 * a);
    } else {
      arr[0] = (- b + d) / (2 * a);       
    }
  } 
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount, creditBody, everyMonth;
  if ((!Number.isNaN(Number(percent))) && (!Number.isNaN(Number(contribution))) && (!Number.isNaN(Number(amount)))) {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    creditBody = amount - contribution;
    let months = 12 * (date.getFullYear() - new Date().getFullYear()-1) + 12 + date.getMonth() - new Date().getMonth();
    everyMonth = creditBody * (1/1200*percent + 1/1200*percent/(Math.pow((1 + 1/1200*percent),months) - 1));
    totalAmount = (everyMonth * months).toFixed(2);
    return Number(totalAmount);
  }
  else if (Number.isNaN(Number(percent))){
    totalAmount = 'Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"';
    return totalAmount;
  } else if (Number.isNaN(Number(contribution))){
    totalAmount = 'Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"';
    return totalAmount;
  } else if (Number.isNaN(Number(amount))){
    totalAmount = 'Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"';
    return totalAmount;
  }
}
