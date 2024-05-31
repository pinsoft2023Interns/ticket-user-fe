"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import StoreProvider from "../store/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <div className={inter.className}>
        <Header />
        <Toaster />
        {children}
        <Footer />
      </div>
    </StoreProvider>
  );
}
