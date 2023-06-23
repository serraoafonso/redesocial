import React from "react";
import './posts.scss'
import Post from "../post/Post";

export default function Posts(){

    const posts = [
        {
            id: 1,
            name: "John doe",
            userId: 1,
            img: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus.",
            profilePic: "https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"
        },
        {
            id: 2,
            name: "John doe",
            userId: 1,
            img: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus." ,
            profilePic: "https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"
        },
        {
            id: 3,
            name: "John doe",
            userId: 1,
            img: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus." ,
            profilePic: "https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"
        },
        {
            id: 4,
            name: "John doe",
            userId: 1,
            img: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus." ,
            profilePic: "https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg"
        },
    ]


    return(
        <div className="posts">
          {posts.map(post=>(
          <Post post={post} key = {post.id}/>
          ))}
        </div>
    )
}