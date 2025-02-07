import { ArrowBack, Crop169Outlined, CropLandscapeOutlined, Square, SquareOutlined } from "@mui/icons-material";
import Image from "next/image";

const ImageEditor = ({onClose,previewURL,settings,setSettings}:{
    onClose:()=>void;
    previewURL:string;
    settings:{
        type:"original"|"wide"|"square";
        sensitive:boolean
      };
      setSettings:React.Dispatch<
      React.SetStateAction<{
        type:"original"|"wide"|"square";
        sensitive:boolean
      }>
      >;
}) => {
  const handleChangeSensitive = (sensitive:boolean)=>{
    setSettings((prev)=>({...prev,sensitive}))
  }
  const handleChangeType = (type:"original"|"wide"|"square")=>{
    setSettings((prev)=>({...prev,type}))
    
  }
  return (
    <div className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-75 z-10 flex justify-center">
        <div className="flex bg-black rouded-xl p-12 flex-col gap-4">
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex gap-8 items-center">
                <ArrowBack onClick={onClose}/>
                <h1 className="text-xl font-bold">Media Settings</h1>
              </div>
              <button className="py-2 px-4 font-bold bg-white rounded-full text-black" onClick={onClose}>Save</button>
            </div>
            <div className="flex items-center w-[600px] h-[600px]">
                <Image src={previewURL} alt="alt" width={600}  height={600} 
                className={`w-full ${settings.type==="original"?
                "h-full object-contain":
                settings.type==="square"?
                "aspect-square object-cover":
                "aspect-video object-cover"}`} />
            </div>
            <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-8">
                    <div className="flex gap-2 items-center cursor-pointer" onClick={()=>handleChangeType("original")}>
                      <CropLandscapeOutlined className={`${settings.type==="original"?"text-iconBlue":"text-white"}`} />
                      Original
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={()=>handleChangeType("wide")}>
                      <Crop169Outlined className={`${settings.type==="wide"?"text-iconBlue":"text-white"}`} />
                      Wide
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={()=>handleChangeType("square")}>
                      <SquareOutlined className={`${settings.type==="square"?"text-iconBlue":"text-white"}`} />
                      Square
                    </div>
                  </div>
                  <div onClick={()=>handleChangeSensitive(!settings.sensitive)} className={`cursor-pointer text-black py-1 px-4 rounded-full ${settings.sensitive?"bg-iconPink":"bg-white"}`}>
                    Sensitive
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ImageEditor