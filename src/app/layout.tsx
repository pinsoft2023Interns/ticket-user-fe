"use client";
import { Provider } from "react-redux";
import { Store } from "redux";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import StoreProvider from "../store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <Toaster />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
