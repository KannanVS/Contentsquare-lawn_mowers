import * as fs from 'fs';
import { compute, printOutput } from './lawn_mower-services';

const data = fs.readFileSync('./files/input.txt', 'UTF-8'); // Read data from the input file

const lines = data.split(/\r?\n/); // split each line of data

const lawnSize = lines[0].split(' ').map(function (item) { // The first line is taken for the size of the lawn
    return parseInt(item, 10); // Size is converted into integer
});

var [xLimit, yLimit] = lawnSize; // lawnSize is destructed as X and Y for max limit

const totalMowers = (lines.length - 1) / 2; // To find the number of mowers from input

for (var i = 0; i < totalMowers; i++) { // Iteration to process each mower
    var k = 2 * i; // counter to read each mower data
    var startMower = lines[k + 1].split(' '); // Starting position of the mower
    var startX = parseInt(startMower[0], 10);
    var startY = parseInt(startMower[1], 10);
    var direction = startMower[2];
    if (startX < xLimit && startY < yLimit) {
        compute(xLimit, yLimit, startX, startY, direction, lines[k + 2], (error, data) => {
            var [x, y] = data.position;
            printOutput(x, y, direction);
        });
    }
    else {
        printOutput(startX, startY, direction);
    }
}