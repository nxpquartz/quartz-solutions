import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Quartz Solutions - Facilities Equipment Asset Management",
  description: "Transform your facilities from cost centers to strategic assets with FEAM methodology. Field-verified asset intelligence for enterprise portfolios.",
  icons: {
    icon: [
      { url: "/Quartz-Logo-Design-12.png", type: "image/png" },
    ],
    shortcut: "/Quartz-Logo-Design-12.png",
    apple: "/Quartz-Logo-Design-12.png",
  },
  openGraph: {
    title: "Quartz Solutions - FEAM Services",
    description: "Professional facilities equipment asset management services for enterprise portfolios",
    url: "https://www.quartz.solutions",
    siteName: "Quartz Solutions",
    type: "website",
    images: [
      {
        url: "/Quartz-Logo-Design-12.png",
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quartz Solutions - FEAM Services",
    description: "Transform your facilities with field-verified asset intelligence",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
