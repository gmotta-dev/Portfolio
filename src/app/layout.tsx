import { Bebas_Neue, Poppins } from "next/font/google";

import "./globals.css";

import React from "react";
import Footer from "./_layoutResources/Footer";
import Nav from "./_layoutResources/Nav/Nav";
import UmamiScript from "./_layoutResources/UmamiScript";

const poppins = Poppins({
  weight: ["400", "500", "600", "800", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--Poppins",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--Bebas-Neue",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebasNeue.variable}`} style={{ ...poppins.style }}>
      <body className="bg-neutral-950 text-neutral-100">
        <Nav />
        {children}
        <Footer />
        <UmamiScript />
      </body>
    </html>
  );
}
