"use client";
import { Provider } from "react-redux";
import store from "../store";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "../provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Toaster />
        <Providers>
          <Provider store={store}>{children}</Provider>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
