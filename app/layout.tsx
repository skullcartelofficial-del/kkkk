import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kortek - Premium Shopping Experience",
  description: "Discover premium products with Kortek's sleek shopping platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
