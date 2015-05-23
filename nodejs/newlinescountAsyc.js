var fs = require('fs');

fs.readFile(process.argv[2], function countLines(err, fileData) {
    if(err) {
        return console.error(err);
    }
    var lines = fileData.toString().split("\n").length - 1;
    console.log(lines);
})
