import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LP1 App",
  description: "Next.js app with Tailwind CSS v3",
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