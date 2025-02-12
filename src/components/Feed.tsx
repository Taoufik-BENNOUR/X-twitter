import { prisma } from "@/prisma"
import postData from "../utils/postData.json"
import Post from "./Post"

const Feed = async() => {
  const data = await prisma.post.findMany()
  
  return (
    <div>
      {data.map((post,i)=>
        <Post post={post} key={i} type="comment"/>
      )}
    </div>
  )
}

export default Feed