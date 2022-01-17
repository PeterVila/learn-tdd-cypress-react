import React, {useState} from 'react';

export default function NewMessageForm({onSend}) {
  const [input, setInput] = useState('');

  const handleSend = e => {
    onSend(input);
    setInput('');
  }

  return (
    <div className="message-form">
      <input
        type="text"
        data-testid="messageText"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        data-testid="sendButton"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  )
}
