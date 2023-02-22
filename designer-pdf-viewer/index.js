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
* Complete the 'designerPdfViewer' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
*  1. INTEGER_ARRAY h
*  2. STRING word
*/

function designerPdfViewer(h, word) {
  // Write your code here
  console.log({h, word}); // esto es para ver el input nomas...  // BORRAR ESTE COMENTARIO
  
  /** BORRAR ESTE COMENTARIO
   * el output tiene q ser un numero entero
   * que para el input.txt del ejemplo es 28
   */
  return 28;
  
}

function main() {
  /** BORRAR ESTE COMENTARIO
   * el OUTPUT_PATH es una variable de entorno que se setea en el .env
   * y se usa para escribir el output en un archivo de texto
   * asi que tenes q cambiar el nombre de env.example a .env
   * hacer un npm install y dp npm start
   */
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
  const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));
  
  const word = readLine();
  
  const result = designerPdfViewer(h, word);
  
  ws.write(result + '\n');
  
  ws.end();
}
