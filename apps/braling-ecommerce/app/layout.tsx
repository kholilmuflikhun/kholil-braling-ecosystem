import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Braling Print Studio", description: "Print On Demand Organizer" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
