import React, { useState, useEffect } from "react";
import './posts.scss'
import Post from "../post/Post";
import axios from "axios";


export default function Posts(){

const [posts, setPosts] = useState([])
  const buscarPosts = async()=>{
    const token = localStorage.getItem("accessToken"); // Assumindo que você armazene o token de acesso no localStorage
    try {
      const res = await axios.get("http://localhost:8800/api/posts", {
        withCredentials: true,
      })
      setPosts(res.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    buscarPosts();
  }, []);

    return(
        <div className="posts">
          {posts.map(post=>{
            console.log(post)
            return(
          <Post post={post} key = {post.id}/>
            )
       })}
        </div>
    )
}