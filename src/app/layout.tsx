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
      <body className="bg-black text-white dark:bg-white dark:text-black">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          {/* <button onClick={toggleDarkMode}>change color</button> */}
          <div className="px-2 xsm:px-4 xxl:px-8"><LeftBar/></div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray px-2"> {children} </div>
          <div className="flex-1 hidden lg:flex ml-4 md:ml-8"><RightBar/></div>
        </div>
      </body>
    </html>
  );
}
