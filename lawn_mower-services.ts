import * as fs from 'fs';
import { result, Callback } from './types';

export const compute = (
    x: number,
    y: number,
    mowerX: number,
    mowerY: number,
    direction: string,
    command: string,
    cb: Callback<result>
) => {
    for (let i = 0; i < command.length; i++) { // each character is iterated for mower command
        let value = command.charAt(i);
        if (value == 'F') {
            forward(x, y, mowerX, mowerY, direction, (error, data) => { // Mower forward command
                if (error) {
                    console.log(error);
                }
                mowerX = data.position[0];
                mowerY = data.position[1];
                direction = data.finalDirection;
            });
        }
        else {
            rotate(direction, value, (error, data) => { // Mower rotate command
                if (error) {
                    console.log(error);
                }
                direction = data;
            })
        }
    }
    const result = {
        position: [mowerX, mowerY],
        finalDirection: direction
    }
    return cb(null, result);
}

// Function to rotate the Mower -> according to the command direction

export const rotate = (
    direction: string,
    toRotate: string,
    cb: Callback<string>
) => {
    switch (direction) {
        case 'N': {
            if (toRotate == "R") {
                direction = "E";
            }
            else if (toRotate == "L") {
                direction = "W";
            }
            break;
        }
        case 'E': {
            if (toRotate == "R") {
                direction = "S";
            }
            else if (toRotate == "L") {
                direction = "N";
            }
            break;
        }
        case 'S': {
            if (toRotate == "R") {
                direction = "W";
            }
            else if (toRotate == "L") {
                direction = "E";
            }
            break;
        }
        case "W": {
            if (toRotate == "R") {
                direction = "N";
            }
            else if (toRotate == "L") {
                direction = "S";
            }
            break;
        }
    }
    return cb(null, direction);
}

// Function to Mower -> forward movement

export const forward = (
    x: number,
    y: number,
    mowerX: number,
    mowerY: number,
    direction: string,
    cb: Callback<result>
) => {
    switch (direction) {
        case 'N': {
            if (mowerY < y - 1) {
                mowerY += 1;
            }
            break;
        }
        case 'E': {
            if (mowerX < x - 1) {
                mowerX += 1
            }
            break;
        }
        case 'W': {
            if (mowerX > 0) {
                mowerX -= 1;
            }
            break;
        }
        case 'S': {
            if (mowerY > 0) {
                mowerY -= 1;
            }
            break;
        }
    }
    return cb(null, { position: [mowerX, mowerY], finalDirection: direction })
}

// Function to print the output and write it in a file

export const printOutput = (
    x: number,
    y: number,
    direction: string
) => {
    let finalX = x.toString();
    let finalY = y.toString();
    console.log(finalX + ' ' + finalY + ' ' + direction);
    fs.appendFileSync('./files/output.txt', finalX + ' ' + finalY + ' ' + direction + '\n');
}