import './post.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {Link} from 'react-router-dom'
import Comments from '../comments/Comments';
import { useContext, useState } from 'react';
import moment from 'moment'
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from "../../axios";
import { AuthContext } from '../../context/authContext';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export default function Post({post}){

    const [commentOpen, setCommentOpen] = useState(false)
    const {currentUser} = useContext(AuthContext)

    
  const { isLoading, error, data } = useQuery({
    queryKey: ['likes', post.id],
    queryFn: () =>
      makeRequest.get("/likes/?postId="+post.id).then(
        (res) => {
          return res.data
        }
      ),
  })


  const queryClient = useQueryClient()

    const mutation = useMutation({
      mutationFn: (liked)=>{
        if(liked) return makeRequest.delete("/likes?postId="+post.id);
        return makeRequest.post("/likes", {postId: post.id});
        
      },
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['likes'] })
      },
    })


  const handleLike = ()=>{
    mutation.mutate(data.includes(currentUser.id))
  }

    return(
        <div className="post">
            <div className="container">
            <div className="user">
                <div className="userinfo">
                    <img src={post.profilePic} alt="" />
                     <div className='details'>
                        <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: 'inherit'}}>
                          <span className='name'>{post.name}</span>
                        </Link>
                        <span className='date'>{moment(post.createdAt).fromNow()}</span>
                     </div>
                </div>       
                <MoreHorizOutlinedIcon/>
            </div>
            <div className="content">
              <p>{post.desc}</p>
              <img src={"./uploads/"+post.img} alt="" />
            </div>
            <div className="info">
            <div className="item">
            {isLoading ? "loading" :   !data.includes(currentUser.id) ? <FavoriteBorderOutlinedIcon onClick= {handleLike}/> : <FavoriteOutlinedIcon  style={{color: 'red'}} onClick= {handleLike}/>}
            {data?.length} Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
            12 Comments
            </div>
            <div className="item">
            <ShareOutlinedIcon/> 
            12 Shares
            </div>
            </div>
            { commentOpen && <Comments postId={post.id}/>}
            </div>
        </div>
 
    )
}