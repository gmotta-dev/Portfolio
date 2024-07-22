import "./globals.css";
import localFont from "@next/font/local";

import React from "react";
import Footer from "./_layoutResources/Footer";
import Nav from "./_layoutResources/Nav/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebasNeue.variable}`} style={{ ...poppins.style }}>
      <body className="bg-neutral-950 text-neutral-100">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const poppins = localFont({
  src: [
    { path: "../../public/fonts/Poppins/Poppins-Light.ttf", weight: "300" },
    { path: "../../public/fonts/Poppins/Poppins-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Poppins/Poppins-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/Poppins/Poppins-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/Poppins/Poppins-Bold.ttf", weight: "700" },
  ],
  variable: "--Poppins",
});

const bebasNeue = localFont({ src: [{ path: "../../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf", weight: "400" }], variable: "--Bebas-Neue" });
