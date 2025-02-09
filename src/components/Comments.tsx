import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <form className='flex items-center justify-between p-4 g-4'>
        <div className="relative w-10 h-10 rounded-full  overflow-hidden">
            <Image src="/images/aot.jpg" alt="aot" fill/>
        </div>
            <input type="text" className='flex-1 p-2 bg-transparent outline-none' placeholder='Post replay' />
            <button className='py-2 px-4 bg-white text-black rounded-full'>Reply</button>
    </form>
  )
}

export default Comments