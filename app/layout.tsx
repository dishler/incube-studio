import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Gutters from "./components/Gutters";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "InCube Studio",
  description:
    "We create amazing UI/UX designs for mobile and web platforms, along with expert web development services 🚀",
};

// ✅ Правильний viewport для адаптиву
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} antialiased`}>
        <Header />
        {/* Dev-оверлей для перевірки 20 px по боках (показується лише в dev) */}
        <Gutters />
        {children}
      </body>
    </html>
  );
}
