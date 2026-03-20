const fs = require('fs');
const path = require('path');

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const JPG_SIGNATURE = [0xff, 0xd8];
const imagesDir = path.join(__dirname, '..', 'dist', 'assets', 'img');

if (!fs.existsSync(imagesDir)) {
  console.error(`FOLDER MISSING: ${imagesDir}`);
  process.exit(1);
}

const imageFiles = fs.readdirSync(imagesDir).filter(f => /\.(png|jpe?g)$/i.test(f));
if (!imageFiles.length) {
  console.error('NO PNG/JPG FILES FOUND in', imagesDir);
  process.exit(1);
}

let failed = false;
for (const fileName of imageFiles) {
  const fullPath = path.join(imagesDir, fileName);
  const buffer = fs.readFileSync(fullPath);
  const lower = fileName.toLowerCase();

  if (/\.png$/i.test(lower)) {
    const header = Array.from(buffer.slice(0, 8));
    const isPng = header.every((value, index) => value === PNG_SIGNATURE[index]);
    if (!isPng) {
      console.error(`ERROR: ${fileName} has invalid PNG header:`, header.map(x => x.toString(16).padStart(2, '0')).join(' '));
      failed = true;
    } else {
      console.log(`OK: ${fileName} (PNG)`);
    }
  } else if (/\.jpe?g$/i.test(lower)) {
    const header = Array.from(buffer.slice(0, 2));
    const isJpg = header.every((value, index) => value === JPG_SIGNATURE[index]);
    if (!isJpg) {
      console.error(`ERROR: ${fileName} has invalid JPG header:`, header.map(x => x.toString(16).padStart(2, '0')).join(' '));
      failed = true;
    } else {
      console.log(`OK: ${fileName} (JPG)`);
    }
  }
}

if (failed) {
  console.error('IMAGE header validation FAILED');
  process.exit(1);
}

console.log('IMAGE header validation passed');
