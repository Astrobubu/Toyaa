import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xe2vvop4mg");`}
        </Script>
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
