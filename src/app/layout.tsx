"use client"
import "./globals.css";
import { useEffect, useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "./providers/QueryProvider";


export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const isAuthenticated = false;
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
    <ClerkProvider>
      <QueryProvider>
        <html lang="en">
          <body className="bg-black text-white dark:bg-white dark:text-black">
            {children}
          </body>
        </html>
        </QueryProvider>
    </ClerkProvider>
  );
}
