'use client'; //side client
//czcionka
import { Inter } from "next/font/google";
import "./globals.css";
import { Animacja } from "./animacja";

// czciocnka
const inter = Inter({ subsets: ["latin"] });

//struktóra strony
export default function RootLayout({ children,}: 
  Readonly<{
    children: React.ReactNode;
  }>) 
  {
  return (
    <html lang="pl">
      {/*Szkielet strony */}
      <body className={`${inter.className} min-h-screen bg-zinc-50 text-gray-900 antialiased dark:bg-[#111] dark:text-gray-200`}>
        <Animacja/>
        {children}
      </body>
    </html>
  );
}