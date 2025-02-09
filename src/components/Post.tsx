import Image from 'next/image'
import React from 'react'
import PostInfo from './PostInfo'
import { SyncRounded, Verified } from '@mui/icons-material'
import PostInteractions from './PostInteractions'
import Link from 'next/link'

type TwitterPost= {
    id:number;
    username: string;
    handle: string;
    time_ago: string;
    post_content: string;
    hashtags: string[];
    likes: number;
    retweets: number;
    replies: number;
    quotes: number;
    post_image:string;
  }
  type PostProps = {
    post: TwitterPost | undefined ;
  };
const Post = ({post}:PostProps) => {
    if (!post) {
        return <div>Post not found!</div>;  // Handle the undefined case
      }
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
        <div className='flex items-center gap-2 text-textGray mb-2 text-sm'>
            <SyncRounded/>
            <span>Double reposted</span>
        </div>
        <div className='flex gap-4'>
            <div className='h-10 w-10 rounded-full overflow-hidden relative'>
                <Image src={"/globe.svg"} alt='globe' fill />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 flex-wrap text-textGray">
                        <h1 className='font-bold'>{post.username}<Verified  className='text-iconBlue' sx={{ fontSize: 20 }} /> </h1>
                        <span>{post.handle}</span>
                        <span>{post.time_ago}</span>
                    </div>
                    <PostInfo/>
                </div>
                <p className='flex'>
                    {post.post_content}
                </p>
                <Link href={`/user/status/${post.id}`}>
                <Image src={post.post_image} alt='aot' width={600} height={600} />
                </Link>
                <PostInteractions likes={post.likes} retweets={post.retweets} replies={post.replies} quotes={post.quotes}    />
            </div>
        </div>
    </div>
  )
}

export default Post