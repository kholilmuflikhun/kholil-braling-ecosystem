import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kholil Muflikhun | Creative Technologist", description: "Graphic design, AI and full-stack digital solutions for growing businesses." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
