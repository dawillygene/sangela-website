import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { WhatsAppFloat } from "@/src/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Custom Business Software in Tanzania | SangelaSystem",
    template: "%s | SangelaSystem",
  },
  description:
    "SangelaSystem builds custom software for retailers, schools, hospitals, and clinics in Tanzania. Improve operations, reduce paperwork, and request a demo today.",
  keywords: [
    "software Tanzania",
    "retail management software",
    "school management system Tanzania",
    "hospital management system",
    "clinic software Tanzania",
    "POS system Tanzania",
    "Kariakoo software",
    "Dar es Salaam ICT",
    "paperless business",
    "SangelaSystem",
  ],
  authors: [{ name: "SangelaSystem" }],
  creator: "SangelaSystem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sangelasystem.com",
    siteName: "SangelaSystem",
    title: "Custom Business Software in Tanzania | SangelaSystem",
    description:
      "SangelaSystem builds custom software for retailers, schools, hospitals, and clinics in Tanzania.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Business Software in Tanzania | SangelaSystem",
    description:
      "SangelaSystem builds custom software for retailers, schools, hospitals, and clinics in Tanzania.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
