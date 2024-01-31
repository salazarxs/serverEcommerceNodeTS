
// const fs = require('fs')
import fs from 'fs'
const deleteImage = (folder, file) => {
    console.log(folder);
    console.log(file)
    try {
        fs.unlinkSync(`${file}`, (err) => {
            console.log(`Error fs -> ${err}`);
            return;
        });
        console.log(`Image deleted ${file}`);
    } catch (err) {
        console.log(`cant delete file -> ${file} --> ${err}`);
    };
};



export default deleteImage;