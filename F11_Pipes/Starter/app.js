var fs = require('fs');
const zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

let gzip = zlib.createGzip()

let compressed = fs.createWriteStream(__dirname + '/greetcopy.txt.gz');

readable.pipe(writable)

readable.pipe(gzip).pipe(compressed)
