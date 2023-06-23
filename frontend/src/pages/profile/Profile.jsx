import React from 'react'
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

function Profile(){
    return(
        <div className="profile">
          <div className="images">
            <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg" alt="" className='cover'/>
            <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg" alt="" className='profilePic'/>
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
                <span>Hane Doe</span>
                <div className="info">
                    <div className="item">
                        <PlaceIcon/>
                        <span>USA</span>
                    </div>
                    <div className="item">
                        <LanguageOutlinedIcon/>
                        <span>lama.dev</span>
                    </div>
                    
                </div>
                <button>Follow</button>
                </div>
                <div className="right">
                 <EmailOutlinedIcon/>
                 <MoreVertOutlinedIcon/>
                </div>
            </div>
            <Posts/>
          </div>
        </div>
    )
}

export default Profile