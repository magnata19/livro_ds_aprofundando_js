let movie = "Lord of the Rings"; // {1}
//var movie = 'Batman v Superman'; // erro, movie já foi declarada
function starWarsFan() {
  const movie = "Star Wars"; // {2}
  return movie;
}
function marvelFan() {
  movie = "The Avengers"; // {3}
  return movie;
}
function blizzardFan() {
  const isFan = true;
  let phrase = "Warcraft"; // {4}
  console.log("Before if: " + phrase);
  if (isFan) {
    let phrase = "initial text"; // {5}
    phrase = "For the Horde!"; // {6}
    console.log("Inside if: " + phrase);
  }
  phrase = "For the Alliance!"; // {7}
  console.log("After if: " + phrase);
}
console.log(movie); // {8}
console.log(starWarsFan()); // {9}
console.log(marvelFan()); // {10}
console.log(movie); // {11}
blizzardFan(); // {12}

let car = "rx7";

function carFan() {
  const car = "nissan skyline";
  return car;
}

function motorFan() {
  car = "Toyota supra";
  return car;
}

function isFan() {
  const isFan = true;
  let phrase = "i love cars";
  console.log("Before if: " + phrase);
  if (isFan) {
    let phrase = "some text to change";
    phrase = "i love mazda";
    console.log("Inside if: " + phrase);
  }
  phrase = "i love toyota"; // {13}
  console.log("After if: " + phrase);
}

console.log(car);
console.log(carFan());
console.log(motorFan());
console.log(car);
isFan();

const multiplicarPorDois = (n) => n * 2;
console.log(multiplicarPorDois(5));

//funcao para somar com valores padrão
function somar() {
  var x =
    arguments.length > 0 && arguments[0] !== undefined && arguments[0] !== null
      ? arguments[0]
      : 1;
  var y =
    arguments.length > 1 && arguments[1] !== undefined && arguments[1] !== null
      ? arguments[1]
      : 2;
  var z =
    arguments.length > 2 && arguments[2] !== undefined && arguments[2] !== null
      ? arguments[2]
      : 3;
  return x + y + z;
}

//usando spread
const values = [5, 3, 2];
console.log(somar(...values)); // deve retornar 10
console.log(somar.apply(null, values)); // mesmo resultado, mas usando apply

function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, "hello", true, 7, 5));

//desestruturação de arrays
let [a, b, c] = [1, 2, 3];
console.log("antes do swap " + a, b, c); // 3 1 2

//swap de variáveis usando desestruturação
[a, b, c] = [c, a, b];
console.log("depois do swap " + a, b, c); // 3 1 2

//abreviação de propriedades(property shorthand),
let [nome, sobrenome, idade] = ["Davidson", "Pacifico", 25];
let pessoa = { nome, sobrenome, idade };

console.log(pessoa);

//nomes de método abreviados (shorthand method names)
const pessoa2 = {
  nome: "Davidson Pacifico",
  exibirNome() {
    console.log(pessoa2.nome);
  },
};

// mesmo resultado do acima, mas com função anônima
const pessoa3 = {
  nome: "Davidson Pacifico Walter",
  exibirNome: function () {
    console.log(pessoa3.nome);
  },
};

pessoa2.exibirNome();
pessoa3.exibirNome();
