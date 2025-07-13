//Arrays bidimensionais e multidimensionais
//cada linha representará o dia e cada coluna representará a medida da temperatura de hora em hora, assim:
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73]

function printMatrix(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      console.log(`Posição i: ${i} - Posição j: ${j} - Valor: ${matrix[i][j]}`);
    }
  }
}


let dias = [];
dias[0] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
dias[1] = ['25/09', '26/09', '27/09', '28/09', '29/09', '30/09', '01/10'];
for(let i = 0; i < dias[0].length; i++) {
  console.table(`${dias[0][i]} - é o dia ${dias[1][i]} da semana`)
}

printMatrix(averageTemp);