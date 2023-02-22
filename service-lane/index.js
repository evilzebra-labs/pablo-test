'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');
  
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
* Complete the 'serviceLane' function below.
*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts following parameters:
*  1. INTEGER n
*  2. 2D_INTEGER_ARRAY cases
*/

function serviceLane(n, cases) {
  // Write your code here
  console.log({n, cases}); // esto es para ver el input nomas...  // BORRAR ESTE COMENTARIO

  /** BORRAR ESTE COMENTARIO
   * el output tiene q ser un array de enteros
   * que para el input.txt del ejemplo es el siguiente:
   * asi que tu codigo tiene q devolver esto: [1, 2, 3, 2, 1]
   */
  return [1, 2, 3, 2, 1];
}

function main() {
  /** BORRAR ESTE COMENTARIO
   * el OUTPUT_PATH es una variable de entorno que se setea en el .env
   * y se usa para escribir el output en un archivo de texto
   * asi que tenes q cambiar el nombre de env.example a .env
   * hacer un npm install y dp npm start
   */
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
  
  const n = parseInt(firstMultipleInput[0], 10);
  
  const t = parseInt(firstMultipleInput[1], 10);
  
  const width = readLine().replace(/\s+$/g, '').split(' ').map(widthTemp => parseInt(widthTemp, 10));
  
  let cases = Array(t);
  
  for (let i = 0; i < t; i++) {
    cases[i] = readLine().replace(/\s+$/g, '').split(' ').map(casesTemp => parseInt(casesTemp, 10));
  }
  
  const result = serviceLane(n, cases);
  
  ws.write(result.join('\n') + '\n');
  
  ws.end();
}