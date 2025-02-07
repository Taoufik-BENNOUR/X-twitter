import { EventRepeat, FormatBold, FormatItalic, List, LocationOn, LocationOnOutlined, PermMedia, SentimentSatisfiedAlt, Voicemail } from "@mui/icons-material"
import Image from "next/image"

const Share = () => {
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
            <PermMedia className="cursor-pointer"/>
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