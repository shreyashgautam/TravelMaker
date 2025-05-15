import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar/Nav";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel app",
};

const font=Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
