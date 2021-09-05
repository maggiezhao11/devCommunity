import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import ChatMessageListItem from "./ChatMessageListItem";

function ChatMessageList({ socket, username, room }) {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Chat Room: {room}</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
                //previously using idx as a key, but its better to use something unique from the message.
                key={messageContent.username + "" + messageContent.time }>
              <ChatMessageListItem {...messageContent}/>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
    </div>
  );
}

export default ChatMessageList;