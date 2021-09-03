import "./chat.scss";
import io from "socket.io-client";
import { useState } from "react";
import ChatMessageList from "./ChatMessageList";
import ChatMessageForm from "./ChatMessageForm";



const socket = io.connect("http://localhost:3002");

function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="chatContainer">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Type your nickname..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Type Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={() => joinRoom()}>Join A Room</button>
        </div>
      ) : (
        <>
        <ChatMessageList socket={socket} username={username} room={room} />
        <ChatMessageForm socket={socket} username={username} room={room} />
        </>
      )}
    </div>
  );
}

export default Chat;