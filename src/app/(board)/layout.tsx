"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Apple, Google, X } from "@mui/icons-material";
import { ClerkProvider } from "@clerk/nextjs";


export default function BoardLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
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
  // if(isAuthenticated){
  //   return (
  //     <html lang="en">
  //       <body className="bg-black text-white dark:bg-white dark:text-black">
  //         <div className="flex items-center justify-between p-8 max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto h-screen ">
  //         <div className="hidden sm:block">
  //           <X sx={{fontSize:"25rem"}} />
  //          </div>
  //           <div className="flex flex-col items-start gap-10">
  //           <div className=" sm:hidden">
  //           <X sx={{fontSize:"64px"}} />
  //          </div>              
  //          <h1 className=" text-white font-bold text-7xl"> Happening now </h1>
  //             <h2 className="text-white font-bold text-2xl">Join today.</h2>
  //             <div className="flex flex-col gap-2 w-[300px]">
  //               <button className="py-2 px-10  bg-white text-black rounded-full"><Google/> Sign up with Google</button>
  //               <button className="py-2 px-10   bg-white text-black rounded-full"><Apple/> Sign up with Apple</button>
  //               <div className="flex items-center justify-center space-x-4">
  //                 <hr className="flex-1 border-t border-gray-700" />
  //                 <span className="text-gray-700">OR</span>
  //                 <hr className="flex-1 border-t border-gray-700" />
  //               </div>
  //               <button className="py-2 px-10 bg-iconBlue rounded-full font-bold text-white">Create account</button>
  //               <p className="text-xs text-textGray">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
  //               <h2 className="mt-10">Already have an account?</h2>
  //               <button className="py-2 px-10  bg-black text-iconBlue hover:bg-[#1d9cf01a] rounded-full border-2 border-borderGray">Sign in</button>

  //             </div>


  //           </div>
  //         </div>
  //       </body>
  //     </html>)
  // }
  return (
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          {/* <button onClick={toggleDarkMode}>change color</button> */}
          <div className="px-2 xsm:px-4 xxl:px-8"><LeftBar/></div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray px-2"> 
            {children} 
            {modal}
            </div>
          <div className="flex-1 hidden lg:flex ml-4 md:ml-8"><RightBar/></div>
        </div>
  );
}
