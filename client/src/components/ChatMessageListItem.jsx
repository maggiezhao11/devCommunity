import React from 'react'

export default function ChatMessageListItem(props) {

  const { message, time, author} = props
  return (
    <div>
      
      <div className="message-meta">
        <p id="author">{author} </p>
        <p id="time">{time}</p>
        
      </div>
      <div className="message-content">
        <p>{message}</p>
      </div>
    </div>
  )
}
