import {useState} from 'react';
import {EmojiEmotions} from "@material-ui/icons";
// import InputEmoji from 'react-input-emoji'
import './postForm.scss';

function PostForm({submit, user}) {

  const avatar = user.avatar

  const [content, setContent] = useState("");
  

  const handleTyping = (event) => {
    setContent(event.target.value)
   }

  // function handleOnEnter (text) {
  //   console.log('enter', text)
  // }
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src={avatar} alt="" />
        <input
          placeholder="What's in your mind?"
          type="text"
          className="shareInput"
          value={content}
          onChange={handleTyping}
        />
        {/* <InputEmoji
          value={content}
          onChange={setContent}
          cleanOnEnter
          onEnter={handleOnEnter}
          className="shareInput"
          placeholder="What's in your mind?"
        /> */}
      </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
          <div className="shareOptions">
              <div className="shareOption">
                  <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                  <span className="shareOptionText">Feelings</span>
              </div>
          </div>
          <button className="shareButton" type="submit" onClick={()=> {
            submit(content)
            setContent("")
          }} >Share</button>
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


