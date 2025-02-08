import { Event, More, MoreHoriz, MoreRounded } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"

const Popular = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
        <h1 className="font-bold">Explore</h1>
        <div className="flex gap-4">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                <Image src="/aot.jpg" className="object-cover" alt="" fill/>
            </div>
            <div className="flex-1">
                <h2>AOT Release date</h2>
                <span  className="text-sm text-textGray">Today</span>
            </div>
        </div>
            <div className="flex items-center justify-between">
                <span className="text-textGray">Trending</span>
                <MoreHoriz/>
            </div>
            <h2 className="text-textGrayLight">AI</h2>
            <span className="text-textGray text-sm">10K posts</span>
<Link href="/" className='text-iconBlue'>Show more</Link>

    </div>
  )
}

export default Popular