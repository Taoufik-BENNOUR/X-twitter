"user client"

import { BarChart, Bookmark, BookmarkBorder, BookmarkOutlined, ChatBubbleOutlineRounded, FavoriteBorder, HeartBrokenOutlined, IosShare, SyncRounded } from "@mui/icons-material"

const PostInteractions = () => {
  return (
    <div className="flex items-center justify-between text-sm text-textGray">
        <div className="flex flex-1 justify-between">
          <div className="flex items-center cursor-pointer hover:text-iconBlue gap-1">
            <ChatBubbleOutlineRounded/>
            100
          </div>
          <div className="flex items-center cursor-pointer hover:text-iconGreen gap-1">
          <SyncRounded/>
          100
          </div>
          <div className="flex items-center cursor-pointer hover:text-iconPink gap-1">
          <FavoriteBorder/>
          100
          </div>
          <div className="flex items-center cursor-pointer hover:text-iconBlue gap-1">
          <BarChart/>
          100
          </div>
        </div>
        <div className="flex gap-2 pl-8">
            <IosShare className="hover:text-iconBlue cursor-pointer" />
            <BookmarkBorder className="hover:text-iconBlue cursor-pointer"  />
        </div>
    </div>
  )
}

export default PostInteractions