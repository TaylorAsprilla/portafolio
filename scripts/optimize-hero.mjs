// Genera las imágenes WebP del hero (laptop con el logo) desde el PNG original.
// Uso: npm run hero
import sharp from "sharp";

const SRC = "app/assets/img/logo-PC.png";
// Recorte ajustado al laptop (el lienzo original es 4500x3000). La sombra horneada del mockup
// llega cortada al borde del lienzo, así que se elimina y la web dibuja su propia sombra en CSS.
const CROP = { left: 840, top: 420, width: 3080, height: 2330 };
const LOW = 170; // por debajo: sombra/neblina → transparente
const HIGH = 235; // por encima: opaco; entre ambos: rampa suave para conservar el borde antialias

const { data, info } = await sharp(SRC).extract(CROP).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 3; i < data.length; i += 4) {
  const a = data[i];
  data[i] = a <= LOW ? 0 : a >= HIGH ? 255 : Math.round(((a - LOW) * 255) / (HIGH - LOW));
}
const cleaned = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();

for (const width of [760, 1400]) {
  const out = `public/hero-laptop-${width}.webp`;
  const r = await sharp(cleaned).resize({ width }).webp({ quality: 84, alphaQuality: 90 }).toFile(out);
  console.log(`${out} ${r.width}x${r.height} (${Math.round(r.size / 1024)} KB)`);
}
