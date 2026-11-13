// Convierte las capturas originales (app/assets/img/proyectos/preview/*.png)
// a WebP optimizado en public/projects/. Uso: npm run images
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "app/assets/img/proyectos/preview";
const OUT = "public/projects";
const WIDTH = 1200;
const HEIGHT = 750; // 16:10

await mkdir(OUT, { recursive: true });
for (const file of await readdir(SRC)) {
  if (!file.endsWith(".png")) continue;
  const out = path.join(OUT, file.replace(/\.png$/, ".webp"));
  const info = await sharp(path.join(SRC, file))
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "top" })
    .webp({ quality: 78 })
    .toFile(out);
  console.log(`${file} -> ${out} (${Math.round(info.size / 1024)} KB)`);
}
