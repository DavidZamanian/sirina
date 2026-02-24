import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  ".."
);
const publicDir = path.join(root, "public");

function findInputIcon() {
  const candidates = [
    path.join(root, "Icon-60x60@3x.png"),
    path.join(root, "icon.png"),
    path.join(root, "icon.svg"),
    path.join(root, "src", "assets", "Icon-60x60@3x.png"),
    path.join(root, "src", "assets", "icon.png"),
    path.join(root, "src", "assets", "icon.svg"),
    path.join(root, "assets", "icon.png"),
    path.join(root, "assets", "icon.svg"),
    path.join(root, "src", "assets", "app-icon.png"),
    path.join(root, "public", "icon.png"),
    path.join(root, "public", "icon.svg"),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }

  return null;
}

function roundedMaskSvg(size, radiusRatio = 0.2) {
  const r = Math.round(size * radiusRatio);
  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${size}" height="${size}" rx="${r}" ry="${r}" fill="white"/>
  </svg>`;
  return Buffer.from(svg);
}

async function makeIcon(input, size) {
  const mask = roundedMaskSvg(size);
  const image = sharp(input).resize({ width: size, height: size, fit: "cover" });
  return image
    .composite([{ input: mask, blend: "dest-in" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function main() {
  const input = findInputIcon();

  if (!input) {
    console.warn(
      "[generate-favicons] No source icon found. Place icon at Icon-60x60@3x.png, src/assets/icon.png, or src/assets/icon.svg."
    );
    process.exit(0);
  }

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log(`[generate-favicons] Using source icon: ${path.relative(root, input)}`);

  const targets = [
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-16x16.png", size: 16 },
    { name: "apple-touch-icon.png", size: 180 },
  ];

  await Promise.all(
    targets.map(async ({ name, size }) => {
      const output = path.join(publicDir, name);
      const buffer = await makeIcon(input, size);
      await fs.promises.writeFile(output, buffer);
      console.log(`Generated ${path.relative(root, output)} (${size}x${size})`);
    })
  );
}

main().catch((error) => {
  console.error("[generate-favicons] Error:", error);
  process.exit(1);
});
