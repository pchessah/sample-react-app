import { Card, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Post } from "../model/post.model";
import { User } from "../model/user.model";
import UserPostsService from "../services/UserPostsService";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { getPosts } from "../state/reducers/posts.reducer";

interface Props extends User {}

function SingleUserPostsModal(props: Props) {
  

  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const  dispatch= useAppDispatch();
  const posts = useAppSelector((state => state.posts.value.filter(post => post.userId === props.id)));

  useEffect(() => {
    UserPostsService.getPosts()
      .then((response) => {
        const data = response.data as Post[];
         dispatch(getPosts(data));        
        })
      .then(() => setIsLoading(false));
  }, [dispatch]); 

  return (
    <>
      {isLoading ?
        <Spin/> : 
        posts.map((post: Post) => {
          return (
            <Card
              key={post.id}
              title={post.title}
              style={{ width: 600, marginBottom: "10px" }}
            >
              <div className="container">
                <p>{post.body}</p>
              </div>
            </Card>
          );
        })}
    </>
  );
}

export default SingleUserPostsModal;
