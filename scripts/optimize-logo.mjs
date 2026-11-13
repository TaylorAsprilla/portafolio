// Genera el logo optimizado y los íconos a partir del PNG original de Taylor Interactivo.
// Uso: npm run logo
import sharp from "sharp";

const SRC = "app/assets/img/logo-taylor-interactivo.png";

// 1) Logo para la web: recortado a su contenido, con transparencia
const trimmed = await sharp(SRC).trim().toBuffer();
const logo = await sharp(trimmed).resize({ width: 480 }).png({ compressionLevel: 9, palette: true }).toBuffer({ resolveWithObject: true });
await sharp(logo.data).toFile("public/logo.png");
console.log(`public/logo.png ${logo.info.width}x${logo.info.height} (${Math.round(logo.info.size / 1024)} KB)`);

// 2) Íconos cuadrados con fondo blanco y margen (el logo completo, centrado)
async function icon(size, out) {
  const inner = Math.round(size * 0.86);
  const art = await sharp(trimmed).resize({ width: inner, height: inner, fit: "inside" }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: "#ffffff" } })
    .composite([{ input: art, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`${out} ${size}x${size}`);
}
await icon(64, "app/icon.png");
await icon(180, "app/apple-icon.png");
await icon(512, "public/icon-512.png");
