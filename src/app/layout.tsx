import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Domyah - Your Child's Smart Best Friend",
  description: "Meet Domyah, the smart doll that talks, learns, and grows with your child. Interactive conversations, learning experiences, and endless fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} font-rubik antialiased`}
      >
        <LanguageProvider>
          <CartProvider>
            {children}
            <FloatingWhatsApp />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
