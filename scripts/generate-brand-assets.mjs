import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const source = "assets/source/adaptive-a-logo-sheet.png";
const outDir = "public/brand";

await fs.mkdir(outDir, { recursive: true });

async function ensureSource() {
  try {
    await fs.access(source);
  } catch {
    throw new Error(`Missing source logo sheet: ${source}. Save the uploaded Adaptive A / ACE Monogram logo sheet at this path, then run npm run brand:generate.`);
  }
}

await ensureSource();
const meta = await sharp(source).metadata();
console.log(`Source size: ${meta.width}x${meta.height}`);

// Crop boxes calibrated for the supplied 1448 x 1086 logo sheet.
// If the source sheet is replaced with a different size, inspect and adjust these values.
const crops = {
  primary: { left: 65, top: 165, width: 440, height: 420 },
  icon: { left: 615, top: 225, width: 245, height: 310 },
  horizontal: { left: 940, top: 185, width: 455, height: 150 },
  dark: { left: 60, top: 690, width: 475, height: 185 },
  appIcon: { left: 665, top: 680, width: 170, height: 185 },
};

async function exportCrop(name, box, width, options = {}) {
  const image = sharp(source)
    .extract(box)
    .resize({ width, withoutEnlargement: false })
    .png({ quality: 100, compressionLevel: 9 });

  await image.toFile(path.join(outDir, `${name}.png`));

  await sharp(source)
    .extract(box)
    .resize({ width, withoutEnlargement: false })
    .webp({ quality: options.webpQuality ?? 92 })
    .toFile(path.join(outDir, `${name}.webp`));

  console.log(`Created ${name}.png/.webp`);
}

await exportCrop("ace-logo-primary", crops.primary, 1000);
await exportCrop("ace-logo-icon", crops.icon, 800);
await exportCrop("ace-logo-horizontal", crops.horizontal, 1200);
await exportCrop("ace-logo-dark", crops.dark, 1200, { webpQuality: 94 });

const appIcon = sharp(source).extract(crops.appIcon);
for (const size of [512, 192, 180, 32, 16]) {
  const output = size === 180 ? "apple-touch-icon" : size === 32 ? "favicon-32x32" : size === 16 ? "favicon-16x16" : `ace-app-icon-${size}`;
  await appIcon
    .clone()
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(size === 180 ? `public/${output}.png` : size <= 32 ? `public/${output}.png` : path.join(outDir, `${output}.png`));
  console.log(`Created ${output}.png`);
}

await appIcon
  .clone()
  .resize(256, 256, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .toFile("public/ace-logo-icon.ico");

const darkLogo = await sharp(source)
  .extract(crops.dark)
  .resize({ width: 760 })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: "#0F1D26",
  },
})
  .composite([{ input: darkLogo, left: 220, top: 220 }])
  .png({ quality: 100, compressionLevel: 9 })
  .toFile(path.join(outDir, "ace-og-image.png"));

console.log("Brand assets generated successfully.");
