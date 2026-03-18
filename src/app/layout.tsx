import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toya - Your Child's Smart Best Friend",
  description:
    "The smart doll that talks, learns, and grows with your child. Interactive conversations, learning experiences, and endless fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
