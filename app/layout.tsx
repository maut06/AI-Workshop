import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mau Tsujimura",
  description: "Personal site of Mau Tsujimura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
