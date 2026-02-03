import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Association Switzerland",
  description: "Bitcoin for the masses - A bright new dawn for digital transfers, sound money and personal freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
