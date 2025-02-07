"use client"
import { EventRepeat, FormatBold, FormatItalic, List, LocationOn, LocationOnOutlined, PermMedia, SentimentSatisfiedAlt, Voicemail } from "@mui/icons-material"
import Image from "next/image"
import { useState } from "react"

const Share = () => {
  const [media, setMedia] = useState<File|null>(null)

  const handleMediaChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]){
      setMedia(e.target.files[0])
    }
  }
  return (
    <div className="p-4 flex gap-4">
      {/* AVATAR */}
      <div className="h-10 w-10 rounded-full overflow-hidden relative">
        <Image className="object-cover" src="/aot.jpg" alt="aot" fill/>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <input className="outline-none border-none bg-transparent placeholder:text-textGray" type="text" placeholder="Write a post" />
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-4 items-center text-iconBlue">
            <input onChange={handleMediaChange} className="hidden" type="file" id="file" />
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

export default Share