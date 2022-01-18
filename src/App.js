import React, {useState} from 'react';
import MessageList from "./MessageList";
import NewMessageForm from "./NewMessageForm";
import Display from "./Display"
import Button from "./Button"

const App = () => {
  const [messages, setMessages] = useState([])
  const handleSend = (newMessage) => {
    setMessages([...messages, newMessage])
  }
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Add" />
      <Button onClick={setToZero} text="Reset" />
      <Button onClick={decreaseByOne} text="Subtract" />
    </>
  );
}

export default App;
