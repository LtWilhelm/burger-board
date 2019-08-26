const fs = require('fs');
let imgDir = './public/img/'

const db = require('./models')

function readFiles(directory) {
    fs.readdir(directory, { withFileTypes: true }, (err, res) => {
        if (err) throw err;

        // console.log(res);

        res.forEach(file => {
            if (file.isDirectory()) {
                let currentDir = directory + file.name + '/';
                readFiles(currentDir);
            } else if (file.isFile()) {
                console.log(directory + file.name);
                db.ImgTable.create({
                    name: file.name,
                    img_path: directory + file.name
                }).then(res => {
                    console.log('successfully added '+ file.name)
                });
            }
        })
    });
}

readFiles('./public/img/')