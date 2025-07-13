let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log("-" + daysOfWeek[i]);
}

const fibonacci = []; // {1}
fibonacci[1] = 1; // {2}
fibonacci[2] = 1; // {3}
for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // //{4}
}
for (let i = 1; i <= 5; i++) {
  // {5}
  console.log(fibonacci); // {6}
}

//inserindo elementos
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
console.log(numbers);

//api - inserindo ao final utilizando push
numbers.push(11, 12, 13);
console.log(numbers);

//inserindo na primeiro posicao utilizando funcao criada
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};
numbers.insertFirstPosition(-1);
console.log(numbers);

//inserindo na primeira posicao com unshift
numbers.unshift(-4, -3, -2);
console.log(numbers);

//para remover o ultimo elemento
numbers.pop();
console.log(numbers);

//ao remover o primeiro elemento, ele nao sai, mas sim fica undefined, entao criamos um novo array que contem todos elementos do array original, menos o valor undefined
Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

// remove a primeira posição manualmente e executa reIndex
Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};
numbers = numbers.removeFirstPosition();
console.log(numbers);

// O código anterior deve ser usado somente com finalidades
// pedagógicas, não devendo ser utilizado em projetos de verdade. Para
// remover o primeiro elemento de um array, devemos sempre usar o
// método shift, que será apresentado na próxima seção.

numbers.shift();
console.log(numbers);
