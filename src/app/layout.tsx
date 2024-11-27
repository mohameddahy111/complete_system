import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title:{
    default: "Complete System",
    template: "%s | Complete System"
  },
  description: "A complete system for your next project",
};
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-exo2"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.className}`}>{children}</body>
    </html>
  );
}
