var fs = require('fs')


var names = fs.readdirSync('images').join("\n");
fs.writeFileSync('list.txt', names);
