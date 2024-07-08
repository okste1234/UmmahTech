import type { Metadata } from "next";
import "@/styles/globals.css"
import Script from "next/script";
import { Poppins as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { configureWeb3Modal } from "@/connection/connect";
import { ThemeProvider } from "@/connection/context";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "UmmahTech",
  description: "A decentralized learning application onChain tailored to give seamless learning and development for individuals. A place where students meet mentors, and opportunities",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen w-full font-sans antialiased bg-gradient-to-b from-[#1C1C2D] to-[#272737] text-gray-200",
        fontSans.variable
      )}>
        <ThemeProvider>
        <Navbar/>
            {children}
          <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
