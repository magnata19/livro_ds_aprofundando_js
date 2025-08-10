// TypedArray foi criado para que pudéssemos trabalhar com arrays
// contendo um único tipo de dado. A sua sintaxe é let myArray = new
// TypedArray(length), em que TypedArray deve ser substituído por uma
// classe TypedArray, conforme especificado na tabela a seguir:
let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for(let i = 0; i < length; i++) {
  int16[i] = i+1;
}
console.log(int16)
