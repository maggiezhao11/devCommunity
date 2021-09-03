import React, {useEffect, useState} from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import axios from 'axios';
import './posts.scss';



function Posts(props) {
  // console.log("posts line 10 props:", props);
  const {user} = props;
  const [posts, setPosts] = useState([]);

function addPost(post) {
  // return axios.post(`http://localhost:3002/posts/${id}`, {post}) 
  return axios.post("http://localhost:3002/posts", {
    user_id: 1,
    content: post 
  })
  .then(() => {
    getPostsData(user); 
  })

}

function deletePost(post) {
  // return axios.post(`http://localhost:3002/posts/${id}`, {post}) 
  console.log("this is from delete post", post);
  // return axios.delete("http://localhost:3002/posts/"+ post, {post})
  return axios.delete(`http://localhost:3002/posts/${post}`) 
  .then(() => {
    getPostsData(user); 
  })

}
 //use helper function to fetch data everytime there are changes. make codes modular.
 const getPostsData = (user) => {
    if(user && user.id) {
    // axios.get(`http://localhost:3002/posts?user_id=${id}`)
    // hard coded url is only for test cases
    axios.get("http://localhost:3002/posts")
    // axios.get("http://localhost:3002/posts?user_id=1")
      .then(res => {
        // console.log("It is working");
        // console.log(res.data);
        setPosts(res.data);
      });
    }
 }

  useEffect(() => {

    getPostsData(user); 
          
  }, [user]);

  return (
    <div className="posts">
      <div className="postsWrapper"></div>
      <PostForm submit={addPost} user={props.user} />
      <PostList posts={posts} deletePost={deletePost}/>
    </div>
  )
}

export default Posts
