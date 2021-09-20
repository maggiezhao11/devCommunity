import {useState, useRef, useEffect} from 'react';
import {EmojiEmotions} from "@material-ui/icons";
// import InputEmoji from 'react-input-emoji'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import './postForm.scss';

function PostForm({submit, user}) {

  const avatar = user.avatar

  const [content, setContent] = useState("");
  const [isEmojiShow, setIsEmojiShow] = useState(false);
  const [characterPosition, setCharacterPosition] = useState(0);
  const ref = useRef(null);

  const toggleEmoji = () => {
    setIsEmojiShow(!isEmojiShow);
  };
  

  const handleTyping = (event) => {
    setContent(event.target.value);
    // setCharacterPosition(ref.current.selectionStart);
    // if (ref.current.selectionStart !== content.length) {
    //   setCharacterPosition(ref.current.selectionStart);
    //   } 
        // setCharacterPosition((cp) => cp + 1);

   }
   
  const onEmojiClick = (emojiObject) => {
    console.log("emojiObject:", emojiObject);
    const cursor = ref.current.selectionStart;
    // setCharacterPosition(cursor);
    console.log("cursor:", cursor);
    const text = content.slice(0, cursor) + emojiObject.native + content.slice(cursor);
    // console.log("text:", text);
    setContent(text);
    setCharacterPosition(cursor + 2);
    // setCharacterPosition((cp) => {
    //   console.log('test: ', cp, ref.current.selectionStart);
    //   return cp + 1;
    // });

  };

  // const onFocus = () => {
  //   console.log("ref.current.selectionStart", ref.current.selectionStart);
  //   // console.log("content.length", content.length);
  //   // if (ref.current.selectionStart !== content.length) {
  //   //   setCharacterPosition(ref.current.selectionStart);
  //   //   } 

  // }

  // if (ref.current) { 
  //  ref.current.selectionStart = characterPosition;
  // ref.current.selectionEnd = characterPosition;
  // }

  useEffect(() => {
    ref.current.selectionStart = characterPosition;
    ref.current.selectionEnd = characterPosition;
  }, [characterPosition]);

  // function handleOnEnter (text) {
  //   console.log('enter', text)
  // }
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src={avatar} alt="" />
        <div onClick={() => {
          console.log("characterPosition", characterPosition);
          ref.current.focus();
          // ref.current.selectionStart = characterPosition;
          }}>
        {isEmojiShow && 
          < Picker onSelect={onEmojiClick} title='Pick your emoji…' emoji='point_up' style={{ position: 'absolute', top: '150px', left: '0px' }} />}
        </div>
        <textarea
          ref={ref}
          placeholder="What's in your mind?"
          type="text"
          className="shareInput"
          value={content}
          onChange={handleTyping}
          onFocus={onFocus}
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
            toggleEmoji()
          }} >Share</button>
      </div>
    </div>
  </div>
  )
}

export default PostForm
