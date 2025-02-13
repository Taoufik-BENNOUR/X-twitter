"use client"
import { EventRepeat, FormatBold, FormatItalic, List, LocationOn, LocationOnOutlined, PermMedia, SentimentSatisfiedAlt, Voicemail } from "@mui/icons-material"
import Image from "next/image"
import { useState } from "react"
import ImageEditor from "./ImageEditor"

const Share = () => {

  const [media, setMedia] = useState<File|null>(null)
  const [isEditorOpen, setIsEditorOpen] = useState<Boolean|null>(false)
  const [settings, setSettings] = useState<{
    type:"original"|"wide"|"square";
    sensitive:boolean
  }>({
    type:"original",
    sensitive:false
  })

  const handleMediaChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]){
      setMedia(e.target.files[0])
    }
  }
  const previewURL = media ? URL.createObjectURL(media):null;
  return (
    <div className="p-4 flex gap-4">
      {/* AVATAR */}
      <div className="h-10 w-10 rounded-full overflow-hidden relative">
        <Image className="object-cover" src="/images/profileImg.avif" alt="aot" fill/>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <input className="outline-none border-none bg-transparent placeholder:text-textGray" type="text" placeholder="Write a post" />
        {/* PREVIEW IMAGE */}
          {media?.type.includes("image")&& previewURL&& <div className="relative ronded-xl overflow-hidden object-cover">
            <Image src={previewURL} alt="" width={600} height={600} />
              <div className="absolute top-1 left-1 bg-borderGray py-1 px-4 rounded-full font-bold cursor-pointer" 
              onClick={()=>setIsEditorOpen(true)}>
                Edit
              </div>
              <div className="flex items-center position absolute top-2 right-2 cursor-pointer rounded-full py-2 px-4 bg-borderGray opacity-70 text-white"
                onClick={()=>setMedia(null)}>
                  x
                </div>
            </div>
            }
          {media?.type.includes("video") && previewURL && (
            <div className="relative ">
                <video src={previewURL} controls></video>
                <div className="flex items-center position absolute top-2 right-2 cursor-pointer rounded-full py-2 px-4 bg-borderGray opacity-70 text-white"
                onClick={()=>setMedia(null)}>
                  x
                </div>
            </div>
          )}
          
          {isEditorOpen && previewURL && (
            <ImageEditor
             onClose={()=>setIsEditorOpen(false)}
             previewURL={previewURL} 
             settings={settings}
             setSettings={setSettings}
             />
          )
          }

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-4 items-center text-iconBlue">
            <input onChange={handleMediaChange} className="hidden"  accept="image/*,video/*" type="file" id="file" />
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