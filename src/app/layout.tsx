import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Neha Rathod",
  description:
    "Neha Rathod is a proficient Software Engineer and Front-End Developer from India, skilled in building modern, responsive, and user-friendly web interfaces.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon-16x16.ico",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/favicon-32x32.ico",
      rel: "icon",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon-48x48.ico",
      rel: "icon",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicon-64x64.ico",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
  keywords: [
    "Neha Rathod",
    "Neha",
    "NehaRathod",
    "Neha-Rathod",
    "Rathod Neha",
    "Neha Rathod developer",
    "Neha Rathod portfolio",
    "front-end developer",
    "indian developer",
    "NehaRathod github",
  ],
};

const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
