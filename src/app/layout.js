import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/our-components/NavigationBar";
import Footer from "@/our-components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nextom Studio",
  description: "Nextom Studio is a full-service video editing studio specializing in cinematic brand films, YouTube content, trailers, podcasts, and short-form videos. We combine professional editing, color grading, sound design, motion graphics, and AI-enhanced tools to deliver fast, high-quality results.",
   icons:{
    icon: '/logo/LOGO3.png'
   }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/logo/logo.png" />
   </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NavigationBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
