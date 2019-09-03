const fs = require('fs');
// let imgDir = './public/img/'

const db = require('./models')

function readFiles(directory) {
    if (directory.slice(directory.length - 1) !== '/') {
        console.log(directory += '/');
    }
    // fs.readdir(directory, { withFileTypes: true }, (err, res) => {
    //     if (err) throw err;

    //     // console.log(res);

    //     res.forEach(file => {
    //         if (file.isDirectory()) {
    //             let currentDir = directory + file.name + '/';
    //             readFiles(currentDir);
    //         } else if (file.isFile()) {
    //             let imgPath = (directory + file.name).slice(8);
    //             console.log(directory + file.name);
    //             db.ImgTable.create({
    //                 name: file.name,
    //                 img_path: imgPath
    //             }).then(res => {
    //                 console.log('successfully added '+ file.name)
    //             }).catch(err => {
    //                 console.log('Image already in database');
    //             });
    //         }
    //     })
    // });
}

module.exports = readFiles;