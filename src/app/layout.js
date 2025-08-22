 "use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <SessionProvider>
          <Navbar />
          <main className="p-6">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
