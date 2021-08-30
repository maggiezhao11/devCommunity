import React, {useState} from 'react';


function PostForm() {

  const [content, setContent] = useState(" ");

  const handleTyping = (event) => {
    setContent(event.target.value)
   }

  return (
    <div>
      <section class="new-post">
        <form id="user-input" autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="post__create-input"
            content="content"
            type="text"
            placeholder="What are you thinking about"
            value={content}
            onChange={handleTyping}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>    
      </section>
    </div>
  )
}

export default PostForm


