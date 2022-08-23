import React, { useState } from "react";
import './ChatBox.css';

const ChatBox = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (event:any, set:any) => {
    set(event.target.value);
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(name, message);
    setMessage('');
  }

    return <div className="ChatBox">  
      <div id='ChatBox'></div>
      <div id="cbfiller"></div>
      <form id="cbform" autoComplete="off">
          <input type="text"  placeholder="Name" className="cbinput" id="name" value = {name} onChange={(e) => handleChange(e, setName)}/>
          <input type="text"  placeholder="message" className="cbinput" id="message" value={message} onChange={(e) => handleChange(e, setMessage)}/>
        <input type="submit" value="Submit" className="cbinput" id="submit" onClick={(e) =>handleSubmit(e)}/>
      </form>
    </div>;
  }
  
export default ChatBox;