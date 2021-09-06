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
  )
}

export default PostForm


