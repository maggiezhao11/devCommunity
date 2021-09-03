import React, {useState, useEffect} from 'react';
import { MoreVert, Favorite, Delete, Create } from "@material-ui/icons";
import './postListItem.scss';



function PostListItem(props) {
  const { id, content, first_name, photo, avatar, deletePost, user_id} = props;
  
  const [like, setLike] = useState(0)
  const [isLiked, setIsLiked] = useState(false);
  const [isRed, setIsRed] = useState("likeIcon");

  const likeHandler =() => {
    setLike(isLiked ? like -1 : like +1);
    setIsLiked(!isLiked);
  }

  useEffect (() => {
    if (isLiked) setIsRed("likedIcon");
    else setIsRed("likeIcon")
  }, [isLiked])

  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src={avatar}
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
          <Favorite className={`${isRed}`} onClick={() => likeHandler()}/>
          <span className="postLikeCounter" > {like} people like it</span>
        </div>
        <div className="postBottomRight">
          <Create className="commentIcon" />
          <Delete className="deleteIcon" onClick={() => deletePost(user_id, id)} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default PostListItem
