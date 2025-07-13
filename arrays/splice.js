//Adicionando e removendo elementos de uma posição específica
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.splice(5, 3) //parametro 1 é o indice de onde comecar a remover, parametro 2 é a quantidade de elementos a serem removidos
console.log(numbers); // [0, 1, 2, 3, 4, 8, 9]
// delete numbers[0] nao e boa pratica pois torna o indicice removido como undefined, melhor usar splice, shift ou pop para remover
// console.log(numbers); // [empty, 1, 2, 3, 4, 8, 9] 

const numbers2 = [5,6,7]
numbers.splice(5, 0, ...numbers2)
console.log(numbers); // [0, 1, 2, 3, 4, [5, 6, 7], 8, 9]