var fs = require('fs');//include fs module
var filename = process.argv[2];//filename from arguments
if(filename == null) {
    console.log('No input file name');
} else {
    var buffer = fs.readFileSync(filename);// read contents into a buffer
    var str = buffer.toString();// convert to string
    var lines = str.split("\n");// split on new line
    var lineCount = 0
    for(var i = 0; i < lines.length; ++i) {
        if(lines[i].length != 0) {
            lineCount++;
        }
    }
    console.log(lineCount - 1);
    //console.log(lines.length);
}



