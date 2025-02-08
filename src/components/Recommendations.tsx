import { VerifiedRounded } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
        <h1 className="font-bold">Who to follow</h1>
        <div className='flex justify-between items-center'>
            <div className="flex gap-2 items-center-">
                <div className='h-10 w-10 rounded-full overflow-hidden relative'>
                    <Image className=' object-cover' src={"/aot.jpg"} alt='vercel' fill />
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold flex items-center gap-1'>Levi Ackerman <VerifiedRounded sx={{fontSize:20}} className=' text-iconBlue' /></span>
                    <span className='text-sm text-textGray'>@LeviAck</span>
                </div>
            </div>
            <button className='bg-white text-black py-1 px-4 rounded-full font-bold'>Follow</button>
        </div>
        <Link href="/" className='text-iconBlue'>Show more</Link>
    </div>
  )
}

export default Recommendations