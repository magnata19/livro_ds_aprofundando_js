//Referências para métodos de array em JavaScript

//Método Descrição
//concat Junta vários arrays e devolve uma cópia dos arrays concatenados.
//every Itera por todos os elementos do array, verificando uma condição desejada (função) até que false seja devolvido.
//filterCria um array com todos os elementos avaliados com true pela função especificada.
//forEach Executa uma função específica em cada elemento do array.
//join Reúne todos os elementos do array em uma string.
//indexOf Pesquisa o array em busca de elementos específicos e devolve a sua posição.
//lastIndexOf Devolve a posição do último item do array que corresponda ao critério de pesquisa.
//map Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que
//         correspondam ao critério.
//reverse Inverte o array, de modo que o último item se torne o primeiro, e vice-versa.
// sliceDevolve um novo array a partir do índice especificado.
// some Itera por todos os elementos do array, verificando a condição desejada (função) até que true seja devolvido.
// sort Organiza o array em ordem alfabética ou de a
// toString Devolve o array na forma de uma string.
// valueOf É semelhante ao método toString e devolve o array na forma de uma string.


//Juntando vários arrays
const zero = 0;
const positiveNumbers = [1, 2, 3, 4, 5];
const negativeNumbers = [-1, -2, -3, -4, -5];
let numbers = negativeNumbers.concat(positiveNumbers, zero);
console.log(numbers)

//Funções de iteração
const isEven = x => x % 2 === 0;
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//Iterando com o método every
console.log(numbers2.every(isEven)); // ao se deparar com o primeiro número ímpar, a função retorna false

//Iterando com o método some
console.log(numbers2.some(isEven)); // ao se deparar com o primeiro número par, a função retorna true

//Iterando com forEach
numbers2.forEach((number) => console.log(number % 2 === 0)); //true se par, false se ímpar

//Usando map e filter
const myMap = numbers.map(isEven);
console.log(myMap); // Cria um novo array com true para pares e false para ímpares

const evenNumbers = numbers2.filter(isEven);
console.log(evenNumbers); // Cria um novo array com apenas os números pares

//Usando o método reduce
console.log(numbers2.reduce((previous, current) => previous + current))

//Iterando com o laço for…of
for(const n of numbers2) {
  console.log(n % 2=== 0? 'Par' : 'Ímpar');
}

//Usando o objeto @@iterator
let iterator = numbers2[Symbol.iterator]();
console.log(iterator.next().value)

for(const n of iterator) {
  console.log(n)
}

//Métodos entries, keys e values de array
let aEntries = numbers2.entries(); // obtém um iterador de chave/valor
for(const n of aEntries) {
  console.log(n) // exibe cada par chave/valor
}

const aKeys = numbers.keys(); // obtém um iterador de chaves
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next()); // {value: 2, done: false } Se done tiver um valor igual a false, isso significa que ainda há mais chaves para iterar no array.

//Usando o método from
let numbers3 = Array.from(numbers2)
console.log(numbers3)

let pares = Array.from(numbers3, x => x % 2 === 0);
console.log(pares)

let pares2 = []
for(const num of numbers3) {
  num % 2 === 0 ? pares2.push(num) : null;
}
console.log(pares2)

//Usando o método Array.of
let copiasPares = Array.of(...pares2)
console.log('cópias ', copiasPares)

const numbersCopyTillSomeIndex = copiasPares.fill(0, 2, 4); //valor a ser preenchido, índice inicial, índice final (não incluído)
console.log('cópias preenchidas com 0 ', numbersCopyTillSomeIndex)

const ones = Array(6).fill(1); //cria um array de 6 elementos, todos com valor 1
console.log('apenas numeros 1 ', ones)

let copyArray = [1,2,3,4,5,6];
// console.log('cópias ', copyArray.copyWithin(0, 3));//copia os elementos a partir do índice 3 para o índice 0 [4,5,6,4,5,6]
console.log('cópias a partir de um index', copyArray.copyWithin(1, 3, 5)) // retornará [1,4,5,4,5,6]

