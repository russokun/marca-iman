const fs = require('fs');
const path = require('path');

// Asegurarse de que existe el directorio de destino
const publicImagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Copiar imágenes desde src/img a public/images
const srcImagesDir = path.join(__dirname, '../src/img');
if (fs.existsSync(srcImagesDir)) {
    const files = fs.readdirSync(srcImagesDir);
    files.forEach(file => {
        const srcPath = path.join(srcImagesDir, file);
        const destPath = path.join(publicImagesDir, file);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to public/images/`);
    });
}