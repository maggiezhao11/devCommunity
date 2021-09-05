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
          <div className="joinChatHeader"> 
            <h3> DevChat</h3>
          </div>
          <div className="joinChatForm">
            <form>
              <div className="form-group row">
                <label for="username" className="col-sm-2 col-form-label">Nickname</label>
                <div className="col-sm-10 chatInput">
                  <input type="text" readonly class="form-control-plaintext" id="username"
                    type="text"
                    placeholder="Type your nickname..."
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="room" className="col-sm-2 col-form-label">Room</label>
                <div className="col-sm-10 chatInput">
                  <input className="form-control" id="room" type="text"
                    placeholder="Type Room ID..."
                    onChange={(event) => {
                      setRoom(event.target.value);
                    }} />
                </div>
              </div>
              
            </form>
          </div> 
            <div className="chatButton" >
              <button onClick={() => joinRoom()}>Join A Room</button>
            
          </div>

          


            
        
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