// Pesquisa
// Temos duas opções para pesquisa: o método indexOf, que devolve o
// índice do primeiro elemento correspondente ao argumento passado, e
// lastIndexOf, que devolve o índice do último elemento encontrado,
// correspondente ao argumento passado. Vamos retomar o array numbers
// que estávamos usando antes:
console.log('------------ PESQUISA ------------')
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));
numbers.push(10);
console.log(numbers.lastIndexOf(10)); // devolve o índice do primeiro 10
console.log(numbers.lastIndexOf(100));

function multilpleOf13 (elem, index, array) {
  return (elem % 13 === 0);
}

console.log(numbers.find(multilpleOf13))// devolve o primeiro elemento que satisfaz a condição
console.log(numbers.findIndex(multilpleOf13)) // devolve o índice do primeiro elemento que satisfaz a condição  
console.log(numbers.includes(15))// true
console.log(numbers.includes(100))// false
const numbersString = numbers.join("'-'");
console.log(numbersString); // devolve uma string com os elementos do array separados por '-'