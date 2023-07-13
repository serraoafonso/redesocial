import React, { useContext } from 'react'
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

function Profile(){

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
        console.log(data)


    return(
        <div className="profile">
            {isLoading ? "Loading..." : <>
          <div className="images">
            <img src={data?.coverPic} alt="" className='cover'/>
            <img src={data?.profilePic} alt="" className='profilePic'/>
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
                {userId == currentUser.id ? (<button>Update</button>) :  (<button>Follow</button>)}
                </div>
                <div className="right">
                 <EmailOutlinedIcon/>
                 <MoreVertOutlinedIcon/>
                </div>
            </div>
            <Posts/>
          </div>
          </>
}
        </div>
    )
}

export default Profile