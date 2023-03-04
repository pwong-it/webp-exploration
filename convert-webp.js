const sharp = require('sharp');
const fs = require('fs');

const inputDir = './images';
const outputDir = './images';
const inputFilenames = fs.readdirSync(inputDir);


inputFilenames.forEach(filename => {
  sharp(`${inputDir}/${filename}`)
    .webp({ quality: 80 })
    .toFile(`${outputDir}/${filename.replace(/\.[^/.]+$/, "")}.webp`, (err, info) => {
      if (err) console.log(err);
      else console.log(`Converted ${filename} to WebP format`);
    });
});

