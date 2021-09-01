import {useState} from 'react';
import {EmojiEmotions} from "@material-ui/icons"
import './postForm.scss';


function PostForm(props) {

  const{submit} = props;

  const [content, setContent] = useState("");

  const handleTyping = (event) => {
    setContent(event.target.value)
   }

  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src="" alt="" />
        <input
          placeholder="What's in your mind?"
          className="shareInput"
          value={content}
          onChange={handleTyping}
        />
      </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
          <div className="shareOptions">
              <div className="shareOption">
                  <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                  <span className="shareOptionText">Feelings</span>
              </div>
          </div>
          <button className="shareButton" type="submit" onClick={()=> submit(content)} >Share</button>
      </div>
    </div>
  </div>
    // <div>
    //   <section className="new-post">
    //     <form id="user-input" autoComplete="off" onSubmit={(event) => event.preventDefault()}>
    //       <input
    //         className="post__create-input"
    //         content="content"
    //         type="text"
    //         placeholder="What are you thinking about"
    //         value={content}
    //         onChange={handleTyping}
    //       />
    //       <div>
    //         <button type="submit">Submit</button>
    //       </div>
    //     </form>    
    //   </section>
    // </div>
  )
}

export default PostForm


