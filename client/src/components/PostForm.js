import {useState, useRef} from 'react';
import {EmojiEmotions} from "@material-ui/icons";
// import InputEmoji from 'react-input-emoji'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import './postForm.scss';

function PostForm({submit, user}) {

  const avatar = user.avatar

  const [content, setContent] = useState("");
  const [isEmojiShow, setIsEmojiShow] = useState(false);
  const ref = useRef(null);

  const toggleEmoji = () => {
    setIsEmojiShow(!isEmojiShow);
  };
  

  const handleTyping = (event) => {
    setContent(event.target.value)
   }
   
  const onEmojiClick = (event, emojiObject) => {
    const cursor = ref.current.selectionStart;
    const text = content.slice(0, cursor) + emojiObject.emoji + content.slice(cursor);
    handleTyping(text);
  };


  // function handleOnEnter (text) {
  //   console.log('enter', text)
  // }
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src={avatar} alt="" />
        {isEmojiShow && 
          < Picker onEmojiClick={onEmojiClick} title='Pick your emoji…' emoji='point_up' style={{ position: 'absolute', top: '240px', left: '250px' }} />}
        <input
          ref={ref}
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
              <div className="shareOption" onClick={()=> toggleEmoji()} >
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                <span className="shareOptionText">Feelings</span>
            </div>
                  {/* {isEmojiShow && 
                  < Picker onEmojiClick={onEmojiClick} title='Pick your emoji…' emoji='point_up' style={{ position: 'absolute', top: '100px', left: '250px' }} />} */}
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


