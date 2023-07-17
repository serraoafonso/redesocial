import React, { useContext, useState } from 'react'
import './profile.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Posts from '../../components/posts/Posts';
import {
    useMutation,
    useQueryClient,
    useQuery
  } from '@tanstack/react-query'

  import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { Update } from '../../components/update/Update';

function Profile(){
  const [openUpdate, setOpenUpdate] = useState(false)

const {currentUser} = useContext(AuthContext)

const userId = useLocation().pathname.split('/')[2]

    const { isLoading, error, data } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
          makeRequest.get("/users/find/"+userId).then(
            (res) => {
              return res.data
            }
          )
        })

        const {isLoading: rIsLoading,  data: relationshipData } = useQuery({
          queryKey: ['relationship'],
          queryFn: () =>
            makeRequest.get("/relationships?followedUserId="+userId).then(
              (res) => {
                return res.data
              }
            )
          })



          const queryClient = useQueryClient()

    const mutation = useMutation({
      mutationFn: (following)=>{
        if(following) return makeRequest.delete("/relationships?userId="+userId);
        else return makeRequest.post("/relationships", {userId});
        
      },
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['relationship'] })
      },
    })

    const handleFollow = ()=>{
      if(relationshipData == null || relationshipData == undefined){
        mutation.mutate(false)
      }else{
        mutation.mutate(relationshipData.includes(currentUser.id))
      }
      
    }

    return(
        <div className="profile">
            {isLoading ? "Loading..." : <>
          <div className="images">
            <img src={"upload/"+data?.coverPic} alt="" className='cover'/>
            <img src={"upload/"+data?.profilePic} alt="" className='profilePic'/>
          </div>
          <div className="profileContainer">
            <div className="uInfo">
                <div className="left">
                <a href="http://facebook.com" font-size='large'>
                    <FacebookOutlinedIcon/>
                </a>
                <a href="http://instagram.com"  font-size='large'>
                    <InstagramIcon/>
                </a>
                <a href="http://twitter.com"  font-size='large'>
                    <TwitterIcon/>
                </a>
                <a href="http://likedin.com"  font-size='large'>
                    <LinkedInIcon/>
                </a>
                <a href="http://pinterest.com"  font-size='large'>
                    <PinterestIcon/>
                </a>
                </div>
                <div className="center">
                <span>{data?.name}</span>
                <div className="info">
                    <div className="item">
                        <PlaceIcon/>
                        <span>{data?.city}</span>
                    </div>
                    <div className="item">
                        <LanguageOutlinedIcon/>
                        <span>{data?.website}</span>
                    </div>
                    
                </div>
                {userId == currentUser.id ? (<button onClick={()=>setOpenUpdate(true)}>Update</button>) :  (<button onClick={handleFollow}>{relationshipData?.includes(currentUser.id) ? 'Following' : "Follow"}</button>)}
                </div>
                <div className="right">
                 <EmailOutlinedIcon/>
                 <MoreVertOutlinedIcon/>
                </div>
            </div>
            <Posts userId={userId}/>
          </div>
          </>
}           
        {openUpdate && <Update setOpenUpdate={setOpenUpdate} user= {data}/>}
        </div>
    )
}

export default Profile