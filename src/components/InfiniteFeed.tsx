"use client"
import { LastPage } from "@mui/icons-material"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { hasExternalOtelApiPackage } from "next/dist/build/webpack-config"
import InfiniteScroll from "react-infinite-scroll-component"
import Post from "./Post"

const fetchPosts = async(pageParam:number,userProfileId?:string)=>{
    const res = await fetch("http://localhost:3000/api/posts?cursor="+pageParam+"&user="+userProfileId)
    return res.json()
}
const InfiniteFeed = ({userProfileId}:{userProfileId?:string}) => {
    const {data,error,status,hasNextPage,fetchNextPage} = useInfiniteQuery(
        {queryKey:["posts"],queryFn:({pageParam=2})=>fetchPosts(pageParam,userProfileId),
        initialPageParam:2,
        getNextPageParam:(LastPage,pages)=> LastPage.hasMore? pages.length+2 : undefined,
    })
    const allPosts = data?.pages.flatMap(page=>page.posts) || []
    
    if(error) return "something went wrong"
  return (
    <InfiniteScroll dataLength={allPosts.length} next={fetchNextPage}
     hasMore={!!hasExternalOtelApiPackage} 
     loader={<h1>Loading</h1>}
     endMessage={<h3>all loaded</h3>}
     >
    {allPosts.map((post,i)=>
        <Post post={post} key={i} type="comment"/>
      )}
    </InfiniteScroll>
  )
}

export default InfiniteFeed