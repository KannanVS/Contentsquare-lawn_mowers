import * as fs from 'fs';

try {
    fs.unlinkSync('./output.txt')
} catch (err) {
    console.error();
}