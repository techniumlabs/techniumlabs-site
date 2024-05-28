import "./styles/bootstrap.min.css";
import "./styles/flaticon.css";
import "./styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Globals CSS
import "./styles/style.css";
import "./styles/responsive.css";

import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans, Dosis } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";

// For all body text font
const open_sans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

// For all heading font
const dosis = Dosis({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-dosis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raxr - React Nextjs Data Science & AI Analytics Template",
  description: "React Nextjs Data Science & AI Analytics Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${open_sans.variable} ${dosis.variable}`}>
      <body>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
