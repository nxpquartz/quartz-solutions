const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const images = [
    'IMG_0166.JPG', 'IMG_0169.jpeg', 'IMG_0213.jpeg',
    'IMG_0238.jpeg', 'IMG_1735.PNG', 'IMG_1831.JPG',
    'IMG_5689.png', 'IMG_9603.jpeg'
  ];

  for (const img of images) {
    const inputPath = path.join('public', img);
    const outputName = `optimized_${path.parse(img).name}.jpg`;
    const outputPath = path.join('public', outputName);
    
    try {
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true })
        .jpeg({ quality: 85 })
        .toFile(outputPath);
      console.log(`✓ Optimized ${img} -> ${outputName}`);
    } catch (err) {
      console.error(`Error optimizing ${img}:`, err.message);
    }
  }
}

optimizeImages();
