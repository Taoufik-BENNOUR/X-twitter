"user client"

import { BarChart, Bookmark, BookmarkBorder, BookmarkOutlined, ChatBubbleOutlineRounded, FavoriteBorder, HeartBrokenOutlined, IosShare, SyncRounded } from "@mui/icons-material"

const PostInteractions = ({likes,retweets,replies,quotes}:any) => {
  return (
    <div className="flex items-center justify-between text-sm text-textGray">
        <div className="flex flex-1 justify-between">
          <div className="flex items-center cursor-pointer hover:text-iconBlue gap-1">
            <ChatBubbleOutlineRounded/>
            {replies}
          </div>
          <div className="flex items-center cursor-pointer hover:text-iconGreen gap-1">
          <SyncRounded/>
          {retweets}
          </div>
          <div className="flex items-center cursor-pointer hover:text-iconPink gap-1">
          <FavoriteBorder/>
          {likes}
          </div>
          <div className="flex items-center cursor-pointer hover:text-iconBlue gap-1">
          <BarChart/>
          {quotes}
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