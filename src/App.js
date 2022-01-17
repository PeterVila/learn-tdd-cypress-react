import React, {useState} from 'react';
import MessageList from "./MessageList";
import NewMessageForm from "./NewMessageForm";


const App = () => {
  const [messages, setMessages] = useState([])
  const handleSend = (newMessage) => {
    setMessages([...messages, newMessage])
  }
  return (
    <>
      <NewMessageForm onSend={handleSend}/>
      <MessageList data={messages} />
    </>
  )
}

export default App;
