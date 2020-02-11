import * as fs from 'fs';
// fs.readFileSync('foo.txt','utf8');
fs.readFile('check.txt', 'utf8', function(err, data) {
    if (err) throw console.log('there is an error');
    console.log(data);
});
console.log('check');