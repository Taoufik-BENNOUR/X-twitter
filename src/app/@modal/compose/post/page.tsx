"use client"
import { Close, EventRepeat, FormatBold, FormatItalic, List, LocationOnOutlined, PermMedia, SentimentSatisfiedAlt, Voicemail } from '@mui/icons-material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const PostModal = () => {
    const router = useRouter();

    const closeModal = () =>{
        router.back();
    }
  return (
    <div className='flex justify-center fixed w-screen h-screen top-0 bottom-0 left-0 z-10 bg-[#293139a6]'>
        <div className='flex flex-col gap-4 py-4 px-8 h-max mt-12 bg-black rounded-xl w-[600px]'>
            <div className='flex items-center justify-between'>
                <Close onClick={closeModal} />
                <span className='text-iconBlue'>Drafts</span>
            </div>
            <div className='flex items-center gap-2'>
            <div className='h-10 w-10 rounded-full overflow-hidden relative'>
                    <Image src={"/aot.jpg"} alt='vercel' fill />
                </div>            
                <input className='flex-1 bg-transparent outline-none' type="text" placeholder='What is happening?' />
            </div>
       <div className="flex items-center justify-between flex-wrap mt-4 pt-4 border-t-2 border-borderGray">
          <div className="flex gap-4 items-center text-iconBlue">
            <input className="hidden"  accept="image/*,video/*" type="file" id="file" />
            <label htmlFor="file">
              <PermMedia className="cursor-pointer"/>
            </label>
            <Voicemail className="cursor-pointer"/>
            <List className="cursor-pointer"/>
            <SentimentSatisfiedAlt className="cursor-pointer"/>
            <EventRepeat className="cursor-pointer"/>
            <LocationOnOutlined className="cursor-pointer"/>
            <FormatBold className="cursor-pointer"/>
            <FormatItalic className="cursor-pointer"/>
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4 xsm:mt-2 sm:mt-0">Post</button>
        </div>
        </div>
    </div>
  )
}

export default PostModal