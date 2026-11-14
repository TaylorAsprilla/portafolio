import { getContent } from "@/content";
import { ogSize, renderOgImage } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = getContent("es").meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage("es");
}
