import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "COCOMO Estimator",
  description: "Accurately estimate software project details using the COCOMO model."
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar/>
        {children}
        <footer className="w-full bg-zinc-800 py-4 mt-10">
  <div className="container mx-auto text-center text-white text-sm">
    Made by Mannat Trivedi (2311201205) - CSE2 Assignment For Software Engg
  </div>
</footer>
      </body>
    </html>
  );
}
