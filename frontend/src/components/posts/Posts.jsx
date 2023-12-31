import React, { useState, useEffect } from "react";
import './posts.scss'
import Post from "../post/Post";
import axios from "axios";
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function Posts({userId}){

  const {currentUser} = useContext(AuthContext)
 
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get("/posts?userId="+(userId ?userId : currentUser.id)).then(
        (res) => {
          return res.data
        }
      ),
  })


    return(
        <div className="posts">
          { error ? "Something went wrong" : isLoading ? "loading" : data.map(post=>{
            return(
          <Post post={post}  key={post.id}/>
            )
       })}
        </div>
    )
}