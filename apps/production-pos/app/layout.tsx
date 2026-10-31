import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Braling Production & POS", description: "Operational foundation for cashier, orders, pricing, production workflow, inventory, purchasing and delivery." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
