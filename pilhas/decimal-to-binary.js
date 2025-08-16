const { Stack } = require('./stack-object')

function decimalToBinary(decNumber) {
  const stack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while(number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem)
    number = Math.floor(number / 2);
  }

  while(!stack.isEmpty()){
    binaryString += stack.pop().toString();
  }
  return binaryString;
}

console.log(decimalToBinary(233))
console.log(decimalToBinary(10))
console.log(decimalToBinary(95))
console.log(decimalToBinary(423))
console.log(decimalToBinary(154))
console.log(decimalToBinary(5))
console.log(decimalToBinary(623))

