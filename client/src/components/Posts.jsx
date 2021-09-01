import React, {useEffect, useState} from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import axios from 'axios';
import './posts.scss';
// import addPost from '../helper/addPost';


function Posts(props) {
  const {user} = props;
  const [posts, setPosts] = useState([]);
  const [upLoaded, setUploaded] = useState(false) 

function addPost(post) {
  // return axios.put(`http://localhost:3002/posts/${id}`, {post}) 
  return axios.post("http://localhost:3002/posts", {
    user_id: 1,
    content: post 
  })
  .then(() => {
    setUploaded(true)
  })

}

  useEffect(() => {
    if(user && user.id) {
        // axios.get(`http://localhost:3002/posts?user_id=${id}`)
        // hard coded url is only for test cases
        axios.get("http://localhost:3002/posts?user_id=1")
          .then(res => {
            // console.log("It is working");
            // console.log(res.data);
            setPosts(() => {
              return res.data;
            });
          });
        }
          
  }, [user, upLoaded]);

  return (
    <div className="posts">
      <div className="postsWrapper"></div>
      <PostForm submit={addPost}/>
      <PostList posts={posts}/>
    </div>
  )
}

export default Posts
