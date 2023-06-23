import React, { useContext } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'


function Comments(){

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            name: "John doe",
            userId: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus.",
            profilePic: "https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"
        },
        {
            id: 2,
            name: "John doe",
            userId: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus." ,
            profilePic: "https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"
        },
        {
            id: 3,
            name: "John doe",
            userId: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus." ,
            profilePic: "https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"
        },
        {
            id: 4,
            name: "John doe",
            userId: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus." ,
            profilePic: "https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"
        },
    ]
    return(
      <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='Write a comment' />
            <button>Send</button>
        </div>
      {comments.map(comment=>(
        <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className='date'>1 hour ago</span>
        </div>
      ))}
      </div>
    )
}
export default Comments