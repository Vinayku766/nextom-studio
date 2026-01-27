import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/our-components/NavigationBar";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/our-components/Footer";
import { ToastContainer } from "react-toastify";
import PopupProviderHook from "@/utils/PopupProviderHook";
import PaymentPopup from "@/our-components/common/PaymentPopup";

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
    icon: '/logo/logo.png'
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
      <PopupProviderHook>
      <NavigationBar />
        {children}
        <ToastContainer />
        <PaymentPopup />
      <Footer />
<Link
  href="https://wa.link/ll8ldb"
  target="_blank"
  className="fixed right-5 bottom-5 z-10 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg shadow-black/10 text-white hover:bg-white/30 hover:shadow-xl transition-all duration-300 animate-float"
>
  <FaWhatsapp className="text-3xl text-green-600 animate-ring" />
  <span className="font-medium">Chat with us</span>
</Link>

      </PopupProviderHook>
      </body>
    </html>
  );
}
