import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Taylor Asprilla — Software Engineer, Full Stack Developer y Engineering Team Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // El logo se incrusta como data URI (se genera una sola vez durante el build)
  const logo = await readFile(path.join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#FFFFFF",
          backgroundImage:
            "radial-gradient(ellipse 60% 70% at 85% 0%, rgba(63,94,168,0.14), transparent 70%)",
          color: "#141B2E",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={196} height={96} />
          <div style={{ fontSize: 28, color: "#5B6480" }}>taylorasprilla.dev</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, color: "#3F5EA8" }}>
            Taylor Asprilla
          </div>
          <div style={{ marginTop: 20, fontSize: 38, color: "#141B2E" }}>
            Soluciones de IA y automatización
          </div>
          <div style={{ marginTop: 8, fontSize: 38, color: "#5B6480" }}>Software Engineer · Full Stack Developer</div>
        </div>

        <div style={{ fontSize: 26, color: "#7B84A0" }}>
          Agentes de IA · Automatización de procesos · Software a medida
        </div>
      </div>
    ),
    size
  );
}
