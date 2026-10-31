import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kholil Growth OS", description: "Internal business control center for CRM, sales, finance, marketing, projects, KPI and analytics." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
