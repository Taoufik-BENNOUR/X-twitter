"use client"
import { ArrowBack } from '@mui/icons-material'
import Link from 'next/link'
import { useParams } from 'next/navigation';
import postData from "../../../../utils/postData.json"
import Post from '@/components/Post';


const StatusPage = () => {

  const {postId} = useParams();
  const singlePost = postData.find(post=>post.id===Number(postId))
  
  return (
    <div className=''>
      <div className="flex items-center gap-8 p-4 bg-[#00000084] sticky top-0 backdrop-blur-md">
        <Link href="/">
          <ArrowBack/>
        </Link>
        <h1>T.Dev</h1>
      </div>
        <Post post={singlePost} />
    </div>
  )
}

export default StatusPage