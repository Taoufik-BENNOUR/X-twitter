import { prisma } from "@/prisma"
import postData from "../utils/postData.json"
import Post from "./Post"
import { auth } from "@clerk/nextjs/server"

const Feed = async({userProfileId}:{userProfileId?:string}) => {
  
  const {userId} = await auth()
  if(!userId) return
  const whereCondition = userProfileId? {parentPostId:null,userId:userProfileId} : {
    parentPostId:null,
    userId:{
    in:[userId,...(await prisma.follow.findMany({where:{followerId:userId},select:{followingId:true}})).map(follow=>follow.followingId)]
  }}

  
  const posts = await prisma.post.findMany({where:whereCondition})


  return (
    <div>
      {posts.map((post,i)=>
        <Post post={post} key={i} type="comment"/>
      )}
    </div>
  )
}

export default Feed