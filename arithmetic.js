function arithmetic(a, b, operator){
  //your code here!
  switch (operator) {
    case 'add':
      return a + b;
      break;
    case 'subtract':
      return a - b;
      break;
    case 'multiply':
      return a * b;
      break;
    case 'divide':
      return a / b;
      break;
  }
}

console.log(arithmetic(8, 2, "subtract"));