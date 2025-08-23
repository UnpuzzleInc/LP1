import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landio - AI Automation for Modern Businesses",
  description: "Automate Smarter. Grow Faster. With AI. AI Automation for Modern Businesses Made Simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}