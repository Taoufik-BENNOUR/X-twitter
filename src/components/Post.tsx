import Image from 'next/image'
import React from 'react'
import PostInfo from './PostInfo'
import { SyncRounded, Verified } from '@mui/icons-material'
import PostInteractions from './PostInteractions'

const Post = () => {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
        <div className='flex items-center gap-2 text-textGray mb-2 text-sm'>
            <SyncRounded>
            <span>Double reposted</span>
        </div>
        <div className='flex gap-4'>
            <div className='h-10 w-10 rounded-full overflow-hidden relative'>
                <Image src={"globe.svg"} alt='vercel' fill />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 flex-wrap text-textGray">
                        <h1 className='font-bold'>T Dev <Verified  className='text-iconBlue' sx={{ fontSize: 20 }} /> </h1>
                        <span>@tdev</span>
                        <span>1 day ago</span>
                    </div>
                    <PostInfo/>
                </div>
                <p className='flex'>
                    Lorem, ipsum dolor sit amet consectetur adipisi
                    cing elit. Necessitatibus quisquam er
                    ror dolorem? Ratione, ab nihil sit ducimu
                    s modi beatae minus delectus alias sequi un
                    de aliquam amet neque! Optio, earum similique!
                </p>
                <Image src={"/aot.jpg"} alt='aot' width={600} height={600} />
                <PostInteractions/>
            </div>
        </div>
    </div>
  )
}

export default Post