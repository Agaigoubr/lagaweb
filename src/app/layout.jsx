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
  description: "نحن في lagaweb نبتكر حلولًا برمجية ذكية مصممة خصيصًا لتلبية احتياجات أعمالك. فريقنا من الخبراء ملتزم بتقديم أحدث التقنيات في تطوير الويب، التطبيقات، والأنظمة المتكاملة لضمان نجاحك في العالم الرقمي.",
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
