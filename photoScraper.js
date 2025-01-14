const fs = require('fs');
// let imgDir = './public/img/'

const db = require('./models')

function readFiles(directory) {
    enforceDirectories('uploaded');
    if (directory.slice(directory.length - 1) !== '/') {
        directory += '/';
    }
    fs.readdir(directory, { withFileTypes: true }, (err, res) => {
        if (err) throw err;

        // console.log(res);

        res.forEach(file => {
            if (file.isDirectory()) {
                let currentDir = directory + file.name + '/';
                readFiles(currentDir);
            } else if (file.isFile()) {
                let imgPath = (directory + file.name).slice(8);
                // console.log(directory + file.name);
                db.ImgTable.create({
                    img_name: file.name,
                    img_path: imgPath
                }).then(res => {
                    console.log('successfully added '+ file.name)
                }).catch(err => {
                    console.log('Image already in database');
                });
            }
        })
    });
}

function enforceDirectories(dirNames) {
    if (typeof dirNames === 'string') {
        if (!fs.existsSync('./public/imgs/' + dirNames)){
            fs.mkdirSync('./public/imgs/' + dirNames);
        }
    } else {
        dirNames.forEach(element => {
            if (!fs.existsSync('./public/imgs/' + element)){
                fs.mkdirSync('./public/imgs/' + element);
            }        
        });
    }
}

module.exports = readFiles;