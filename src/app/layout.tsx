import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import {twMerge}from "tailwind-merge"
import "./globals.css";
import { Header } from "@/sections/Header";
import Footer from "./footer/page";



const roboto=Montserrat({subsets:["latin"],variable:"--font-sans",weight: [ "100", "300","400", "500", "700"],});

export const metadata: Metadata = {
  title: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ twMerge( roboto.variable,"bg-black text-white antialiased font-sans  ")}>
        <Header/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
