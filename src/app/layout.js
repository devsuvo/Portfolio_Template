import { Inter_Tight } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Suvo Dev – Digital Agency for Modern Brands",
    template: "%s | Suvo Dev",
  },
  description:
    "Suvo Dev is a digital agency that designs, builds and grows brands through UI/UX, web development, brand strategy and marketing that converts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interTight.variable} antialiased`}>
      <body className="overflow-x-hidden bg-background-13">
        <Header />
        <main className="bg-background-13">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
