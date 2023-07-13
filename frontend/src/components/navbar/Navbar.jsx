import './navbar.scss'
import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import profile from '../../assets/user.png'
function Navbar(){

    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)
    

    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                <span>lamasocial</span>
                </Link>
                <HomeOutlinedIcon/>
                {!darkMode ? (<DarkModeOutlinedIcon onClick={toggle} style={{cursor: 'pointer'}}/>) : (<WbSunnyOutlinedIcon onClick={toggle} style={{cursor: 'pointer'}}/>)}
                <GridViewOutlinedIcon/>
                <div className='search'>
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder='Search'/>
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon/>
                <MailOutlinedIcon/>
                <NotificationsOffOutlinedIcon/>
                <div className="user">
                    <img src={currentUser.profilePic == null ? profile : currentUser.profilePic}/>
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar