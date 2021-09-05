import React, { useState } from "react";
//import SendIcon from '@material-ui/icons/Send';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function ChatMessageForm({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      
    await socket.emit("send_message", messageData);
      setCurrentMessage("");
    }
  };

  const handleTyping = (event) => {
    setCurrentMessage(event.target.value)
   }

  return (
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="What's up..."
          onChange={handleTyping}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={() => sendMessage()} ><SendRoundedIcon fontSize="small"/></button>
      </div>
  );
}

export default ChatMessageForm;
