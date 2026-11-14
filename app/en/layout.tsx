import type { Metadata, Viewport } from "next";
import "../globals.css";
import { RootShell } from "@/components/layout/root-shell";
import { buildMetadata } from "@/lib/site-metadata";

export const viewport: Viewport = { themeColor: "#FFFFFF", width: "device-width", initialScale: 1 };
export const metadata: Metadata = buildMetadata("en");

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="en">{children}</RootShell>;
}
