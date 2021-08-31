import React from 'react';
import { MoreVert } from "@material-ui/icons";
import './postListItem.scss';



function PostListItem(props) {

  const { content, first_name, photo} = props;

  return (

    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src=""
            alt=""
          />
          <span className="postUsername">
            {first_name}
          </span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{content}</span>
        <img className="postImg" src={photo} alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img className="likeIcon" src="assets/heart.png"  alt="like pic" />
          <span className="postLikeCounter"> 32 people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">comments</span>
        </div>
      </div>
    </div>
  </div>
    // <div>
    //   <article className="posts">
    //     <header className="posts-header">
    //       <div className="posts-header-left">
    //         <img src={photo} alt={first_name} />
    //         <span>{first_name}</span>
    //       </div>
    //     </header>
    //     <div className="text">{content}</div>
    //     <footer>
    //       <div className="footer-display">
    //         <div className="icon">
    //           <i className="fas fa-flag"></i>
    //           <i className="fas fa-retweet"></i>
    //           <i className="fas fa-heart"></i>
    //         </div>
    //       </div>
    //     </footer>
    //   </article>    
    // </div>
  )
}

export default PostListItem
