import { Lato, Source_Sans_3 } from "next/font/google";

/* Fuentes del logo: "Taylor" → Source Sans (Bold); "Interactivo" → Lato. */
export const display = Source_Sans_3({ subsets: ["latin"], variable: "--font-display", display: "swap" });
export const sans = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});
