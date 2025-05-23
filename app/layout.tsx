import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/dist/compiled/@next/font/dist/local";
import { ReactNode } from "react";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue:",
});

export const metadata: Metadata = {
  title: "Bookwise",
  description:
    "Bookwise is a book borrowing university library management system.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
