import Feed from '@/components/Feed'
import { ArrowBack, CalendarMonth, Mail, MailOutline, More, MoreHorizOutlined, Place, PlaceOutlined, Search } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserPage = () => {
  return (
    <div>
        <div className="flex items-center gap-8 backdrop-blur-md sticky top-0 p-4 z-10 bg-black opacity-70">
            <Link href="/"><ArrowBack/> </Link>
            <h1 className='text-white font-bold'>Levi</h1>
        </div>
        <div className='relative w-full'>
            <div className='relative aspect-[3/1] w-full'>
                 <Image className='object-cover' src="/aot.jpg" alt='' fill />
            </div>
            <div className='w-1/5 aspect-square rounded-full overflow-hidden border-black border-4 left-4 absolute -translate-y-1/2'>
                 <Image  className='object-cover' src="/aot.jpg" alt='' fill/>
            </div>
        </div>
        <div className="flex justify-end items-center w-full gap-2 p-2">
            <div className='w-9 h-9 flex items-center justify-center cursor-pointer rounded-full border-2 border-borderGray text-white'>
              <MoreHorizOutlined/>
            </div>
            <div className='w-9 h-9 flex items-center justify-center cursor-pointer rounded-full border-2 border-borderGray text-white'>
              <Search/>
            </div>
            <div className='w-9 h-9 flex items-center justify-center cursor-pointer rounded-full border-2 border-borderGray text-white'>
              <MailOutline/>
            </div>
             <button className='py-2 px-4 rounded-full border-2 bg-white text-black cursor-pointer'>Follow</button>
        </div>
        <div className='flex flex-col gap-2 p-4 '>
            <h1 className='text-2xl font-bold'>Levi</h1>
            <span className='text-textGray text-sm'>@Levi</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis molestias eveniet, eaque tenetur ipsam, facilis</p>
            <div className='flex gap-2'>
                <div className='text-textGray'>
                    <PlaceOutlined/>
                    TN
                </div>
                <div className='text-textGray'>
                    <CalendarMonth/>
                    Joined 2021
                </div>
            </div>
            <div className='flex gap-2'>
                <span>10</span> 
                <span className='text-textGray'>Followers</span> 
                <span>500</span> 
                <span className='text-textGray'>Followings</span> 
            </div>
        </div>
        <Feed/>
    </div>
  )
}

export default UserPage