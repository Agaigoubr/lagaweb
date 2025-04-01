import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/page"
import Footr from "@/components/Footr/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Laga | Web ",
  description: "At lagaweb, we create intelligent software solutions tailored to your business needs. Our team of experts is committed to providing the latest technologies in web development, applications, and integrated systems to ensure your success in the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
<Footr />
      </body>
    </html>
  );
}
