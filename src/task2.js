import fs from 'fs';
import csv from 'csvtojson';

const csvPath = './csv/nodejs-hw1-ex1.csv';
const readStream = fs.createReadStream(csvPath);
const writableStream = fs.createWriteStream('./csv/temp.txt', 'utf-8');

readStream.on('error', (err) => {
    console.log(err.message);
});

writableStream.on('error', (err) => {
    console.log(err.message);
});

//the file is loaded fully into the RAM.
// csv()
// .formFile(csvPath)
// .then((jsonContent) => {
//     jsonContent.forEach((row) => {
//         writableStream.write(`${JSON.stringify(row)}\n`);
//     });
// });


//the file is not loaded fully in the RAM(pipeline method)
readStream.pipe(csv()).pipe(writableStream);