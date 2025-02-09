import postData from "../utils/postData.json"
import Post from "./Post"

const Feed = () => {
  
  return (
    <div>
      {postData.map((post,i)=>
        <Post post={post} key={i}/>
      )}
    </div>
  )
}

export default Feed