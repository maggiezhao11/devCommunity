import React from 'react';



function PostListItem(props) {

  const { content, first_name, photo} = props;

  return (
    <div>
      <article class="posts">
        <header class="posts-header">
          <div class="posts-header-left">
            <img src={photo} />
            <span>{first_name}</span>
          </div>
        </header>
        <div class="text">{content}</div>
        <footer>
          <div class="footer-display">
            <div class="icon">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </div>
        </footer>
      </article>    
    </div>
  )
}

export default PostListItem
