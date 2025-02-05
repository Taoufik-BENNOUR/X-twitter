"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import { useEffect, useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <div className="flex justify-between">
          {/* <button onClick={toggleDarkMode}>change color</button> */}
          <div><LeftBar/></div>
          <div> {children} </div>
          <div><RightBar/></div>
        </div>
      </body>
    </html>
  );
}
