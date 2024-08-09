import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ToasterContext from './context/ToasterContext'
import AuthContext from "./context/AuthContext";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100" ,"200" ,"300" ,"400" ,"500" ,"600" ,"700" ,"800" ,"900"]
 });

export const metadata: Metadata = {
  title: "Messenger clone",
  description: "A messenger clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <AuthContext>
         <ToasterContext/>
        {children}
       </AuthContext>
      </body>
    </html>
  );
}
