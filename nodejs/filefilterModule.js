var fs = require('fs');
var path = require('path');

function extensionBasedFileFilter(dir, ext, callback) {
    fs.readdir(dir, function filter(err, files) {
        if(err) {
            console.error(err);
        } else {
            files.forEach( function(file) {
                if(path.extname(file) == '.' + ext) {
                    console.log(file);
                }
            })
        }
    })
}
