const fs = require('fs');

let greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8')

console.log(greet, "hi");

let greet2 = fs.readFile(`${__dirname}/greet.txt`, 'utf8', (err, data) => {
  console.log(data, '#2')
})

console.log('V8 IS DONE!')
