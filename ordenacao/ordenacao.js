let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let inverse = numbers.reverse().sort(compare); // podemos criar a logica e passar a funcao como parametro
console.log(inverse)

function compare (a, b) {
  if(a < b ){
    return -1
  }
  if(a > b) {
    return 1;
  }
  return 0;
}

const friends = [
{ name: 'John', age: 30 },
{ name: 'Ana', age: 20 },
{ name: 'Chris', age: 25 }, // vírgula no final: ES2017
];

function comparePerson(a, b) {
  if(a.age < b.age){
    return -1;
  }
  if(a.age > b.age){
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson))

let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort((a, b) => {
  if(a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if(a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
})) // isso nao muda a ordem original do array

console.log(names.sort((a, b) => a.localeCompare(b)))//retorna letras minusculas antes de maiúsculas, e acentos são considerados