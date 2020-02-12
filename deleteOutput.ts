import * as fs from 'fs';

try {
    fs.unlinkSync('./files/output.txt')
} catch (err) {
    console.error();
}